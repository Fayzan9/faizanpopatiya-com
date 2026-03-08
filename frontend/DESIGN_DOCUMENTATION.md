# Design Documentation

This document outlines the complete design system and styling architecture for the website.

---

## Table of Contents

1. [Overview](#overview)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Shadows & Effects](#shadows--effects)
6. [Animation & Motion](#animation--motion)
7. [Component Styles](#component-styles)
8. [CSS Variables Reference](#css-variables-reference)
9. [Theme Implementation](#theme-implementation)
10. [Responsive Design](#responsive-design)

---

## Overview

The website uses a modern, professional design system built with:

- **Framework**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Theme Support**: Light/Dark mode with multiple color palettes
- **Architecture**: CSS variables + Tailwind utilities for maximum flexibility

### Design Philosophy

- **Professional & Clean**: Minimal, focused design that highlights content
- **Glass Morphism**: Subtle glass effects for modern aesthetic
- **Smooth Animations**: Performant transitions with easing functions
- **Accessibility**: High contrast ratios and semantic HTML
- **Responsive**: Mobile-first approach with breakpoint optimization

---

## Color System

### Active Theme

The currently active color palette is set in [lib/config.ts](lib/config.ts):

```typescript
theme: {
  colorPalette: 'indigo' // Change this to switch themes
}
```

### Available Color Palettes

The website includes **13 professionally crafted color palettes**, each with complete light and dark mode support:

#### 1. **Professional Indigo** (Default)
Clean, professional look with indigo accents
- **Light Accent**: `#6366F1`
- **Dark Accent**: `#818CF8`
- **Use Case**: Professional portfolios, business sites

#### 2. **Ocean Blue**
Refreshing ocean-inspired teal and cyan tones
- **Light Accent**: `#14B8A6`
- **Dark Accent**: `#2DD4BF`
- **Use Case**: Fresh, modern feel

#### 3. **Sunset Warmth**
Warm and inviting amber and orange hues
- **Light Accent**: `#F59E0B`
- **Dark Accent**: `#FBBF24`
- **Use Case**: Creative, warm personality

#### 4. **Royal Purple**
Bold and creative purple gradient
- **Light Accent**: `#A855F7`
- **Dark Accent**: `#C084FC`
- **Use Case**: Creative industries, artistic portfolios

#### 5. **Emerald Fresh**
Natural and energetic emerald green
- **Light Accent**: `#10B981`
- **Dark Accent**: `#34D399`
- **Use Case**: Environment, health, growth-focused

#### 6. **Modern Rose**
Elegant rose and pink tones
- **Light Accent**: `#F43F5E`
- **Dark Accent**: `#FB7185`
- **Use Case**: Fashion, lifestyle, feminine aesthetic

#### 7. **Minimal Slate**
Clean monochrome with subtle blue undertones
- **Light Accent**: `#334155`
- **Dark Accent**: `#94A3B8`
- **Use Case**: Minimal, typography-focused designs

#### 8. **Cyber Neon**
High-contrast cyberpunk aesthetic with neon accents
- **Light Accent**: `#EC4899`
- **Dark Accent**: `#FF00FF`
- **Use Case**: Tech, gaming, futuristic themes

#### 9. **Dracula**
Dark editor style palette with purple and pink accents
- **Light Accent**: `#BD93F9`
- **Dark Accent**: `#FF79C6`
- **Use Case**: Developer portfolios, code-heavy sites

#### 10. **Nord Arctic**
Calm nordic palette with cool blues and subtle contrast
- **Light Accent**: `#5E81AC`
- **Dark Accent**: `#81A1C1`
- **Use Case**: Minimalist, Scandinavian design

#### 11. **Material Blue**
Clean material design blue palette
- **Light Accent**: `#3F51B5`
- **Dark Accent**: `#3F51B5`
- **Use Case**: Google Material Design aesthetic

#### 12. **GitHub**
Inspired by GitHub UI colors
- **Light Accent**: `#0969DA`
- **Dark Accent**: `#2F81F7`
- **Use Case**: Developer tools, open source projects

#### 13. **Mint Fresh**
Soft mint greens with clean UI feel
- **Light Accent**: `#14B8A6`
- **Dark Accent**: `#14B8A6`
- **Use Case**: Fresh, clean, modern applications

### Color Token Structure

Each palette includes 11 semantic color tokens:

```typescript
{
  bgPrimary:      // Main background
  bgSecondary:    // Card/section backgrounds
  bgTertiary:     // Hover states, subtle backgrounds
  textPrimary:    // Main text color
  textSecondary:  // Secondary text
  textMuted:      // Disabled/placeholder text
  accent:         // Primary accent color
  accentHover:    // Accent hover state
  accentLight:    // Light accent variant
  border:         // Border color
  borderMuted:    // Subtle borders
}
```

### Using Colors in Code

```tsx
// Via CSS Variables
<div style={{ background: 'var(--accent)' }} />

// Via Tailwind (recommended)
<div className="bg-[var(--accent)] text-[var(--text-primary)]" />

// Component Example
<button className="bg-[var(--accent)] hover:bg-[var(--accent-hover)]">
  Click Me
</button>
```

---

## Typography

### Font Stack

```css
--font-sans: 'Geist Sans', system-ui, -apple-system, sans-serif;
--font-mono: 'Geist Mono', 'Courier New', monospace;
```

### Typography Scale

Responsive typography that adapts across breakpoints:

```css
/* Headings */
h1: text-5xl md:text-6xl lg:text-7xl (48-56-72px)
h2: text-3xl md:text-4xl lg:text-5xl (30-36-48px)
h3: text-2xl md:text-3xl (24-30px)
h4: text-xl md:text-2xl (20-24px)

/* Body */
p: text-base md:text-lg (16-18px)

/* Line Heights */
h1: 1.1
h2: 1.2
h3: 1.3
h4: 1.4
p:  1.7
```

### Font Weights

- **Bold**: `font-bold` (700) - Used for all headings
- **Semibold**: `font-semibold` (600) - Subheadings, emphasis
- **Medium**: `font-medium` (500) - Button text, labels
- **Regular**: `font-normal` (400) - Body text

### Letter Spacing

```css
Headings: tracking-tight (-0.025em)
Body:     tracking-normal (0)
```

### Medium-Style Article Typography

For blog posts and long-form content:

```css
.medium-article {
  font-family: Georgia, 'Times New Roman', serif;
  max-width: 1024px;
}

.medium-article h1-h6 {
  font-family: system-ui, sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.medium-article p, li {
  font-size: 20px;
  line-height: 1.8;
  letter-spacing: -0.003em;
}
```

---

## Spacing & Layout

### Spacing System

```css
--spacing-unit: 8px;
```

Tailwind spacing follows 0.25rem (4px) increments:
- `p-1` = 4px
- `p-2` = 8px
- `p-4` = 16px
- `p-6` = 24px
- `p-8` = 32px
- `p-12` = 48px
- `p-16` = 64px

### Layout Constants

```css
--max-width: 1280px;         /* Container max-width */
--section-spacing: 100px;     /* Vertical section spacing */
```

### Responsive Breakpoints

```css
sm:  640px   /* Mobile landscape */
md:  768px   /* Tablet */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Extra large screens */
```

### Container Pattern

```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

---

## Shadows & Effects

### Shadow System

```css
/* Professional Shadows */
--shadow-soft:   0 2px 8px rgba(0, 0, 0, 0.04);
--shadow-medium: 0 4px 16px rgba(0, 0, 0, 0.08);
--shadow-strong: 0 8px 32px rgba(0, 0, 0, 0.12);

/* Dark Mode (more pronounced) */
--shadow-soft:   0 2px 8px rgba(0, 0, 0, 0.2);
--shadow-medium: 0 4px 16px rgba(0, 0, 0, 0.3);
--shadow-strong: 0 8px 32px rgba(0, 0, 0, 0.4);
```

### Glass Morphism Effects

```css
/* Light Mode */
--glass-bg: rgba(255, 255, 255, 0.06);
--glass-border: rgba(255, 255, 255, 0.12);
--glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);

/* Dark Mode */
--glass-bg: rgba(22, 26, 35, 0.5);
--glass-border: rgba(255, 255, 255, 0.08);
--glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
```

#### Glass Classes

```css
/* Standard Glass */
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}

/* Stronger Glass Effect */
.glass-strong {
  backdrop-filter: blur(24px) saturate(180%);
  /* Other properties same as .glass */
}
```

### Border Radius

```css
--radius: 0.625rem; /* 10px - Base radius */

/* Variants */
--radius-sm:   6px;
--radius-md:   8px;
--radius-lg:   10px;
--radius-xl:   14px;
--radius-2xl:  18px;
--radius-3xl:  22px;
--radius-4xl:  26px;
```

### Custom Effects

```css
/* Accent Border */
.accent-border {
  border: 1px solid var(--accent);
}

/* Accent Glow */
.accent-glow {
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
}

/* Hover Lift Effect */
.hover-lift {
  transition: transform 250ms cubic-bezier(0.25, 0.8, 0.25, 1),
              box-shadow 250ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-strong);
}
```

---

## Animation & Motion

### Motion Tokens

```css
/* Duration */
--duration-fast:   150ms;
--duration-medium: 250ms;
--duration-slow:   300ms;

/* Easing Functions */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);    /* Material standard */
--ease-smooth:   cubic-bezier(0.25, 0.8, 0.25, 1); /* Smooth, natural */
```

### Framer Motion Animations

#### Fade In Up

```tsx
<FadeInUp delay={0} duration={0.6}>
  <Component />
</FadeInUp>
```

**Default Configuration**:
```typescript
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{
  duration: 0.6,
  ease: [0.25, 0.8, 0.25, 1] // --ease-smooth
}
```

#### Fade In

```tsx
<FadeIn delay={0.2} duration={0.6}>
  <Component />
</FadeIn>
```

**Default Configuration**:
```typescript
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{
  duration: 0.6,
  ease: [0.25, 0.8, 0.25, 1]
}
```

### Scroll Behavior

```css
html {
  scroll-behavior: smooth;
}
```

### Transition Utilities

```tsx
/* Standard transition */
<div className="transition-all duration-200">

/* Custom transition */
<div className="transition-colors duration-medium ease-smooth">
```

---

## Component Styles

### Button Component

Three variants with responsive sizing:

```tsx
// Primary Button
<Button variant="primary" size="md">
  Primary Action
</Button>

// Styles Applied:
// - Background: var(--accent)
// - Hover: var(--accent-hover)
// - Shadow: Soft → Medium on hover
// - Scale: 1.02 on hover, 0.98 on active
```

**Variants**:

```tsx
primary:   bg-[var(--accent)] text-white
secondary: bg-[var(--bg-tertiary)] border border-[var(--border)]
ghost:     text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]
```

**Sizes**:

```tsx
sm: px-4 py-2 text-sm
md: px-6 py-3 text-base
lg: px-8 py-4 text-lg
```

### Cards

```tsx
<div className="glass rounded-lg p-6 hover-lift">
  {/* Card content with glass effect and lift animation */}
</div>
```

### Scrollbar Styling

```css
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--text-muted);
}
```

---

## CSS Variables Reference

### Color Variables

```css
/* Background Colors */
--bg-primary:     Main page background
--bg-secondary:   Cards, panels, elevated surfaces
--bg-tertiary:    Hover states, subtle backgrounds

