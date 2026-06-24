"use client";

import { forwardRef, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Model.tsx - Placeholder "AI Core" 3D composition.
 * Uses Drei-style primitives (no external .glb dependency).
 * Swap path: replace this composition with useGLTF for a real model.
 */

function CoreShape({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (reducedMotion || delta === 0) return;
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.15;
      wireRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <group>
      {/* Solid core */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#0a0a0f"
          emissive="#22D3EE"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      {/* Wireframe overlay */}
      <mesh ref={wireRef} scale={1.15}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshBasicMaterial
          color="#8B5CF6"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

function OrbitingShape({
  radius,
  speed,
  offset,
  color,
  geometry,
}: {
  radius: number;
  speed: number;
  offset: number;
  color: string;
  geometry: "torus" | "dodecahedron";
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 0.5) * 0.5;
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      {geometry === "torus" ? (
        <torusGeometry args={[0.25, 0.08, 16, 32]} />
      ) : (
        <dodecahedronGeometry args={[0.3, 0]} />
      )}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  );
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 220;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#22D3EE"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

type ModelProps = {
  reducedMotion?: boolean;
};

const Model = forwardRef<THREE.Group, ModelProps>(function Model(
  { reducedMotion = false },
  ref
) {
  return (
    <group ref={ref}>
      <CoreShape reducedMotion={reducedMotion} />
      {!reducedMotion && (
        <>
          <OrbitingShape
            radius={2.2}
            speed={0.5}
            offset={0}
            color="#22D3EE"
            geometry="torus"
          />
          <OrbitingShape
            radius={2.5}
            speed={0.4}
            offset={Math.PI}
            color="#8B5CF6"
            geometry="dodecahedron"
          />
          <OrbitingShape
            radius={1.8}
            speed={0.7}
            offset={Math.PI / 2}
            color="#22D3EE"
            geometry="dodecahedron"
          />
          <ParticleField />
        </>
      )}
    </group>
  );
});

export default Model;
