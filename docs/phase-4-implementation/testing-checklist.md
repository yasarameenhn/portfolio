# Testing Checklist — Yasar Ameen Portfolio

## 1. Functional
- [ ] Navbar links scroll to correct sections.
- [ ] Resume button downloads `resume.pdf`.
- [ ] External links (GitHub, LinkedIn, Email) open correctly.
- [ ] Mobile hamburger menu opens/closes and navigates.
- [ ] All CTAs work (View Projects, Download Resume).

## 2. 3D Scene
- [ ] 3D hero renders on desktop browsers.
- [ ] Drag-to-rotate works with mouse.
- [ ] Touch-drag works on mobile.
- [ ] Auto-rotate animates smoothly.
- [ ] Scroll-reactive camera/model transitions are smooth.
- [ ] WebGL fallback shows static placeholder if unsupported.
- [ ] No console errors related to WebGL/R3F.

## 3. Responsive
- [ ] Layout correct at 375px (mobile).
- [ ] Layout correct at 768px (tablet).
- [ ] Layout correct at 1280px+ (desktop).
- [ ] No horizontal scroll on any breakpoint.
- [ ] Tap targets ≥ 44px on mobile.

## 4. Performance
- [ ] Lighthouse Performance ≥ 90 (desktop).
- [ ] Lighthouse Performance ≥ 80 (mobile).
- [ ] No layout shift (CLS < 0.1).
- [ ] 3D scene doesn't block initial content render.
- [ ] Images/fonts optimized (no render-blocking).

## 5. Accessibility
- [ ] Keyboard navigation works (Tab through all interactive elements).
- [ ] Focus-visible rings visible.
- [ ] Color contrast ≥ 4.5:1 for body text.
- [ ] `prefers-reduced-motion` disables tilt, auto-rotate, smooth scroll.
- [ ] Semantic HTML (section, nav, footer, headings).

## 6. Cross-Browser
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## 7. SEO / Meta
- [ ] Page title and meta description set.
- [ ] Open Graph tags present (optional).
- [ ] Favicon loads.

## 8. Build
- [ ] `npm run build` passes with no errors.
- [ ] `npm run lint` passes.
- [ ] No TypeScript errors.
- [ ] Production build runs locally.