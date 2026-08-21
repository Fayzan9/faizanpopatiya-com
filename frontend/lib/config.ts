/**
 * Site Configuration
 * 
 * Central configuration file for all site content and settings.
 * Update these values to customize your portfolio site.
 */

import type { ColorPaletteName } from './color-palettes';

export const siteConfig = {
  // Theme Settings
  theme: {
    // Choose from: 'indigo', 'ocean', 'sunset', 'purple', 'emerald', 'rose', 'slate', 'cyber'
    colorPalette: 'indigo' as ColorPaletteName,
  },

  // Personal Information
  personal: {
    name: 'Faizan Popatiya',
    firstName: 'Faizan',
    lastName: 'Popatiya',
    title: 'AI/ML Engineer',
    tagline: 'Agentic Systems | Production AI',
    shortBio: 'AI/ML engineer with 3 years of experience building and operating production AI systems, including multi-agent orchestration, retrieval pipelines, and real-time inference services.',
    longBio: "I'm an AI/ML engineer who owns systems end-to-end, from architecture and implementation through deployment and reliability. My production workflows serve 300+ case reviewers and have reduced manual review time by 98%.",
    extendedBio: "I build multi-agent orchestration systems with planner-executor patterns, retrieval-augmented generation pipelines with hybrid retrieval and re-ranking, and real-time inference services deployed on Kubernetes. I focus on reliable, production-grade AI that delivers measurable impact.",
    yearsExperience: '3+',
    avatar: '/avatar.svg',
  },

  // Contact Information
  contact: {
    email: 'faizan.popatiya.work@gmail.com',
    location: 'Hyderabad', // Optional
    resume: '/resume.pdf', // Path to resume file in public folder
  },

  // Social Media Links
  social: {
    github: 'https://github.com/fayzan9',
    linkedin: 'https://www.linkedin.com/in/faizan-popatiya-452980250/',
    twitter: 'https://twitter.com/yourhandle',
    leetcode: 'https://leetcode.com/u/fayzanpopatiya/',
    // Add more as needed
  },

  // Work Status
  availability: {
    isAvailable: true,
    statusText: 'Available for Work',
    unavailableText: 'Currently Unavailable', // Fallback text
  },

  // Experience Timeline (for About and Skills pages)
  experience: [
    {
      year: 'Present',
      role: 'Software Engineer, AI/ML',
      company: 'Cognida',
      duration: 'Mar 2023 - Present',
      description: 'Own production AI systems end-to-end, from architecture through deployment and reliability, serving 300+ case reviewers and reducing manual review time by 98%.',
      highlights: [
        'Architected an assessment-extraction pipeline using LLM-based extraction with schema validation and confidence-scored exception routing, cutting per-case review time from 8 hours to under 10 minutes at 95% field accuracy.',
        'Designed the agentic architecture for a document drafting-and-management platform: a planner agent routes requests to drafting, compliance-review, and version-control agents via typed function-calling contracts, cutting first-draft turnaround from ~2 days to same-day across 10+ document types.',
        'Led the engineering design of an internal conversational AI assistant used as the team\'s reference implementation for engineering standards; mentored 2 engineers to independent shipping within 2 weeks.',
        'Implemented a human-feedback loop with LLM-as-judge regression testing, cutting the incorrect-response rate ~20% over two iterations.',
        'Leading integration of a RAG pipeline into the assessment system: hybrid BM25 + dense-embedding retrieval, cross-encoder re-ranking, and an LLM-judge groundedness gate, now in staged rollout.',
        'Deploy and operate platform services on Azure Kubernetes Service (AKS) with Dockerized builds and GitHub Actions CI/CD, sustaining 99.5% uptime (30-day rolling).',
        'Primary technical point of contact for the client account: ran 30+ live product demos and drove technical design decisions from stakeholder requirements through to shipped features.',
      ]
    },
    {
      year: '2019',
      role: 'Bachelor of Technology in Computer Science',
      company: 'Dr. B.R. Ambedkar Open University',
      duration: 'Hyderabad, India',
      description: 'Graduated with a B.Tech in Computer Science.',
      highlights: []
    },
  ],

  // Technical Skills
  skills: [
    {
      category: 'AI & Agentic Systems',
      icon: 'Brain',
      skills: ['Multi-Agent Orchestration', 'RAG (Hybrid Retrieval & Re-ranking)', 'LLM-as-Judge Evaluation', 'Google ADK', 'MCP', 'Function Calling / Tool Use'],
    },
    {
      category: 'Software & Systems',
      icon: 'Code2',
      skills: ['Python', 'TypeScript', 'SQL', 'FastAPI', 'WebSockets', 'REST API Design', 'Async/Concurrent Processing'],
    },
    {
      category: 'Data & Storage',
      icon: 'Database',
      skills: ['PostgreSQL', 'pgvector', 'Redis'],
    },
    {
      category: 'Cloud & Ops',
      icon: 'Network',
      skills: ['Docker', 'Azure Kubernetes Service (AKS)', 'Google Cloud Run', 'GitHub Actions CI/CD', 'Observability & Monitoring'],
    },
  ],

  // Site Metadata
  metadata: {
    title: 'AI/ML Engineer Portfolio',
    description: 'Portfolio of an AI/ML Engineer specializing in agentic systems, RAG pipelines, and production-grade AI.',
    siteUrl: 'https://faizanpopatiya.com',
    ogImage: '/og-image.png', // Default Open Graph image
  },

  // Content Settings
  content: {
    featuredProjectsCount: 3,
    blogPreviewCount: 3,
  },

  // CTA Section
  cta: {
    heading: "Let's Work Together",
    description: "Have a project in mind? Let's discuss how we can create something amazing together.",
    primaryButtonText: 'Start a Conversation',
    secondaryButtonText: 'Send Email',
  },

  // Navigation
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],

  // Featured Projects Section
  sections: {
    featuredProjects: {
      title: 'Featured Projects',
      description: 'A selection of my recent work showcasing expertise in modern web development',
    },
    skills: {
      title: 'AI & ML Expertise',
      description: 'Specialized in cutting-edge AI technologies, from LLMs to production ML systems',
      badge: 'Skills & Experience',
    },
    blog: {
      title: 'Latest from the Blog',
      description: 'Thoughts on AI/ML, software development, and technology',
    },
  },
} as const;

// Type-safe config access
export type SiteConfig = typeof siteConfig;
