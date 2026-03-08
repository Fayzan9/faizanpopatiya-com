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
    title: 'GenAI Engineer',
    tagline: 'Building Intelligent AI Solutions',
    shortBio: 'GenAI Engineer specializing in GenAI, LLMs, and production-grade machine learning systems. Transforming complex data into intelligent solutions.',
    longBio: "I'm a GenAI Engineer with 3+ years of specialized experience in Python development, Large Language Models, and GenAI applications. I build production-grade AI systems that solve real business problems.",
    extendedBio: "From fine-tuning LLMs to building RAG systems and deploying ML pipelines at scale, I focus on creating reliable, accurate AI solutions that deliver measurable impact.",
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
      role: 'Senior Software Developer',
      company: 'Cognida.ai',
      duration: 'Aug 2023 - Present',
      description: 'Leading development of GenAI applications using LLMs, vector databases, and Python frameworks. Building RAG systems and fine-tuning models for improved performance.',
      highlights: []
    },
    {
      year: '2023',
      role: 'Software Developer Intern',
      company: 'Cognida.ai',
      duration: 'Feb 2023 - Aug 2023',
      description: 'Developed and deployed GenAI applications using LLMs, vector databases, and Python frameworks. Built RAG systems and fine-tuned models for improved performance.',
      highlights: []
    },
    {
      year: '2019',
      role: 'B.Tech in Computer Science Engineering',
      company: 'Dr. Babasaheb Ambedkar Technological University',
      duration: 'June 2019 - July 2023',
      description: 'Graduated with a B.Tech in Computer Science Engineering, specializing in AI and machine learning. Completed coursework in algorithms, data structures, machine learning, and deep learning.',
      highlights: []
    },
  ],

  // Technical Skills
  skills: [
    {
      category: 'AI & LLMs',
      icon: 'Brain',
      skills: ['OpenAI', 'Agentic AI Frameworks', 'RAG', 'Prompt Engineering'],
    },
    {
      category: 'ML Frameworks',
      icon: 'Cpu',
      skills: ['PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'scikit-learn'],
    },
    {
      category: 'Development',
      icon: 'Code2',
      skills: ['Python', 'FastAPI', 'Django', 'Docker'],
    },
    {
      category: 'Data & Vectors',
      icon: 'Database',
      skills: ['Pinecone', 'Weaviate', 'ChromaDB', 'PostgreSQL', 'Redis'],
    },
    {
      category: 'Cloud & Ops',
      icon: 'Network',
      skills: ['Azure', 'Kubernetes', 'CI/CD'],
    },
  ],

  // Site Metadata
  metadata: {
    title: 'AI/ML Engineer Portfolio',
    description: 'Portfolio of an AI/ML Engineer specializing in GenAI, LLMs, and production-grade machine learning systems.',
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
