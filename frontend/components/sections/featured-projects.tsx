'use client';

import { FadeInUp } from '@/components/animations/reveal';
import { ProjectCard } from '@/components/cards/project-card';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuredProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with advanced filtering, real-time inventory, and seamless checkout experience.',
    image: '/projects/ecommerce.svg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    href: '/projects/ecommerce-platform',
  },
  {
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard for SaaS products with real-time data visualization and comprehensive reporting.',
    image: '/projects/dashboard.svg',
    tags: ['React', 'D3.js', 'Firebase', 'Material UI'],
    href: '/projects/saas-dashboard',
  },
  {
    title: 'Social Media App',
    description: 'Mobile-first social platform with real-time messaging, stories, and advanced content discovery.',
    image: '/projects/social.svg',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    href: '/projects/social-media-app',
  },
];

export function FeaturedProjects() {
  return (
    <SectionWrapper id="projects" variant="secondary">
      <FadeInUp>
        <div className="text-center mb-16">
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            A selection of my recent work showcasing expertise in modern web development
          </p>
        </div>
      </FadeInUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredProjects.map((project, index) => (
          <FadeInUp key={project.title} delay={index * 0.1}>
            <ProjectCard {...project} />
          </FadeInUp>
        ))}
      </div>

      <FadeInUp delay={0.4}>
        <div className="text-center">
          <Link href="/projects">
            <Button variant="secondary" size="lg" className="gap-2 group">
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </FadeInUp>
    </SectionWrapper>
  );
}
