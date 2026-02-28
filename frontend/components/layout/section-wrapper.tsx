import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'secondary' | 'tertiary';
}

export function SectionWrapper({ 
  children, 
  className, 
  id,
  variant = 'default' 
}: SectionWrapperProps) {
  const bgClass = {
    default: '',
    secondary: 'bg-[var(--bg-secondary)]',
    tertiary: 'bg-[var(--bg-tertiary)]',
  }[variant];

  return (
    <section 
      id={id}
      className={cn(
        'py-16 md:py-24 lg:py-32',
        bgClass,
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-[var(--max-width)]">
        {children}
      </div>
    </section>
  );
}
