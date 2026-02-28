# Deployment Guide - Portfolio Website to Vercel

This guide will walk you through deploying your Next.js portfolio website to Vercel via GitHub.

## Prerequisites

- [Git](https://git-scm.com/) installed on your computer
- [GitHub account](https://github.com/signup)
- [Vercel account](https://vercel.com/signup) (you can sign up with GitHub)
- Your portfolio website ready (already built successfully ✅)

## Part 1: Push to GitHub

### Step 1: Initialize Git Repository

Navigate to your project directory and initialize git:

```bash
cd /Users/faizanpersonal/Desktop/Personal/Project/faizanpopatiya-com
git init
```

### Step 2: Create .gitignore (if not exists)

The Next.js project already has a `.gitignore` file. Verify it includes these entries:

```bash
cat frontend/.gitignore
```

It should include:
```
node_modules/
.next/
.env.local
.DS_Store
*.log
```

### Step 3: Stage All Files

```bash
git add .
```

### Step 4: Make Your First Commit

```bash
git commit -m "Initial commit: Portfolio website with Next.js"
```

### Step 5: Create a New Repository on GitHub

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `faizanpopatiya-com` (or any name you prefer)
   - **Description**: "Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS"
   - **Visibility**: Public (recommended for portfolio) or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have them)
5. Click **"Create repository"**

### Step 6: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/faizanpopatiya-com.git

# Verify the remote was added
git remote -v

# Push to GitHub (main branch)
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username.

### Step 7: Verify on GitHub

1. Go to your repository URL: `https://github.com/YOUR_USERNAME/faizanpopatiya-com`
2. You should see all your files uploaded
3. Your repository is now ready for deployment!

---

## Part 2: Deploy to Vercel

### Step 1: Sign Up / Log In to Vercel

1. Go to [Vercel](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Repository

#### Option A: Using Vercel Dashboard

1. After logging in, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find `faizanpopatiya-com` repository
4. Click **"Import"**

#### Option B: Direct Link

Visit: `https://vercel.com/new` and select your repository from the list.

### Step 3: Configure Your Project

Vercel will auto-detect Next.js. Configure these settings:

**Framework Preset**: Next.js (auto-detected)
**Root Directory**: `frontend` ⚠️ **IMPORTANT**
**Build Command**: `npm run build` (auto-detected)
**Output Directory**: `.next` (auto-detected)
**Install Command**: `npm install` (auto-detected)

**Important**: Since your Next.js app is in the `frontend/` subdirectory, you MUST set:
- **Root Directory**: `frontend`

### Step 4: Environment Variables (Optional)

If you need environment variables:

1. Click **"Environment Variables"** section
2. Add variables if needed (currently your app doesn't require any for basic deployment)

Example (if you add features later):
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Step 5: Deploy!

1. Click **"Deploy"**
2. Vercel will:
   - Clone your repository
   - Install dependencies
   - Build your Next.js app
   - Deploy to their CDN
3. Wait 1-3 minutes for the build to complete

### Step 6: View Your Deployed Website

1. Once deployment is complete, you'll see **"Congratulations!"** 🎉
2. Click **"Visit"** to see your live website
3. Your site will be at: `https://your-project-name.vercel.app`

---

## Part 3: Configure Custom Domain (Optional)

### Option A: Using Vercel's Free Domain

Your site is automatically available at:
- `https://your-project-name.vercel.app`
- Alternative: `https://your-project-name-username.vercel.app`

### Option B: Add Your Own Domain

If you own a domain (e.g., `faizanpopatiya.com`):

1. Go to your project in Vercel Dashboard
2. Click on **"Settings"** → **"Domains"**
3. Enter your domain name
4. Click **"Add"**
5. Vercel will provide DNS records
6. Add these records in your domain registrar (GoDaddy, Namecheap, etc.):

**For Root Domain** (`faizanpopatiya.com`):
```
Type: A
Name: @
Value: 76.76.21.21
```

**For WWW Subdomain** (`www.faizanpopatiya.com`):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

7. Wait 24-48 hours for DNS propagation
8. Your site will be live on your custom domain!

---

## Part 4: Automatic Deployments

### How It Works

Once connected, Vercel automatically:
- ✅ **Main branch**: Deploys to production (`your-site.vercel.app`)
- ✅ **Pull requests**: Creates preview deployments
- ✅ **Other branches**: Creates preview deployments

### Making Updates

To update your live website:

```bash
# 1. Make your changes
# Edit files in your project

# 2. Stage changes
git add .

# 3. Commit changes
git commit -m "Update: description of your changes"

# 4. Push to GitHub
git push origin main
```

**That's it!** Vercel will automatically:
1. Detect the push
2. Start a new build
3. Deploy the changes
4. Your site updates in ~1-2 minutes

### View Deployment Status

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project
3. See all deployments and their status
4. Click any deployment to see build logs

---

## Part 5: Troubleshooting

### Build Fails on Vercel

**Check Build Logs:**
1. Go to Vercel Dashboard → Your Project
2. Click on the failed deployment
3. Click **"Building"** to see logs
4. Look for error messages

**Common Issues:**

#### Issue 1: Wrong Root Directory
**Error**: "No package.json found"
**Solution**: Set Root Directory to `frontend` in project settings

#### Issue 2: Build Command Fails
**Error**: Build errors in logs
**Solution**: 
```bash
# Test locally first
cd frontend
npm run build
```
Fix any errors locally, then push again.

#### Issue 3: Node Version Mismatch
**Solution**: Add `.node-version` file in frontend/:
```bash
echo "18" > frontend/.node-version
git add frontend/.node-version
git commit -m "Add node version"
git push origin main
```

### Environment Variables Missing

If you add features that need API keys:

1. Create `.env.local` locally (don't commit!)
2. Add variables to Vercel:
   - Dashboard → Project → Settings → Environment Variables
   - Add each variable
   - Redeploy

### Clear Build Cache

If you see strange build issues:

1. Go to Project Settings
2. Click **"General"**
3. Scroll to **"Build & Development Settings"**
4. Toggle **"Clear Build Cache"**
5. Redeploy

---

## Part 6: Performance & Optimization

### Analytics (Optional)

Enable Vercel Analytics:
1. Dashboard → Your Project → **"Analytics"** tab
2. Enable Analytics
3. See visitor stats, performance metrics

### Speed Insights (Optional)

Enable Web Vitals monitoring:
1. Dashboard → Your Project → **"Speed Insights"** tab
2. Enable Speed Insights
3. Monitor Core Web Vitals scores

---

## Part 7: Project Settings

### Useful Vercel Project Settings

**General Settings** (`Settings` → `General`):
- Project Name
- Framework (Next.js)
- Root Directory (`frontend`)
- Node.js Version

**Git Settings** (`Settings` → `Git`):
- Production Branch (usually `main`)
- Ignored Build Step (if needed)

**Environment Variables** (`Settings` → `Environment Variables`):
- Add secrets and API keys
- Separate for Development, Preview, Production

**Domains** (`Settings` → `Domains`):
- Manage custom domains
- SSL certificates (auto-managed by Vercel)

---

## Quick Reference Commands

### Initial Setup (One-Time)
```bash
# Initialize git
git init

# First commit
git add .
git commit -m "Initial commit: Portfolio website"

# Connect to GitHub
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### Making Updates (Ongoing)
```bash
# Make changes to your code
# Then:

git add .
git commit -m "Descriptive message about changes"
git push origin main

# Vercel auto-deploys! 🚀
```

### Check Status
```bash
# Check what files changed
git status

# See commit history
git log --oneline

# See remote repository
git remote -v
```

---

## Success Checklist

Before you finish, verify:

- ✅ Repository pushed to GitHub
- ✅ Repository connected to Vercel
- ✅ Root directory set to `frontend`
- ✅ Initial deployment successful
- ✅ Website accessible at Vercel URL
- ✅ Auto-deployment working (test with a small change)
- ✅ No build errors in Vercel dashboard
- ✅ All pages loading correctly
- ✅ Theme switcher working
- ✅ Mobile responsiveness verified

---

## Next Steps After Deployment

1. **Share Your Portfolio**:
   - Add the URL to your resume
   - Share on LinkedIn
   - Add to GitHub profile README

2. **Monitor Performance**:
   - Check Vercel Analytics
   - Monitor Speed Insights
   - Test on different devices

3. **Keep Updating**:
   - Add new projects as you build them
   - Write blog posts regularly
   - Update your about section

4. **SEO Optimization** (Future):
   - Add `sitemap.xml`
   - Add `robots.txt`
   - Verify Google Search Console
   - Submit to search engines

---

## Support & Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Documentation**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/support
- **GitHub Docs**: https://docs.github.com

---

## Summary

**Deployment URL Pattern**: `https://PROJECT_NAME-USERNAME.vercel.app`

**Deployment Flow**:
1. Code changes locally
2. Git commit & push to GitHub
3. Vercel auto-detects push
4. Vercel builds & deploys
5. Live in ~1-2 minutes

**Your Portfolio is Now Live! 🎉**

Every push to `main` branch = automatic deployment to production!

---

## Troubleshooting Contact

If you encounter issues:

1. Check Vercel deployment logs
2. Verify build works locally: `npm run build`
3. Check Vercel status: https://vercel-status.com
4. Visit Vercel Discord: https://vercel.com/discord

Good luck with your deployment! 🚀