/* Text Colors */
--text-primary:   Main heading and body text
--text-secondary: Subheadings, less important text
--text-muted:     Disabled text, placeholders

/* Accent Colors */
--accent:         Primary brand color
--accent-hover:   Accent hover state
--accent-light:   Light accent variant

/* Border Colors */
--border:         Standard borders
--border-muted:   Subtle, less prominent borders
```

### Tailwind Compatibility Variables

These map custom variables to Tailwind's defaults:

```css
--background:  var(--bg-primary)
--foreground:  var(--text-primary)
--card:        var(--bg-secondary)
--primary:     var(--accent)
--muted:       var(--bg-tertiary)
--ring:        var(--accent)
```

### Complete Variable List

```css
:root {
  /* Colors (dynamic from palette) */
  --bg-primary
  --bg-secondary
  --bg-tertiary
  --text-primary
  --text-secondary
  --text-muted
  --accent
  --accent-hover
  --accent-light
  --border
  --border-muted
  
  /* Glass Effects */
  --glass-bg
  --glass-border
  --glass-shadow
  
  /* Shadows */
  --shadow-soft
  --shadow-medium
  --shadow-strong
  
  /* Motion */
  --duration-fast
  --duration-medium
  --duration-slow
  --ease-standard
  --ease-smooth
  
  /* Layout */
  --spacing-unit
  --max-width
  --section-spacing
  --radius
}
```

---

## Theme Implementation

### How Theming Works

1. **Color Palette Selection** ([lib/config.ts](lib/config.ts))
   ```typescript
   theme: {
     colorPalette: 'indigo' // Select from 13 available palettes
   }
   ```

2. **CSS Generation** ([lib/theme-utils.ts](lib/theme-utils.ts))
   ```typescript
   generateThemeCSS(paletteName: ColorPaletteName): string
   ```
   Converts palette to CSS variables for both light and dark modes

3. **Dynamic Injection** ([app/layout.tsx](app/layout.tsx))
   Theme CSS is injected into `<style>` tag in the document head

4. **Theme Toggle**
   - Provider: `ThemeProvider.tsx` (using next-themes)
   - Dark mode class: `.dark` applied to `<html>` element
   - All color variables automatically switch

### Adding a New Color Palette

1. Open [lib/color-palettes.ts](lib/color-palettes.ts)
2. Add new palette object:

```typescript
myPalette: {
  name: 'My Custom Palette',
  description: 'Description of the palette',
  light: {
    bgPrimary: '#FFFFFF',
    // ... all 11 tokens
  },
  dark: {
    bgPrimary: '#000000',
    // ... all 11 tokens
  },
}
```

3. Update config to use it:
```typescript
// lib/config.ts
theme: {
  colorPalette: 'myPalette'
}
```

### Color Token Guidelines

When creating a new palette, ensure:

- **Contrast Ratios**: Text on background ≥ 4.5:1 (WCAG AA)
- **Accent Visibility**: Accent colors stand out against backgrounds
- **Hierarchy**: Clear visual hierarchy between primary/secondary/muted
- **Dark Mode**: Inverted lightness values for backgrounds
- **Consistency**: Similar hue relationships across light/dark modes

---

## Responsive Design

### Mobile-First Approach

All styles are mobile-first. Start with mobile layout, then enhance for larger screens:

```tsx
// Base (mobile) → sm → md → lg → xl
<div className="text-base md:text-lg lg:text-xl">
```

### Common Responsive Patterns

#### Typography
```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl">
  Responsive Heading
