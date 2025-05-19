import { cn } from '@/lib/utils';
import React from 'react';

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

type HeadingVisualType =
  | 'display'
  | 'title-xl'
  | 'title-lg'
  | 'title-md'
  | 'title-sm'
  | 'subheading'
  | 'paragraph';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant: HeadingVariant;
  type: HeadingVisualType;
  children: React.ReactNode;
  className?: string;
}

const visualTypeStyles: Record<HeadingVisualType, string> = {
  display: 'text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl',
  'title-xl': 'text-5xl font-bold tracking-tight md:text-6xl',
  'title-lg': 'text-4xl font-bold tracking-tight md:text-5xl',
  'title-md': 'text-3xl font-semibold tracking-tight md:text-4xl',
  'title-sm': 'text-2xl font-semibold md:text-3xl',
  subheading:
    'text-xl font-medium md:text-2xl text-zinc-700 dark:text-zinc-400',
  paragraph: 'text-base font-normal md:text-lg text-zinc-700 dark:text-zinc-400'
};

const baseHeadingClasses = 'text-zinc-900 dark:text-white leading-tight';

export const Heading: React.FC<HeadingProps> = ({
  variant: Component,
  type,
  children,
  className,
  ...props
}) => {
  const typeSpecificClasses = visualTypeStyles[type];

  return (
    <Component
      className={cn(baseHeadingClasses, typeSpecificClasses, className)}
      {...props}
    >
      {children}
    </Component>
  );
};
