# Deployment Guide — Yasar Ameen Portfolio

## 1. Prerequisites
- Node.js 18.17+ installed
- Git installed
- A Vercel account (https://vercel.com)
- GitHub repository for the project

## 2. Local Verification
Before deploying, verify the production build:
```bash
npm run build
npm start
```
Open http://localhost:3000 and confirm everything works.

## 3. Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/yasarameenhn/portfolio.git
git push -u origin main
```

## 4. Deploy to Vercel
1. Go to https://vercel.com/new
2. Import your GitHub repository.
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `npm run build` (default)
5. Output directory: `.next` (default)
6. Install command: `npm install` (default)
7. Click **Deploy**.

## 5. Post-Deployment
- Verify the deployed URL works on desktop & mobile.
- Run Lighthouse audit on the production URL.
- Update GitHub repo description and add the live URL.
- (Optional) Add a custom domain in Vercel → Settings → Domains.

## 6. Environment Variables
None required for v1. All content is static.

## 7. Updates
To update the live site:
```bash
git add .
git commit -m "Update: <description>"
git push
```
Vercel auto-deploys on push to `main`.

## 8. Troubleshooting
| Issue | Fix |
|-------|-----|
| 3D scene blank on deploy | Check WebGL support; ensure `ssr: false` on dynamic import |
| Fonts not loading | Verify `next/font/google` usage; no external CSS import |
| Build fails | Run `npm run lint` locally; fix TS errors |
| 404 on resume | Ensure `public/resume.pdf` exists and is committed |