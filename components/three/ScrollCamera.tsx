"use client";

import { type MutableRefObject } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type ScrollCameraProps = {
  targetRef: MutableRefObject<THREE.Group | null>;
  reducedMotion?: boolean;
};

function getScrollProgress() {
  if (typeof window === "undefined") return 0;

  const scrollable =
    document.documentElement.scrollHeight - window.innerHeight;

  if (scrollable <= 0) return 0;
  return THREE.MathUtils.clamp(window.scrollY / scrollable, 0, 1);
}

export default function ScrollCamera({
  targetRef,
  reducedMotion = false,
}: ScrollCameraProps) {
  const { camera } = useThree();

  useFrame(() => {
    const progress = reducedMotion ? 0 : getScrollProgress();
    const targetZ = THREE.MathUtils.lerp(6, 4, progress);
    const targetX = THREE.MathUtils.lerp(0, 0.8, progress);
    const targetY = THREE.MathUtils.lerp(0, -0.25, progress);

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    camera.lookAt(0, 0, 0);

    const target = targetRef.current;
    if (!target) return;

    const scale = THREE.MathUtils.lerp(1, 0.6, progress);
    target.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.06);
    target.rotation.y = THREE.MathUtils.lerp(
      target.rotation.y,
      progress * 2.4,
      0.04
    );
    target.position.x = THREE.MathUtils.lerp(
      target.position.x,
      progress * 1.2,
      0.04
    );
  });

  return null;
}
