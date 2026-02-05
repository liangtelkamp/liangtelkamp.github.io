# Deployment Guide for GitHub Pages

## 🚀 Deployment Guide
You are already set up for **Automated Deployment with GitHub Actions**.

### ⚠️ IMPORTANT STEP: Configure GitHub Settings
1. Go to your repository on GitHub: **[liangtelkamp/liangtelkamp.github.io](https://github.com/liangtelkamp/liangtelkamp.github.io)**
2. Click on the **Settings** tab (gear icon).
3. Click on **Pages** in the left sidebar.
4. Under **Build and deployment** section:
   - **Source**: Change from "Deploy from a branch" to **"GitHub Actions"**.
5. That's it! GitHub will now use the workflow defined in `.github/workflows/deploy.yml` to build and deploy your site.

---

### Manual Trigger (if needed)

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

### Site still shows README instead of Next.js app
1. **Check GitHub Actions ran successfully:**
   - Go to the **Actions** tab in your repository
   - Look for "Deploy Next.js Portfolio to GitHub Pages"
   - Make sure it shows a green checkmark ✓
   - If it failed (red X), click on it to see the error

2. **Verify GitHub Pages source is set to "GitHub Actions":**
   - Go to Settings → Pages
   - Source should be "GitHub Actions" (not "Deploy from a branch")

3. **Clear browser cache:**
   - Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
   - Or try in an incognito/private window

4. **Wait a few minutes:**
   - GitHub Pages can take 2-5 minutes to update after deployment

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
