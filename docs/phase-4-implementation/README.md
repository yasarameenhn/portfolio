# Yasar Ameen — 3D Portfolio

A senior-level, 3D-enhanced portfolio for a Generative AI Developer, built with Next.js 14 (App Router), React Three Fiber, Framer Motion, Tailwind CSS, and Lenis smooth scroll.

## Features
- Interactive scroll-reactive 3D hero scene (R3F + Drei)
- Glassmorphic dark-futuristic UI with neon accents
- Responsive single-page layout (mobile → desktop)
- Smooth scrolling, scroll-reveal animations, 3D tilt cards
- Accessibility: keyboard nav, focus rings, reduced-motion support
- SEO metadata + OG tags

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router, TypeScript) |
| Styling | Tailwind CSS |
| 3D | Three.js, @react-three/fiber, @react-three/drei |
| Animation | Framer Motion |
| Smooth scroll | Lenis |
| Icons | lucide-react |
| Fonts | Inter, Space Grotesk (next/font) |

## Getting Started
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build
```bash
npm run build
npm start
```

## Project Structure
```
app/              # Next.js App Router pages, layout, globals
components/
  three/          # R3F scene, model, scroll camera
  sections/       # Navbar, Hero, About, Skills, Projects, Contact, Footer
  ui/             # TiltCard, SectionHeading, Button, ScrollReveal
  providers/      # SmoothScroll (Lenis)
lib/              # Data (skills, projects, links)
public/           # resume.pdf, og-image
docs/             # Planning, design, content, implementation specs
```

## Customization
- **Content:** Edit `lib/data.ts` and `docs/phase-3-content/content-copy.md`.
- **Colors/Theme:** Edit `tailwind.config.ts` and `app/globals.css`.
- **3D Model:** Replace `components/three/Model.tsx` with a `useGLTF` model.
- **Resume:** Replace `public/resume.pdf`.

## Deployment
See `docs/phase-4-implementation/deployment-guide.md`.

## License
MIT