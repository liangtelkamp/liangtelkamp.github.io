# Deployment Guide for GitHub Pages

## Quick Deploy

1. **Build the static site:**
   ```bash
   npm run build
   ```

2. **Add .nojekyll file** (prevents GitHub Pages from using Jekyll):
   ```bash
   touch out/.nojekyll
   ```

3. **Commit everything:**
   ```bash
   git add .
   git commit -m "Convert to Next.js with organic green theme"
   git push origin main
   ```

4. **Configure GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/out`
   - Save

## Automated Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Next.js to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build with Next.js
        run: npm run build
      
      - name: Add .nojekyll
        run: touch out/.nojekyll
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Then:
1. Commit this workflow file
2. Push to GitHub
3. Go to Settings → Pages
4. Source: GitHub Actions
5. Your site will auto-deploy on every push!

## Troubleshooting

### Build fails
- Make sure all dependencies are installed: `npm install`
- Check for TypeScript/JavaScript errors: `npm run build`

### Images not loading
- Ensure images are in `public/` directory
- Use `/images/filename.jpg` paths (not `./images/`)

### 404 on routes
- Make sure `output: 'export'` is in `next.config.js`
- GitHub Pages may need a few minutes to update

## Your Site URL

After deployment, your site will be live at:
**https://liangtelkamp.github.io**
