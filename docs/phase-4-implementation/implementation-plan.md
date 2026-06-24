# Implementation Plan — Yasar Ameen Portfolio

## 1. Project Structure
```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, Lenis provider
│   ├── page.tsx            # Main page composing all sections
│   └── globals.css         # Tailwind directives + CSS tokens
├── components/
│   ├── three/
│   │   ├── HeroScene.tsx   # R3F Canvas, lights, controls
│   │   ├── Model.tsx       # 3D primitive composition
│   │   └── ScrollCamera.tsx
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── TiltCard.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── Button.tsx
│   │   └── ScrollReveal.tsx
│   └── providers/
│       └── SmoothScroll.tsx
├── lib/
│   └── data.ts             # Skills, projects, links data
├── public/
│   └── resume.pdf
├── tailwind.config.ts
├── next.config.mjs
├── package.json
└── tsconfig.json
```

## 2. Build Order (Milestones)
1. **Scaffold:** `create-next-app` (TS, Tailwind, App Router) → install deps.
2. **Config:** Tailwind tokens, fonts, globals.css, metadata.
3. **Data layer:** `lib/data.ts` with skills/projects/links.
4. **UI primitives:** Button, SectionHeading, TiltCard, ScrollReveal.
5. **Smooth scroll:** Lenis provider.
6. **Sections:** Navbar → Hero → About → Skills → Projects → Contact → Footer.
7. **3D scene:** HeroScene + Model + ScrollCamera (lazy-loaded).
8. **Polish:** Hover states, glow, responsive tweaks, reduced-motion.
9. **Test:** Lighthouse, cross-browser, mobile.
10. **Deploy:** Vercel.

## 3. Key Technical Notes
- R3F components loaded via `next/dynamic` with `ssr: false`.
- Framer Motion `whileInView` for scroll reveals.
- Lenis initialized in a client provider; R3F scroll progress reads from it.
- `prefers-reduced-motion` disables tilt, auto-rotate, smooth scroll.