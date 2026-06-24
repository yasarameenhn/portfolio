# Design System / Style Guide — Yasar Ameen Portfolio

## 1. Theme Direction
**Dark & Futuristic** — a near-black canvas with neon cyan/violet accents, glassmorphic surfaces, and subtle depth. The aesthetic evokes "AI core / neural interface" without being cluttered.

## 2. Color Tokens

### Backgrounds
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-base` | `#05060A` | Page background (near-black) |
| `--bg-elevated` | `#0B0E16` | Cards, elevated surfaces |
| `--bg-glass` | `rgba(255,255,255,0.04)` | Glassmorphism fill |
| `--bg-glass-border` | `rgba(255,255,255,0.08)` | Glass border |

### Accents (Neon)
| Token | Value | Usage |
|-------|-------|-------|
| `--accent-cyan` | `#22D3EE` | Primary neon, links, highlights |
| `--accent-violet` | `#8B5CF6` | Secondary neon, gradients |
| `--accent-blue` | `#3B82F6` | Tertiary, gradients |
| `--accent-glow` | `0 0 24px rgba(34,211,238,0.35)` | Neon glow shadow |

### Text
| Token | Value | Usage |
|-------|-------|-------|
| `--text-primary` | `#F8FAFC` | Headings, primary text |
| `--text-secondary` | `#94A3B8` | Body, descriptions |
| `--text-muted` | `#64748B` | Captions, meta |

### Gradients
- `--gradient-hero`: `linear-gradient(135deg, #22D3EE 0%, #8B5CF6 100%)`
- `--gradient-text`: `linear-gradient(90deg, #22D3EE, #8B5CF6)` (for gradient text)
- `--gradient-card`: `linear-gradient(160deg, rgba(34,211,238,0.08), rgba(139,92,246,0.08))`

## 3. Typography
- **Font Family (Headings):** `Space Grotesk` (via `next/font/google`)
- **Font Family (Body):** `Inter` (via `next/font/google`)
- **Mono (code/tags):** `JetBrains Mono` (optional, for tech tags)

### Scale (Tailwind-based)
| Element | Size | Weight |
|---------|------|--------|
| Hero name | `text-6xl` / `text-8xl` (desktop) | 700 |
| Section heading | `text-4xl` / `text-5xl` | 600 |
| Subheading | `text-xl` / `text-2xl` | 500 |
| Body | `text-base` / `text-lg` | 400 |
| Caption/meta | `text-sm` | 400 |
| Tech tags | `text-xs` | 500 |

## 4. Spacing & Layout
- Max content width: `max-w-6xl` (1152px)
- Section vertical padding: `py-24` (desktop), `py-16` (mobile)
- Card padding: `p-6` / `p-8`
- Grid gaps: `gap-6` (skills), `gap-8` (projects)
- Border radius: `rounded-2xl` (cards), `rounded-full` (buttons/pills)

## 5. Glassmorphism
- Background: `rgba(255,255,255,0.04)`
- Border: `1px solid rgba(255,255,255,0.08)`
- Blur: `backdrop-blur-xl`
- Shadow: `0 8px 32px rgba(0,0,0,0.37)`

## 6. Components

### Buttons
- **Primary:** Gradient bg (`cyan→violet`), white text, `rounded-full`, hover glow.
- **Secondary:** Glass bg, neon border, neon text, hover brighten.
- **Icon:** Ghost button, neon icon, hover bg.

### Cards (TiltCard)
- Glassmorphic surface, neon border on hover, 3D tilt on mouse move.
- Glow: `box-shadow: 0 0 24px rgba(34,211,238,0.15)` on hover.

### Section Heading
- Small neon label (e.g., "01 / ABOUT") + large heading + optional subtitle.

### Nav
- Floating glass pill, sticky top, anchor links, neon active state.

## 7. Motion
- **Scroll reveal:** Framer Motion `whileInView`, fade + translateY(24px → 0), `duration: 0.6`, `ease: easeOut`.
- **3D tilt:** Track pointer, rotate card ±8deg, perspective 1000px.
- **Smooth scroll:** Lenis, lerp ~0.1.
- **Reduced motion:** Respect `prefers-reduced-motion` (disable tilt/smooth scroll).

## 8. Accessibility
- Min contrast ratio 4.5:1 for body text.
- Focus-visible rings: `2px solid var(--accent-cyan)`.
- All interactive elements reachable by keyboard.
- 3D scene is decorative; core content remains accessible without it.

## 9. Iconography
- Use `lucide-react` for UI icons (GitHub, LinkedIn, Mail, ArrowDown, ExternalLink).
- Consistent stroke width 1.5, size 20px default.

## 10. Tailwind Config Notes
- Extend colors with the tokens above.
- Add `fontFamily` for `sans` (Inter), `display` (Space Grotesk).
- Add `boxShadow` for `neon-glow`.
- Add `backdropBlur` utilities if needed.