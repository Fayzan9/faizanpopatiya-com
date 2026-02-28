'use client';

import { FadeInUp } from '@/components/animations/reveal';
import { BlogCard } from '@/components/cards/blog-card';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const recentPosts = [
  {
    title: 'Building Performant React Applications',
    excerpt: 'Learn advanced techniques for optimizing React apps and improving user experience through performance enhancements.',
    date: 'Feb 28, 2026',
    readingTime: '8 min read',
    category: 'React',
    href: '/blog/performant-react-applications',
  },
  {
    title: 'Mastering TypeScript in 2026',
    excerpt: 'A comprehensive guide to leveraging TypeScript features for building type-safe, scalable applications.',
    date: 'Feb 25, 2026',
    readingTime: '12 min read',
    category: 'TypeScript',
    href: '/blog/mastering-typescript-2026',
  },
  {
    title: 'The Future of Web Animation',
    excerpt: 'Exploring modern animation techniques with Framer Motion and CSS animations for delightful user experiences.',
    date: 'Feb 22, 2026',
    readingTime: '6 min read',
    category: 'Animation',
    href: '/blog/future-of-web-animation',
  },
];

export function BlogPreview() {
  return (
    <SectionWrapper id="blog" variant="secondary">
      <FadeInUp>
        <div className="text-center mb-16">
          <h2 className="mb-4">Latest Articles</h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Thoughts on web development, design, and technology
          </p>
        </div>
      </FadeInUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {recentPosts.map((post, index) => (
          <FadeInUp key={post.title} delay={index * 0.1}>
            <BlogCard {...post} />
          </FadeInUp>
        ))}
      </div>

      <FadeInUp delay={0.4}>
        <div className="text-center">
          <Link href="/blog">
            <Button variant="secondary" size="lg" className="gap-2 group">
              Read All Articles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </FadeInUp>
    </SectionWrapper>
  );
}
