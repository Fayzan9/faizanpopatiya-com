'use client';

import Link from 'next/link';
import { Layers, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CourseCardProps {
  slug: string;
  title: string;
  tagline: string;
  levelCount: number;
  topicCount: number;
  className?: string;
}

export function CourseCard({
  slug,
  title,
  tagline,
  levelCount,
  topicCount,
  className,
}: CourseCardProps) {
  return (
    <div className={cn('group shrink-0 w-[300px] sm:w-[340px] snap-start', className)}>
      <Link href={`/courses/${slug}`} className="block h-full">
        <article className="relative h-full flex flex-col overflow-hidden p-6 rounded-2xl glass hover:glass-strong transition-colors duration-300 border border-violet-500/15 hover:border-violet-400/50 !shadow-none">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 blur-2xl"
          />

          <div className="relative flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-500/10 text-violet-500 border border-violet-500/25">
              Course
            </span>
          </div>

          <h3 className="relative text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-violet-500 transition-colors duration-200">
            {title}
          </h3>

          <p className="relative text-[var(--text-secondary)] mb-6 flex-1">
            {tagline}
          </p>

          <div className="relative flex items-center justify-between pt-4 border-t border-violet-500/10">
            <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
              <div className="flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                <span>{levelCount} levels</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span>{topicCount} topics</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-violet-500 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200" />
          </div>
        </article>
      </Link>
    </div>
  );
}