</h1>
```

#### Spacing
```tsx
<section className="py-12 md:py-20 lg:py-24">
  {/* More padding on larger screens */}
</section>
```

#### Layout
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* 1 column → 2 columns → 3 columns */}
</div>
```

#### Visibility
```tsx
<div className="hidden md:block">Desktop Only</div>
<div className="block md:hidden">Mobile Only</div>
```

### Breakpoint Usage Guidelines

- **sm (640px)**: Mobile landscape, small tablets
- **md (768px)**: Tablets, larger mobile devices
- **lg (1024px)**: Desktop, laptops
- **xl (1280px)**: Large desktops
- **2xl (1536px)**: Extra-large screens

---

## Best Practices

### Using the Design System

✅ **DO**:
- Use CSS variables for colors: `bg-[var(--accent)]`
- Follow spacing scale: `p-4`, `p-6`, `p-8` (not arbitrary values)
- Use semantic color tokens: `--text-primary` (not direct hex values)
- Apply responsive utilities: `text-base md:text-lg`
- Leverage pre-built classes: `.glass`, `.hover-lift`

❌ **DON'T**:
- Hardcode colors: `bg-blue-500` (use variables instead)
- Use arbitrary spacing: `p-[13px]` (use scale)
- Skip responsive design: Always consider mobile
- Override glass effects: Use as-is for consistency

