'use client';

import { FadeInUp } from '@/components/animations/reveal';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Zap, 
  Database, 
  Cloud 
} from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Expert in React, Next.js, TypeScript, and modern JavaScript frameworks',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive interfaces with attention to detail',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Building seamless experiences across all devices and screen sizes',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing web apps for speed, accessibility, and SEO',
  },
  {
    icon: Database,
    title: 'API Integration',
    description: 'Seamless integration with RESTful and GraphQL APIs',
  },
  {
    icon: Cloud,
    title: 'Cloud Deployment',
    description: 'Experience with Vercel, AWS, and modern deployment pipelines',
  },
];

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <FadeInUp>
        <div className="text-center mb-16">
          <h2 className="mb-4">Skills & Expertise</h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Comprehensive skill set covering all aspects of modern web development
          </p>
        </div>
      </FadeInUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <FadeInUp key={skill.title} delay={index * 0.1}>
            <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 hover:shadow-[var(--shadow-medium)] group">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--accent)]/20 transition-colors duration-300">
                <skill.icon className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">
                {skill.title}
              </h3>
              <p className="text-[var(--text-secondary)]">
                {skill.description}
              </p>
            </div>
          </FadeInUp>
        ))}
      </div>
    </SectionWrapper>
  );
}
