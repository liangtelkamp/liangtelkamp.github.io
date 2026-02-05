# Liang Telkamp - Portfolio Website

A modern, eco-conscious portfolio website built with Next.js, featuring an organic green color palette that reflects a commitment to sustainable technology.

## 🌱 Design Philosophy

- **Organic Green Accents**: Rich green borders, glows, and gradients throughout
- **Sustainable Tech**: Design reflects commitment to eco-conscious AI development
- **Modern & Professional**: Clean, contemporary aesthetic suitable for 2025
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Performance First**: Built with Next.js for optimal speed and SEO

### Green Accent Features
- ✅ Organic green gradient backgrounds
- ✅ Green border accents on all cards
- ✅ Pulsing green glow effects on CTAs
- ✅ Green selection highlights
- ✅ Gradient green scrollbar
- ✅ Green shadows on hover
- ✅ Nature-inspired color transitions

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Inter & Outfit (Google Fonts)
- **Deployment**: GitHub Pages (static export)

## 📁 Project Structure

```
liangtelkamp.github.io/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.js
│   │   ├── contact/
│   │   │   └── page.js
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   └── components/
│       ├── Header.js
│       └── Footer.js
├── public/
│   └── images/
├── tailwind.config.js
├── next.config.js
└── package.json
```

## 🛠️ Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## 🖼️ Adding Your Profile Picture

1. Add your photo to `public/images/profile.jpg`
2. Open `src/app/page.js`
3. Uncomment the Image component (around line 90):
   ```jsx
   <Image 
     src="/images/profile.jpg" 
     alt="Liang Telkamp" 
     fill
     className="object-cover"
     priority
   />
   ```

## 🎨 Customization

### Colors

The color palette is defined in `tailwind.config.js`. Main colors:
- **Primary**: Green shades (#22c55e - #14532d)
- **Accent**: Emerald shades (#10b981 - #064e3b)
- **Neutral**: Stone shades for backgrounds and text

### Content

- **Homepage**: `src/app/page.js`
- **About**: `src/app/about/page.js`
- **Contact**: `src/app/contact/page.js`
- **Header**: `src/components/Header.js`
- **Footer**: `src/components/Footer.js`

## 🚀 Deployment to GitHub Pages

### Automated Deployment (Recommended) ✅

The repository is configured with **GitHub Actions** for automatic deployment!

**Setup Steps:**

1. **Push your changes to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy Next.js portfolio with green accents"
   git push origin main
   ```

2. **Configure GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**
   - Save

3. **That's it!** 🎉
   - The workflow will automatically build and deploy your site
   - Every push to `main` will trigger a new deployment
   - Your site will be live at: `https://liangtelkamp.github.io`

**Manual Deployment (Alternative)**

If you prefer manual deployment:

```bash
# Build the site
npm run build

# Add .nojekyll file
touch out/.nojekyll

# Deploy the out/ folder to GitHub Pages
# (Configure GitHub Pages to use the /out folder)
```

## 🌟 Features

- ✅ Modern, organic design with green accents
- ✅ Smooth scroll animations
- ✅ Responsive navigation
- ✅ Professional timeline
- ✅ Contact form
- ✅ SEO optimized
- ✅ Fast loading times
- ✅ Accessible design

## 📧 Contact

**Liang Telkamp**  
AI Consultant at NextHuman  
Email: [telkampliang@gmail.com](mailto:telkampliang@gmail.com)

---

© 2025 Liang Telkamp. All rights reserved.
