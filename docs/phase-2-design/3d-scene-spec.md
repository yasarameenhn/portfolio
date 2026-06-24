# 3D Scene Spec — Yasar Ameen Portfolio

## 1. Overview
An interactive, scroll-reactive 3D hero scene built with React Three Fiber (R3F) + Drei. The scene is decorative but engaging: a floating, neon-accented geometric "AI core" that auto-rotates, responds to drag, and reacts to page scroll.

## 2. Scene Composition

### 2.1 Model (Placeholder)
- **v1 approach:** Use a Drei primitive composition (no external `.glb` dependency) to keep bundle small and avoid asset loading issues.
- **Geometry:** A central icosahedron (wireframe + solid) surrounded by orbiting smaller shapes (torus, dodecahedron) and a particle field.
- **Swap path:** `components/three/Model.tsx` is isolated so a real `.glb` can replace the primitive later via `useGLTF`.
- **Alternative:** If a small open-source `.glb` is desired, place it in `public/models/` and load with `useGLTF`.

### 2.2 Materials
- **Core:** `meshStandardMaterial` with emissive cyan (`#22D3EE`), low roughness, metalness ~0.6.
- **Wireframe overlay:** `meshBasicMaterial` wireframe, violet (`#8B5CF6`), transparent (opacity 0.3).
- **Orbiting shapes:** `meshStandardMaterial` emissive, alternating cyan/violet.
- **Particles:** `Points` with `PointsMaterial`, small size, cyan, additive blending.

### 2.3 Lighting
- `ambientLight` intensity 0.3.
- `pointLight` cyan at [10, 10, 10], intensity 1.5.
- `pointLight` violet at [-10, -10, -5], intensity 1.2.
- Optional `Environment` preset "night" for subtle reflections (Drei).

### 2.4 Camera
- Perspective camera, fov 45, position [0, 0, 6].
- Scroll-reactive: camera position/rotation lerps based on scroll progress (see §4).

## 3. Interactivity
- **Drag to rotate:** `OrbitControls` (Drei) with `enableZoom={false}`, `enablePan={false}`, `autoRotate` true, `autoRotateSpeed` ~0.8, `dampingFactor` 0.05.
- **Touch support:** OrbitControls handles touch by default for mobile drag-rotate.
- **Scroll reactive:** A `useScroll` progress value (0–1) drives camera/model transforms via `useFrame` lerp.

## 4. Scroll Mapping
| Scroll progress | Camera Z | Model rotation Y | Model scale | Notes |
|-----------------|----------|------------------|------------|-------|
| 0.0 (Hero) | 6 | 0 | 1.0 | Centered, auto-rotate |
| 0.25 (About) | 5.5 | +0.6 | 0.95 | Slight angle |
| 0.5 (Skills) | 5 | +1.2 | 0.85 | Smaller, side drift |
| 0.75 (Projects) | 4.5 | +1.8 | 0.75 | Dimmed |
| 1.0 (Contact) | 4 | +2.4 | 0.6 | Fades/exits |

- Use `THREE.MathUtils.lerp` for smooth transitions in `useFrame`.

## 5. Performance
- `<Canvas dpr={[1, 2]} gl={{ antialias: true, powerPreference: "high-performance" }}>` 
- `frameloop="demand"` not used (auto-rotate needs continuous); keep default but optimize.
- Cap particle count to ~500.
- Use `Suspense` with a null fallback around the scene.
- Detect WebGL support; if unavailable, render a static gradient/placeholder.

## 6. Fallback
- If WebGL context creation fails or `window.WebGLRenderingContext` is undefined, show a CSS gradient orb with the same neon aesthetic as a static hero visual.
- If `prefers-reduced-motion`, disable auto-rotate and scroll-reactive motion; show static model.

## 7. File Responsibilities
| File | Responsibility |
|------|----------------|
| `components/three/HeroScene.tsx` | R3F `<Canvas>`, lights, controls, mounts `Model` + `ScrollCamera` |
| `components/three/Model.tsx` | The 3D model/primitive composition (swappable) |
| `components/three/ScrollCamera.tsx` | Reads scroll progress, updates camera/model in `useFrame` |
| `components/sections/Hero.tsx` | Lazy-imports `HeroScene` via `next/dynamic`, provides fallback |

## 8. Risks
- **Heavy GPU usage on mobile:** Mitigate by capping DPR, reducing particles, disabling `Environment` on small screens.
- **Scroll desync:** Use a single source of truth (Lenis scroll progress) passed via context or props.
- **SSR errors:** R3F must be client-only; use `next/dynamic` with `ssr: false`.