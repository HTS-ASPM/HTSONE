# HTSOne - Cloudflare Pages Deployment Guide

## 🚀 Quick Deployment Steps

### Prerequisites
- Cloudflare account (free tier works)
- GitHub account (for Method 1)
- Node.js 18+ installed locally (for testing)

---

## Method 1: GitHub + Cloudflare Pages (Recommended)

### Step 1: Push to GitHub
```bash
cd /app/frontend
git init
git add .
git commit -m "HTSOne landing page - production ready"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages
1. Go to https://dash.cloudflare.com/
2. Navigate to **Workers & Pages** → **Create Application**
3. Select **Pages** → **Connect to Git**
4. Authorize GitHub and select your repository
5. Configure build settings:

```yaml
Framework preset: Create React App
Build command: yarn build
Build output directory: build
Node version: 18
Root directory: / (leave empty if frontend is root)
```

6. Click **Save and Deploy**

Your site will be live at: `https://YOUR_PROJECT.pages.dev`

---

## Method 2: Direct Upload (Quick Test)

### Step 1: Build Locally
```bash
cd /app/frontend
yarn install
yarn build
```

### Step 2: Upload to Cloudflare
1. Go to Cloudflare Dashboard → **Workers & Pages** → **Create Application**
2. Select **Pages** → **Upload assets**
3. Drag and drop the entire `build` folder
4. Click **Deploy site**

---

## 🔧 Build Configuration

### Environment Variables (Optional)
If you need to add environment variables later:

```bash
NODE_VERSION=18
CI=false
```

### Build Command
```bash
yarn build
```

### Output Directory
```bash
build
```

---

## 📁 Deployment Files Included

### `_redirects`
Ensures React Router works correctly by redirecting all routes to index.html

### `_headers`
Provides security headers and caching optimization:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Cache-Control for static assets
- XSS Protection

### `.nvmrc`
Specifies Node.js version 18 for consistent builds

---

## ✅ Pre-Deployment Checklist

- [x] `_redirects` file created in `/public`
- [x] `_headers` file created in `/public`
- [x] `.nvmrc` file created in root
- [x] `.env` updated (backend URL commented out)
- [ ] Test local build: `yarn build`
- [ ] Verify build folder created successfully
- [ ] Push to GitHub OR prepare build folder for upload

---

## 🧪 Test Production Build Locally

```bash
cd /app/frontend

# Build the app
yarn build

# Install serve if needed
npm install -g serve

# Test the production build
serve -s build

# Open http://localhost:3000 in browser
```

---

## 🌐 Custom Domain Setup

After deployment, add your custom domain:

1. In Cloudflare Pages project, click **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `htsone.com`)
4. Follow DNS configuration instructions
5. SSL certificate is automatically provisioned

---

## 📊 Expected Build Output

```
Creating an optimized production build...
Compiled successfully!

File sizes after gzip:

  XX.XX kB  build/static/js/main.[hash].js
  X.XX kB   build/static/css/main.[hash].css

The build folder is ready to be deployed.
```

---

## 🔍 Troubleshooting

### Build Fails
- Check Node version matches (18)
- Ensure all dependencies installed: `yarn install`
- Check for TypeScript/ESLint errors

### Routes Not Working
- Verify `_redirects` file is in `public` folder
- Check Cloudflare Pages serves from correct output directory

### Styling Issues
- Ensure all CSS files are imported
- Check for missing assets in build folder

---

## 🚀 Post-Deployment

### Test All Pages
- ✅ Home page: `/`
- ✅ Login: `/login`
- ✅ Privacy Policy: `/privacy`
- ✅ Terms of Use: `/terms`

### Performance Check
Run Lighthouse audit:
- Target: 90+ performance score
- Should achieve: < 1s load time
- First Contentful Paint: < 1.5s

### Monitor
- Check Cloudflare Analytics dashboard
- Monitor build logs for errors
- Set up notifications for failed builds

---

## 🎯 Cloudflare Pages Features

### Included in Free Tier
- ✅ Unlimited bandwidth
- ✅ Unlimited requests
- ✅ 500 builds per month
- ✅ 1 concurrent build
- ✅ Automatic SSL/TLS
- ✅ Global CDN (275+ locations)
- ✅ DDoS protection
- ✅ Web Analytics
- ✅ Deploy previews

### Build Configuration
- Automatic builds on git push
- Branch previews (each branch gets unique URL)
- Build history and rollback
- Environment variables per environment

---

## 📝 Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)
- [React Router with Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-application/)

---

## 🎉 You're Ready to Deploy!

Your HTSOne landing page is fully optimized and ready for production deployment on Cloudflare Pages.

**Next Steps:**
1. Choose deployment method (GitHub or Direct Upload)
2. Follow the steps above
3. Test your deployed site
4. Add custom domain (optional)
5. Share your site with the world! 🚀