### Performance Optimization

- **CSS Variables**: Instant theme switching without re-render
- **Framer Motion**: Hardware-accelerated transforms
- **Backdrop Filters**: Use sparingly (glass effects)
- **Scroll-based Animations**: `useInView` with `once: true`

### Accessibility

- **Focus States**: All interactive elements have visible focus
- **Color Contrast**: Palettes meet WCAG AA standards
- **Semantic HTML**: Proper heading hierarchy
- **Motion**: Respects `prefers-reduced-motion`

---

## Quick Reference

### Most Used Classes

```tsx
/* Containers */
"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

/* Cards */
"glass rounded-lg p-6 hover-lift"

/* Buttons */
"bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-full px-6 py-3"

/* Text */
"text-[var(--text-primary)]"        // Primary text
"text-[var(--text-secondary)]"      // Secondary text
"text-[var(--text-muted)]"          // Muted text

/* Backgrounds */
"bg-[var(--bg-primary)]"            // Page background
"bg-[var(--bg-secondary)]"          // Card background
"bg-[var(--bg-tertiary)]"           // Subtle background

/* Borders */
"border border-[var(--border)]"
"border-[var(--border-muted)]"
```

### File Locations

- **Global Styles**: [app/globals.css](app/globals.css)
- **Color Palettes**: [lib/color-palettes.ts](lib/color-palettes.ts)
- **Theme Utils**: [lib/theme-utils.ts](lib/theme-utils.ts)
- **Site Config**: [lib/config.ts](lib/config.ts)
- **Theme Provider**: [providers/ThemeProvider.tsx](providers/ThemeProvider.tsx)
- **Components**: [components/](components/)

