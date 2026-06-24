# Asset & Links Manifest — Yasar Ameen Portfolio

## 1. Fonts
| Font | Source | Usage | Weights |
|------|--------|-------|---------|
| Inter | `next/font/google` | Body text | 400, 500, 600 |
| Space Grotesk | `next/font/google` | Headings | 500, 600, 700 |
| JetBrains Mono | `next/font/google` | Tech tags (optional) | 400, 500 |

## 2. Icons
- **Library:** `lucide-react`
- **Icons used:** `Github`, `Linkedin`, `Mail`, `ArrowDown`, `ExternalLink`, `Download`, `Menu`, `X`, `Sparkles`, `Cpu`, `Database`, `Bot`, `CircuitBoard`, `Code2`, `Gauge`, `Layers`, `Server`, `Zap`

## 3. 3D Assets
| Asset | Location | Purpose | Status |
|-------|----------|---------|--------|
| Placeholder AI core (primitives) | `components/three/Model.tsx` | Hero 3D scene | Built-in (no external file) |
| Optional `.glb` model | `public/models/` | Swap-in real model later | Not included in v1 |

## 4. Resume
| Asset | Location | Purpose | Status |
|-------|----------|---------|--------|
| `resume.pdf` | `public/resume.pdf` | Downloadable resume | Placeholder — user to replace |

## 5. Links
| Label | URL | Type |
|-------|-----|------|
| GitHub | https://github.com/yasarameenhn | External |
| LinkedIn | https://www.linkedin.com/in/yasar-ameen-965385201 | External |
| Email | mailto:yasarameenhnise2025@gmail.com | Mailto |
| Resume | /resume.pdf | Internal asset |

## 6. Images / OG
| Asset | Location | Purpose | Status |
|-------|----------|---------|--------|
| OG image | `public/og-image.png` | Social sharing preview | Placeholder (optional) |
| Favicon | `app/favicon.ico` | Browser tab icon | Default Next.js (optional to replace) |

## 7. Dependencies (npm)
| Package | Purpose |
|---------|---------|
| `next` | Framework |
| `react`, `react-dom` | UI |
| `three` | 3D engine |
| `@react-three/fiber` | React renderer for Three.js |
| `@react-three/drei` | R3F helpers |
| `framer-motion` | Animations |
| `lenis` | Smooth scroll |
| `lucide-react` | Icons |
| `tailwindcss`, `postcss`, `autoprefixer` | Styling |
| `typescript`, `@types/react`, `@types/node`, `@types/three` | Types |
| `eslint`, `eslint-config-next` | Linting |

## 8. Environment
- No environment variables required for v1.
- All content is static/hardcoded.