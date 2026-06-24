# Tech Stack & Architecture Decision Record (ADR) — Yasar Ameen Portfolio

## 1. Decision Summary
Build the portfolio as a **Next.js 14 (App Router) + TypeScript** application with **React Three Fiber (R3F) + Drei** for interactive 3D, **Framer Motion** for animations, **Lenis** for smooth scroll, and **TailwindCSS** for styling. Deploy to **Vercel**.

## 2. Technology Choices & Rationale

### 2.1 Framework: Next.js 14 (App Router)
- **Why:** Industry-standard React meta-framework with file-based routing, SSR/SSG, image optimization, and first-class Vercel deployment.
- **Why not plain Vite/CRA:** Next gives better SEO, static export options, and production-grade defaults out of the box.
- **App Router** chosen for modern conventions (Server Components, layouts, streaming).

### 2.2 Language: TypeScript
- **Why:** Senior-level type safety, better DX, fewer runtime errors, self-documenting component props and data models.

### 2.3 3D: React Three Fiber + Drei
- **Why:** Declarative Three.js in React — easier to compose, manage state, and integrate with scroll/UI. Drei provides helpers (`OrbitControls`, `Float`, `Environment`, `useGLTF`, `PerformanceMonitor`).
- **Why not raw Three.js:** More boilerplate, harder to integrate with React lifecycle and scroll state.

### 2.4 Animation: Framer Motion
- **Why:** Declarative scroll/viewport animations, layout animations, and micro-interactions with minimal code.
- **Why not GSAP:** GSAP is powerful but more imperative; Framer Motion integrates more naturally with React for this scope.

### 2.5 Smooth Scroll: Lenis (`@studio-freight/lenis` or `lenis`)
- **Why:** Lightweight, buttery smooth scroll that pairs well with scroll-linked 3D and Framer Motion `useScroll`.

### 2.6 Styling: TailwindCSS
- **Why:** Rapid, consistent utility-first styling; easy dark theme and responsive breakpoints; small production CSS via Purge.

### 2.7 Deployment: Vercel
- **Why:** Zero-config Next.js hosting, edge CDN, automatic builds on Git push, free tier sufficient for a portfolio.

## 3. Architecture Overview

```
portfolio/
├── app/
│   ├── layout.tsx            # Root layout, fonts, metadata, Lenis provider
│   ├── page.tsx              # Single-page composition of all sections
│   └── globals.css           # Tailwind + custom CSS variables/tokens
├── components/
│   ├── three/
│   │   ├── HeroScene.tsx     # R3F Canvas + lights + model + controls
│   │   ├── Model.tsx         # 3D model loader (placeholder, swappable)
│   │   └── ScrollCamera.tsx  # Scroll-reactive camera rig
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Navbar.tsx
│   │   ├── TiltCard.tsx       # Reusable 3D tilt card
│   │   ├── SectionHeading.tsx
│   │   └── Button.tsx
│   └── providers/
│       └── SmoothScroll.tsx   # Lenis provider
├── data/
│   ├── projects.ts           # Project content
│   ├── skills.ts             # Skill list
│   └── site.ts               # Name, links, email, socials
├── public/
│   ├── resume.pdf            # Placeholder resume (replaceable)
│   └── models/               # Placeholder .glb model (if used)
├── docs/                     # This documentation set
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

## 4. Data Flow
- **Static content** lives in `data/*.ts` as typed exports.
- **Sections** import content from `data/` and render UI.
- **3D scene** is mounted in `Hero` via `next/dynamic` (SSR disabled) to avoid blocking initial render.
- **Scroll state** is provided by Lenis + Framer Motion `useScroll`; the 3D scene reads scroll progress to drive camera/rotation.
- **No backend/CMS** — all content is hardcoded for v1.

## 5. Performance Strategy
- Lazy-load the 3D canvas with `next/dynamic` (`ssr: false`).
- Cap DPR via R3F `<Canvas dpr={[1, 2]}>`.
- Use `Suspense` + fallback for 3D assets.
- Provide a static fallback when WebGL is unavailable or on low-power devices.
- Optimize fonts via `next/font`.
- Minimize client JS: keep heavy libs (R3F, Drei) out of the server bundle.

## 6. Risks & Mitigations
| Risk | Mitigation |
|------|------------|
| 3D model heavy / slow load | Use small placeholder model; lazy-load; cap DPR |
| WebGL unsupported | Detect and show static fallback content |
| Mobile performance | Reduce polygon count/effects on small screens; cap DPR |
| Smooth scroll conflicts | Use Lenis with `requestAnimationFrame`; disable on reduced-motion |
| SEO for single-page | Use Next metadata API; semantic sections; descriptive headings |

## 7. Open Items
- Final placeholder 3D model selection (open-source `.glb` or Drei primitive).
- Resume PDF to be supplied by user.
- Optional: active-section nav highlight (nice-to-have).