---

## Examples

### Example 1: Creating a Themed Card

```tsx
import { FadeInUp } from '@/components/animations/reveal';

export function ThemedCard() {
  return (
    <FadeInUp delay={0.2}>
      <div className="glass rounded-lg p-6 hover-lift">
        <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
          Card Title
        </h3>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          This card uses the glass effect, theme colors, and smooth animations.
        </p>
        <button className="mt-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-6 py-2 rounded-full transition-colors">
          Action
        </button>
      </div>
    </FadeInUp>
  );
}
```

### Example 2: Responsive Section

```tsx
export function ResponsiveSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-8">
          Section Title
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Grid items */}
        </div>
      </div>
    </section>
  );
}
```

### Example 3: Custom Animation

```tsx
import { motion } from 'framer-motion';

export function CustomAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.8, 0.25, 1] // Using --ease-smooth
      }}
      className="glass rounded-lg p-8"
    >
      {/* Content */}
    </motion.div>
  );
}
```

---

## Maintenance & Updates

### Updating Colors

1. Choose/create palette in [color-palettes.ts](lib/color-palettes.ts)
2. Update [config.ts](lib/config.ts) with new palette name
3. Restart dev server to see changes

### Adding New Design Tokens

1. Add CSS variable to [globals.css](app/globals.css) `:root` and `.dark`
2. Document in this file
3. Use via `var(--your-token)` in components

### Testing Theme Changes

```bash
# Start dev server
npm run dev

# Test all palettes by updating config.ts
# Test light/dark mode toggle
# Verify accessibility with browser DevTools
```

---

## Version History

- **v1.0.0** - Initial design system with 13 color palettes
- **Current**: Professional Indigo theme active

---

**Last Updated**: March 2026  
**Maintained By**: Faizan Popatiya  
**Questions?** Refer to individual component files or [SETUP_GUIDE.md](SETUP_GUIDE.md)
