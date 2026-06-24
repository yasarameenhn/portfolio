"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Model from "@/components/three/Model";
import ScrollCamera from "@/components/three/ScrollCamera";

function StaticFallback() {
  return (
    <div
      aria-hidden="true"
      className="h-full w-full bg-[radial-gradient(circle_at_70%_35%,rgba(34,211,238,0.32),transparent_28%),radial-gradient(circle_at_55%_60%,rgba(139,92,246,0.24),transparent_34%)]"
    />
  );
}

function useSceneSupport() {
  const [state, setState] = useState({
    reducedMotion: false,
    webgl: true,
  });

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let webgl = Boolean(window.WebGLRenderingContext);
    try {
      const canvas = document.createElement("canvas");
      webgl =
        webgl &&
        Boolean(
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
        );
    } catch {
      webgl = false;
    }

    setState({ reducedMotion, webgl });
  }, []);

  return state;
}

function SceneContent({ reducedMotion }: { reducedMotion: boolean }) {
  const modelRef = useRef<THREE.Group>(null);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight color="#22D3EE" position={[10, 10, 10]} intensity={1.5} />
      <pointLight color="#8B5CF6" position={[-10, -10, -5]} intensity={1.2} />
      <Suspense fallback={null}>
        <Model ref={modelRef} reducedMotion={reducedMotion} />
      </Suspense>
      <ScrollCamera targetRef={modelRef} reducedMotion={reducedMotion} />
      <OrbitControls
        enableDamping
        enablePan={false}
        enableZoom={false}
        autoRotate={!reducedMotion}
        autoRotateSpeed={0.8}
        dampingFactor={0.05}
      />
    </>
  );
}

export default function HeroScene() {
  const { reducedMotion, webgl } = useSceneSupport();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "120px 0px", threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (!webgl || !visible) {
    return (
      <div ref={ref} className="h-full w-full">
        <StaticFallback />
      </div>
    );
  }

  return (
    <div ref={ref} className="h-full w-full">
      <Canvas
        camera={{ fov: 45, position: [0, 0, 6] }}
        dpr={[1, 1]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <SceneContent reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
