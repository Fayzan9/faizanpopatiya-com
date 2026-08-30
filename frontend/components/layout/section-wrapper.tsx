import { ReactNode, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'secondary' | 'tertiary';
}

const hasVerticalPaddingClass = (className?: string) =>
  Boolean(className && /(?:^|\s)(?:!)?(?:[\w-]+:)*p(?:y|t|b)-/.test(className));

export const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ children, className, id, variant = 'default' }, ref) => {
    const bgClass = {
      default: '',
      secondary: 'bg-[var(--bg-secondary)]',
      tertiary: 'bg-[var(--bg-tertiary)]',
    }[variant];

    return (
      <section 
        ref={ref}
        id={id}
        className={cn(
          !hasVerticalPaddingClass(className) && 'py-8 md:py-12 lg:py-16',
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
);

SectionWrapper.displayName = 'SectionWrapper';
