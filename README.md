# Jack Stromberg — portfolio site

Vite + React + TypeScript portfolio for quantitative research and financial
software projects.

## Local development

```bash
npm install
npm run dev
```

Dev server: [http://localhost:4317](http://localhost:4317)

```bash
npm run build    # typecheck, Vite build, then publish dist to repo root
npm run preview  # preview the production build
```

## GitHub Pages

**Classic user-pages (current):** production artifacts (`index.html`, `assets/`,
`favicon.svg`) are committed at the repository root so
`https://john-stromberg.github.io` can keep serving from the default branch
without changing Pages settings.

**Actions (optional / future):** [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)
builds with Node 22 and deploys `dist/`. After merge, set
**Settings → Pages → Source** to **GitHub Actions** if you want the workflow to
own deploys instead of the committed root artifacts.

Source entry HTML lives in `vite.index.html`. `npm run build` restores it to
`index.html` for Vite, then overwrites root with the production build for
classic Pages.
