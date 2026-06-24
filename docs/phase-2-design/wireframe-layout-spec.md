# Wireframe / Layout Spec — Yasar Ameen Portfolio

## 1. Global Layout
- Single-page vertical scroll.
- Floating glass navbar (sticky top, centered pill).
- Sections stacked full-width with `max-w-6xl` inner content.
- Lenis smooth scroll throughout.
- Background: near-black with subtle radial neon glows fixed behind content.

## 2. Breakpoints
| Name | Min width | Notes |
|------|-----------|-------|
| Mobile | < 640px | Single column, reduced 3D, smaller type |
| Tablet | 640–1024px | 2-col grids, medium 3D |
| Desktop | > 1024px | Full layout, large 3D hero |

## 3. Section Layouts

### 3.1 Navbar (sticky)
```
[ Yasar Ameen • ]      About   Skills   Projects   Contact      [ Resume ↓ ]
```
- Left: name/logo mark.
- Center/right: anchor links.
- Right: Resume download button.
- Mobile: hamburger → glass dropdown.

### 3.2 Hero
```
┌─────────────────────────────────────────────────┐
│                                                 │
│         YASAR AMEEN                             │
│         Generative AI Developer                 │
│         crafting autonomous agents &           │
│         intelligent systems.                    │
│                                                 │
│         [ View Projects ]  [ Download Resume ] │
│                                                 │
│                      ↓ scroll                   │
│                                                 │
│        ╔═══════════════════════════╗            │
│        ║   INTERACTIVE 3D SCENE    ║            │
│        ║   (drag to rotate)        ║            │
│        ╚═══════════════════════════╝            │
└─────────────────────────────────────────────────┘
```
- Desktop: text left, 3D canvas right (or full-bleed canvas behind text).
- Mobile: text top, 3D canvas below (smaller, touch-drag).
- 3D scene is scroll-reactive: as user scrolls down, camera moves/rotates.

### 3.3 About
```
┌─────────────────────────────────────────────────┐
│ 01 / ABOUT                                      │
│                                                 │
│ About Me                                        │
│ ────────────────                                │
│ Short bio paragraph for Generative AI Developer │
│ emphasizing LangChain, LangGraph, RAG, agents.  │
│                                                 │
│ ┌────────┐ ┌────────┐ ┌────────┐               │
│ │ Focus  │ │ Focus  │ │ Focus  │               │
│ │ Agents │ │ RAG    │ │ IoT    │               │
│ └────────┘ └────────┘ └────────┘               │
└─────────────────────────────────────────────────┘
```
- Reveal on scroll.
- 3 highlight chips/cards for focus areas.

### 3.4 Skills
```
┌─────────────────────────────────────────────────┐
│ 02 / SKILLS                                     │
│                                                 │
│ Tech Stack                                      │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐            │
│ │Card 1│ │Card 2│ │Card 3│ │Card 4│  (tilt)    │
│ └──────┘ └──────┘ └──────┘ └──────┘            │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐            │
│ │Card 5│ │Card 6│ │Card 7│ │Card 8│            │
│ └──────┘ └──────┘ └──────┘ └──────┘            │
└─────────────────────────────────────────────────┘
```
- Responsive grid: 2 cols (mobile), 3 (tablet), 4 (desktop).
- Each card: icon + name, tilt on hover.

### 3.5 Projects
```
┌─────────────────────────────────────────────────┐
│ 03 / PROJECTS                                   │
│                                                 │
│ Selected Works                                  │
│ ┌───────────────────────────────────────────┐  │
│ │ OmniMind — Full-Stack Autonomous AI Agent │  │
│ │ Description...                             │  │
│ │ [LangChain] [LangGraph] [FastAPI] ...      │  │
│ │ View on GitHub →                            │  │
│ └───────────────────────────────────────────┘  │
│ ┌───────────────────────────────────────────┐  │
│ │ AI-Powered Credit Card Expense Optimizer  │  │
│ │ ...                                        │  │
│ └───────────────────────────────────────────┘  │
│ ┌───────────────────────────────────────────┐  │
│ │ Wireless Charging Vehicle Using IoT        │  │
│ │ ...                                        │  │
│ └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```
- Stacked full-width cards (or 2-col on desktop).
- Each card: title, description, tech tags, GitHub link.
- Hover: neon glow + tilt.

### 3.6 Contact
```
┌─────────────────────────────────────────────────┐
│ 04 / CONTACT                                    │
│                                                 │
│ Let's build something intelligent.              │
│                                                 │
│ ┌───────────────────────────────────────────┐  │
│ │  ✉  yasarameenhnise2025@gmail.com         │  │
│ │  ⌥  github.com/yasarameenhn                │  │
│ │  in  linkedin.com/in/yasar-ameen-...       │  │
│ └───────────────────────────────────────────┘  │
│                                                 │
│ [ Download Resume ]                             │
└─────────────────────────────────────────────────┘
```
- Glass card with email + socials.
- Resume button.

### 3.7 Footer
```
┌─────────────────────────────────────────────────┐
│ Yasar Ameen · © 2026 · GitHub · LinkedIn        │
└─────────────────────────────────────────────────┘
```
- Minimal, centered.

## 4. Scroll Narrative (3D ↔ Content)
1. **Top (Hero):** 3D model centered, slowly auto-rotating; drag to rotate.
2. **Scroll to About:** camera nudges slightly, model rotates to a new angle.
3. **Scroll to Skills:** model scales down subtly, moves to side.
4. **Scroll to Projects:** model drifts further, dimmed.
5. **Scroll to Contact:** model exits or fades, content takes focus.
- Implemented via Framer Motion `useScroll` progress mapped to R3F state.

## 5. Notes
- All sections use semantic `<section id="...">` for anchor nav.
- 3D canvas is `position: fixed` behind content OR contained in hero; final decision in 3D Scene Spec.