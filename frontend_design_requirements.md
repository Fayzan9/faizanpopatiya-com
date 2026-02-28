Portfolio Website – Product & Design Requirements

Design Direction: Minimal Tech Luxury + Subtle Futuristic Motion
Purpose: Showcase advanced frontend engineering, refined UI/UX thinking, and animation fluency.

1. Product Overview
1.1 Objective

Build a high-end personal portfolio website that:

Demonstrates senior-level frontend capability

Implements refined animation systems

Uses a scalable design system

Includes blog functionality

Includes project showcase

Supports light/dark theme

Is fully responsive

2. Technology Requirements
2.1 Recommended Stack

Framework: Next.js (App Router)

Language: TypeScript

Styling: Tailwind CSS (with CSS variables for tokens)

Animation: Framer Motion (primary), IntersectionObserver (secondary)

UI Primitives: ShadCN UI (optional but preferred)

Icons: Lucide

Deployment: Vercel

3. Design System
3.1 Design Principles

High whitespace discipline

Large typography hierarchy

Subtle motion (no excessive bounce)

Monochromatic base palette + single accent

Glassmorphism used minimally

Motion supports hierarchy, not decoration

3.2 Color System (Token-Based)

All colors must be defined via CSS variables.

Core Tokens
--bg-primary
--bg-secondary
--bg-tertiary
--text-primary
--text-secondary
--text-muted
--accent
--border
--glass-bg
--glass-border
--shadow-soft
--shadow-strong
Light Theme Characteristics

Warm neutral background

Soft shadows

Low-contrast borders

Dark Theme Characteristics

Deep neutral background (not pure black)

Elevated surfaces via contrast

Subtle glow on accent elements

3.3 Typography
Structure

Display font for headings (modern geometric sans)

Clean sans-serif for body text

Strong weight contrast

Scale Example
Element	Size
Hero Heading	56–72px
Section Heading	32–40px
Subheading	20–24px
Body	16–18px
Caption	12–14px

Line-height must be consistent and comfortable.

3.4 Spacing System

8px spacing grid

Max width: 1200–1400px

Consistent vertical rhythm

Generous section spacing (minimum 96px vertical)

4. Core Layout Architecture
4.1 Global Layout

All pages share:

Floating island navbar

Content container wrapper

Footer

Page transition animation

4.2 Pages Required

Home

Projects

Project Detail

Blog

Blog Detail

About

Contact

5. Component Requirements
5.1 Island Navigation Bar
Design Requirements

Floating center-top

Pill-shaped

Backdrop blur

Semi-transparent glass background

Rounded-full shape

Shadow elevation

Behavior Requirements

Fixed positioning

Shrinks slightly on scroll

Background becomes more opaque on scroll

Active link indicator slides smoothly

Smooth hover transitions

Light/Dark toggle integrated

Mobile collapses into animated slide menu

Motion

Transition duration: 250–300ms

Ease: cubic-bezier(0.4, 0, 0.2, 1)

5.2 Hero Section
Layout

Large display typography

Clear introduction line

Short descriptor

Primary CTA (Projects)

Secondary CTA (Contact)

Motion

Fade + translate up on load

Staggered reveal of text

Subtle animated gradient or mesh background

Optional slow background parallax

5.3 Project Card Component
Layout

Image preview

Project title

Short description

Tech stack tags

CTA link

Interaction

Hover elevation

Subtle lift (translateY)

Soft shadow increase

Image slight zoom

Smooth transition

Animation

Reveal on scroll (fade + translate)

Staggered grid reveal

5.4 Blog Card Component
Layout

Title

Excerpt

Date

Reading time

Category tag

Interaction

Underline animation on hover

Slight background change on hover

Soft transition

5.5 Buttons
Types

Primary

Secondary

Ghost

Requirements

Smooth hover transitions

Slight scale effect on hover

No harsh color jumps

Accent-driven focus ring

Accessible contrast ratio

5.6 Section Wrapper Component

Reusable wrapper that:

Applies consistent vertical spacing

Handles scroll reveal

Contains max-width layout

Optionally supports background variation

5.7 Footer

Minimal layout

Social links

Copyright

Subtle divider

Clean typography

6. Animation System
6.1 Motion Philosophy

Motion must guide attention

Avoid flashy or exaggerated animation

Maintain consistency across components

6.2 Motion Tokens
--duration-fast: 150ms
--duration-medium: 300ms
--duration-slow: 600ms

--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)
--ease-smooth: cubic-bezier(0.25, 0.8, 0.25, 1)
6.3 Scroll Animations

Use:

IntersectionObserver

Framer Motion variants

Allowed animations:

Fade in + translateY

Staggered grid reveal

Section slide-in

Subtle parallax

Disallowed:

Bounce

Over-rotation

Excessive scaling

6.4 Page Transitions

Smooth fade + slight slide between routes

Duration ~400ms

No hard reload feeling

7. UX Flow – Home Page
Section Order

Hero

Featured Projects

Skills / Tech Stack

Experience Timeline (optional)

Blog Preview

CTA / Contact

Flow must feel continuous and guided.

8. Responsive Requirements
Breakpoints

Mobile

Tablet

Desktop

Large desktop

Mobile Requirements

Navbar becomes compact

Grid becomes stacked

Maintain large readable typography

Touch-friendly buttons

No overflow or layout shifts

9. Performance Requirements

Lighthouse score 90+

No layout shifts (CLS optimized)

Optimized images

Lazy load offscreen content

Minimal animation impact on performance

10. Accessibility Requirements

WCAG AA contrast compliance

Keyboard navigable

Focus states clearly visible

Semantic HTML

Proper aria labels

11. Advanced Visual Enhancements

Optional but encouraged:

Subtle grid background

Noise texture overlay

Scroll progress indicator

Blur-to-focus image loading

Skeleton loaders

Subtle glow on accent hover

12. Blog Requirements

Markdown-based blog system

Dynamic routing

Syntax highlighting for code

Reading time calculation

SEO metadata support

OpenGraph support

13. Project Detail Page Requirements

Large hero image

Overview section

Tech stack breakdown

Problem / Solution narrative

Screenshots

External link

Smooth scroll anchor navigation

14. Code Quality Requirements

Fully typed (TypeScript)

Reusable components

Clean folder structure

Consistent naming conventions

No inline styling (except dynamic cases)

Token-based theming only

15. Folder Structure (Example)
/app
/components
  /ui
  /layout
  /animations
  /cards
/styles
/lib
/hooks
/content
  /blog
  /projects