# Image Placeholders

This directory should contain the following images for the website:

## Required Images

### Projects
- `/projects/ecommerce.jpg` - E-commerce platform screenshot (1200x630px recommended)
- `/projects/dashboard.jpg` - SaaS dashboard screenshot (1200x630px recommended)
- `/projects/social.jpg` - Social media app screenshot (1200x630px recommended)

### General
- `/avatar.jpg` - Your profile picture (800x800px recommended, square)
- `/favicon.ico` - Website favicon (32x32px)

## Temporary Placeholders

Until you add your actual images, you can:

1. Use placeholder services like [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com)
2. Use image generation tools
3. Create simple colored backgrounds with text overlays

## Image Optimization

All images will be automatically optimized by Next.js Image component:
- Automatic WebP/AVIF conversion
- Responsive image sizes
- Lazy loading
- Blur placeholder support

## Adding Images

1. Place your images in this `public` directory
2. Reference them in your markdown files or components using `/path/to/image.jpg`
3. Next.js will serve them from the root path

Example:
```markdown
![Project Screenshot](/projects/myproject.jpg)
```

Or in components:
```tsx
<Image src="/projects/myproject.jpg" alt="Project" fill />
```
