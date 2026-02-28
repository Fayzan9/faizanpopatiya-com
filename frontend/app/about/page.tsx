import { Metadata } from 'next';
import Image from 'next/image';
import { FadeInUp } from '@/components/animations/reveal';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Code2, Palette, Zap, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About - Portfolio',
  description: 'Learn more about my background, skills, and passion for web development.',
};

const timeline = [
  {
    year: '2026',
    title: 'Senior Frontend Engineer',
    company: 'Tech Company',
    description: 'Leading frontend development for enterprise applications',
  },
  {
    year: '2024',
    title: 'Frontend Engineer',
    company: 'Startup Inc',
    description: 'Built scalable web applications using React and Next.js',
  },
  {
    year: '2022',
    title: 'Junior Developer',
    company: 'Web Agency',
    description: 'Developed client websites and learned modern web technologies',
  },
  {
    year: '2021',
    title: 'Computer Science Degree',
    company: 'University',
    description: 'Graduated with honors in Computer Science',
  },
];

const values = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-tested code',
  },
  {
    icon: Palette,
    title: 'Design Excellence',
    description: 'Crafting beautiful, intuitive user experiences',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Building fast, optimized web applications',
  },
  {
    icon: Heart,
    title: 'User-Centric',
    description: 'Always putting users at the center of development',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              {/* Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[var(--bg-tertiary)]">
                <Image
                  src="/avatar.svg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Intro */}
              <div>
                <h1 className="mb-6">About Me</h1>
                <p className="text-xl text-[var(--text-secondary)] mb-6">
                  I'm a passionate frontend engineer with 5+ years of experience
                  building modern web applications. I specialize in React, Next.js,
                  and TypeScript.
                </p>
                <p className="text-lg text-[var(--text-secondary)]">
                  I believe in writing clean, maintainable code and creating
                  delightful user experiences that make a difference.
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper variant="secondary">
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="mb-4">What I Value</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Principles that guide my work and decision-making
            </p>
          </div>
        </FadeInUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <FadeInUp key={value.title} delay={index * 0.1}>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[var(--accent)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-[var(--text-secondary)]">{value.description}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper>
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="mb-4">My Journey</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Professional experience and education
            </p>
          </div>
        </FadeInUp>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <div className="relative pl-8 pb-12 border-l-2 border-[var(--border)] last:pb-0">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[var(--accent)] border-4 border-[var(--bg-primary)]" />
                <div className="mb-1 text-sm font-medium text-[var(--accent)]">
                  {item.year}
                </div>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <div className="text-[var(--text-muted)] mb-2">{item.company}</div>
                <p className="text-[var(--text-secondary)]">{item.description}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
