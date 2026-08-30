# Indian Wedding Website Studio

A schema-driven Vite and React studio for multi-page Indian wedding websites.

The product intentionally uses one strong layout: **Saanjh Editorial**. Visual
variety comes from independent style layers rather than separate templates:

- palette;
- background surface;
- typography;
- image treatment; and
- ambient motion effects.

Every example in `exampleSchemas/` uses the same five-page information
architecture. This keeps complex wedding content predictable while each couple
still gets a distinct visual identity.

See [PARTIFUL_UX.md](./PARTIFUL_UX.md) for the product rationale and the mapping
between Partiful's customization model and this wedding-focused system.

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
