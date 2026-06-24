# Requirements Specification (PRD-lite) — Yasar Ameen Portfolio

## 1. Functional Requirements

### FR-1: Hero Section
- **FR-1.1** Display name "Yasar Ameen" and role tagline prominently.
- **FR-1.2** Render an interactive 3D scene (canvas) as the visual centerpiece.
- **FR-1.3** Allow user to **drag to rotate** the 3D model.
- **FR-1.4** Make the 3D scene **scroll-reactive** (camera/rotation responds to page scroll).
- **FR-1.5** Provide CTA buttons: "View Projects" (scrolls to Projects), "Download Resume".
- **FR-1.6** Show a scroll-down indicator.

### FR-2: About Section
- **FR-2.1** Display a short professional bio for a Generative AI Developer.
- **FR-2.2** Animate content reveal on scroll into view.
- **FR-2.3** Include a small set of highlight stats or focus areas (e.g., Autonomous Agents, RAG, IoT).

### FR-3: Skills Section
- **FR-3.1** Display a grid of skill/tech-stack cards.
- **FR-3.2** Cards must include at minimum: LangChain, LangGraph, FastAPI, Pinecone, HuggingFace, Gemini API, React, Python, Streamlit, Pandas, Pydantic, ESP32/IoT.
- **FR-3.3** Cards have a 3D tilt-on-hover effect.
- **FR-3.4** Animate cards in on scroll.

### FR-4: Projects Section
- **FR-4.1** Display 3 project cards with title, description, tech tags, and link.
- **FR-4.2** Projects:
  1. OmniMind — Full-Stack Autonomous AI Agent System
  2. AI-Powered Credit Card Expense Optimizer
  3. Wireless Charging Vehicle Using IoT
- **FR-4.3** Each project links to `https://github.com/yasarameenhn` (no specific repo URLs available).
- **FR-4.4** Cards have hover glow and 3D tilt.
- **FR-4.5** Animate cards in on scroll.

### FR-5: Contact Section
- **FR-5.1** Display email: `yasarameenhnise2025@gmail.com` (clickable mailto).
- **FR-5.2** Display GitHub link: `https://github.com/yasarameenhn`.
- **FR-5.3** Display LinkedIn link: `https://www.linkedin.com/in/yasar-ameen-965385201`.
- **FR-5.4** Styled as a futuristic glassmorphic card.

### FR-6: Resume
- **FR-6.1** Provide a "Download Resume" button in Hero and/or Contact.
- **FR-6.2** Link to a placeholder resume file path (e.g., `/public/resume.pdf`) that the user can replace.

### FR-7: Navigation
- **FR-7.1** Sticky/floating nav with anchor links to sections (About, Skills, Projects, Contact).
- **FR-7.2** Smooth scroll to anchors.
- **FR-7.3** Active section highlight (optional, nice-to-have).

### FR-8: Footer
- **FR-8.1** Show name, copyright, and social links.

## 2. Non-Functional Requirements

### NFR-1: Performance
- **NFR-1.1** Lighthouse Performance score ≥ 90 on desktop.
- **NFR-1.2** 3D canvas must lazy-load and not block initial text content.
- **NFR-1.3** Cap device pixel ratio (DPR) to 2 for the 3D canvas.
- **NFR-1.4** Use `next/dynamic` to SSR-skip the 3D canvas.

### NFR-2: Responsiveness
- **NFR-2.1** Breakpoints: mobile (<640px), tablet (640–1024px), desktop (>1024px).
- **NFR-2.2** 3D scene scales and remains usable on mobile (touch-drag rotate).
- **NFR-2.3** Typography and spacing scale per breakpoint.

### NFR-3: Accessibility
- **NFR-3.1** Semantic HTML (header, main, section, footer).
- **NFR-3.2** All interactive elements keyboard-navigable.
- **NFR-3.3** Sufficient color contrast (WCAG AA).
- **NFR-3.4** Provide a fallback/placeholder when 3D fails or is disabled.

### NFR-4: Visual Design
- **NFR-4.1** Dark, futuristic theme; near-black background.
- **NFR-4.2** Neon accent palette (cyan/violet).
- **NFR-4.3** Glassmorphism for cards.
- **NFR-4.4** Smooth scroll via Lenis.

### NFR-5: Deployability
- **NFR-5.1** Build with `npm run build` produces a production-ready Next.js app.
- **NFR-5.2** Deployable to Vercel via Git push or `vercel` CLI.
- **NFR-5.3** No hard-coded environment secrets required for v1.

### NFR-6: Browser Support
- **NFR-6.1** Latest Chrome, Edge, Firefox, Safari.
- **NFR-6.2** Graceful degradation for browsers without WebGL (show fallback content).

## 3. Assumptions
- Content is static and hardcoded in the codebase (no CMS).
- Open-source/placeholder 3D model is acceptable for v1.
- Resume PDF will be supplied by the user later; a placeholder path is wired now.

## 4. Dependencies
- Node.js 18+ and npm available on the development machine.
- Internet access for package installation and Vercel deployment.