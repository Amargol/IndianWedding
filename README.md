# Indian Wedding Template Studio

A Vite and React collection of multi-page Indian wedding website templates.

## Local development

```bash
npm ci
npm run dev
```

## Publish to GitHub Pages

This repository includes a GitHub Actions workflow that builds and deploys the site whenever `main` is updated.

1. Push the repository to GitHub.
2. Open **Settings → Pages** in the GitHub repository.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Push to `main`, or run **Deploy to GitHub Pages** manually from the **Actions** tab.

For this repository, the published site will be available at:

<https://amargol.github.io/IndianWedding/>

The workflow automatically uses the base path reported by GitHub Pages, so project sites, forks, and renamed repositories deploy correctly.
