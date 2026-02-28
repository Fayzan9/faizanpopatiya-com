# Quick Deployment Checklist

Use this checklist while deploying. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## ☐ Part 1: Git & GitHub (5 minutes)

```bash
# 1. Initialize Git (if not done)
cd /Users/faizanpersonal/Desktop/Personal/Project/faizanpopatiya-com
git init

# 2. Stage and commit
git add .
git commit -m "Initial commit: Portfolio website"

# 3. Create repo on GitHub
# → Go to github.com → New Repository
# → Name: faizanpopatiya-com
# → Don't initialize with README
# → Create Repository

# 4. Connect and push
git remote add origin https://github.com/YOUR_USERNAME/faizanpopatiya-com.git
git branch -M main
git push -u origin main
```

**Replace YOUR_USERNAME** with your GitHub username!

---

## ☐ Part 2: Deploy to Vercel (3 minutes)

### Via Vercel Dashboard:

1. ☐ Go to [vercel.com/new](https://vercel.com/new)
2. ☐ Sign in with GitHub
3. ☐ Click "Import" on your repository
4. ☐ **IMPORTANT**: Set Root Directory to `frontend`
5. ☐ Keep other settings as default
6. ☐ Click "Deploy"
7. ☐ Wait for build (~2 minutes)
8. ☐ Click "Visit" to see your site! 🎉

### Critical Setting:
```
Root Directory: frontend
```

---

## ☐ Part 3: Verify Deployment

- ☐ Site loads at Vercel URL
- ☐ All pages work (Home, Projects, Blog, About, Contact)
- ☐ Theme toggle works
- ☐ Navigation works
- ☐ Mobile responsive
- ☐ Images load

---

## ☐ Part 4: Test Auto-Deploy

```bash
# Make a small change (e.g., edit homepage text)
# Then push:

git add .
git commit -m "Test: Update homepage"
git push origin main

# Wait 1-2 minutes, refresh your site
# Changes should appear automatically!
```

---

## Future Updates

Every time you make changes:

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

Vercel automatically deploys! ✨

---

## Your URLs

- **GitHub Repo**: `https://github.com/YOUR_USERNAME/faizanpopatiya-com`
- **Live Site**: `https://faizanpopatiya-com.vercel.app` (or similar)
- **Vercel Dashboard**: `https://vercel.com/dashboard`

---

## Need Help?

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions and troubleshooting.

**Common Issue**: Build fails → Check that Root Directory is set to `frontend`

---

**Total Time**: ~10 minutes from start to deployed site! 🚀
