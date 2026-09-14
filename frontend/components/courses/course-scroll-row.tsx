'use client';

import { ReactNode, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CourseScrollRowProps {
  children: ReactNode;
  className?: string;
}

export function CourseScrollRow({ children, className }: CourseScrollRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (amount: number) => {
    scrollRef.current?.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <div className={cn('relative -mx-4 px-4 md:mx-0 md:px-14', className)}>
      <div
        ref={scrollRef}
        style={{
          scrollbarWidth: 'none',
          maskImage:
            'linear-gradient(to right, transparent 0, black 16px, black calc(100% - 16px), transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0, black 16px, black calc(100% - 16px), transparent 100%)',
        }}
        className="flex gap-6 overflow-x-auto px-4 py-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <button
        type="button"
        onClick={() => scrollBy(-360)}
        aria-label="Scroll courses left"
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full glass-strong border border-violet-500/25 hover:border-violet-400/60 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover-lift text-[var(--text-primary)] transition-all duration-200"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={() => scrollBy(360)}
        aria-label="Scroll courses right"
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full glass-strong border border-violet-500/25 hover:border-violet-400/60 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover-lift text-[var(--text-primary)] transition-all duration-200"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
