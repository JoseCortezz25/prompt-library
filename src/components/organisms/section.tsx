import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section
      className={cn(
        'mx-auto mt-[9rem] flex flex-col gap-4 px-6 pb-20 md:max-w-5xl lg:container',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
