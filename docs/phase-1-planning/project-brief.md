# Project Brief — Yasar Ameen Portfolio

## 1. Overview
A senior-level, interactive 3D portfolio website for **Yasar Ameen**, a Generative AI Developer. The site showcases technical expertise, flagship projects, and contact information through a dark, futuristic, scroll-driven experience featuring an interactive 3D scene.

## 2. Goals
- Present Yasar as a senior Generative AI Developer to recruiters.
- Provide an immersive, memorable first impression via interactive 3D.
- Clearly communicate skills, flagship projects, and contact channels.
- Be fast, responsive, accessible, and deployable to Vercel.

## 3. Target Audience
- **Primary:** Technical recruiters and hiring managers.
- **Secondary:** Engineering managers, founders, and collaborators.

## 4. Success Criteria
- Recruiters can understand Yasar's role, stack, and projects within 30 seconds.
- 3D hero loads quickly (under 3s on mid-tier hardware) and is interactive (rotate + scroll-reactive).
- Site scores 90+ on Lighthouse (Performance, Accessibility, Best Practices, SEO).
- Fully responsive across mobile, tablet, and desktop.
- Deployable to Vercel with a single `vercel deploy` or Git push.

## 5. Key Differentiators
- Interactive 3D hero scene (drag to rotate, scroll to influence camera/scene).
- Dark, futuristic aesthetic with neon accents and glassmorphism.
- Smooth scroll narrative tying 3D motion to content sections.
- Senior-level polish: TypeScript, component architecture, performance budgets.

## 6. Scope
### In Scope
- Single-page scrolling site with sections: Hero, About, Skills, Projects, Contact, Resume.
- Interactive 3D hero scene using open-source/placeholder model.
- Responsive design, smooth scroll, scroll/section animations.
- Deployable Next.js project with README.

### Out of Scope
- Multi-page project detail routes (single-page only for v1).
- Backend services or CMS (content is static/hardcoded).
- Custom 3D model creation (placeholder/open-source model used; swappable later).
- Blog, testimonials, services sections (not requested).

## 7. Constraints
- Must run on Windows development environment (Node.js available).
- 3D must degrade gracefully on low-end devices (fallback to static/2D).
- Content is static; no authentication or database.

## 8. Deliverables
- Documentation set (this folder).
- Next.js project (`portfolio/` root) with all sections implemented.
- README with setup, run, build, and deploy instructions.
- Placeholder resume file path for easy replacement.