import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
  variant?: 'default' | 'sm' | 'md' | 'lg';
  className?: string;
}

const iconVariants = cva('w-6 h-6', {
  variants: {
    variant: {
      default: 'w-6 h-6',
      sm: 'w-4 h-4',
      md: 'w-8 h-8',
      lg: 'w-10 h-10'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

export const Icon = ({ icon, variant, className, ...props }: IconProps) => {
  return (
    <div className={cn(iconVariants({ variant, className }))} {...props}>
      <img src={icon} alt="Icon" />
    </div>
  );
};
