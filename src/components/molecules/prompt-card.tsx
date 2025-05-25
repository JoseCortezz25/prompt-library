import { cn } from '@/lib/utils';

interface PromptCardProps {
  image?: string;
  title: string;
  description: string;
  className?: string;
}

export const PromptCard = ({
  image,
  title,
  description,
  className = ''
}: PromptCardProps) => {
  return (
    <article className={cn('flex flex-col', className)}>
      {image && (
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-slate-100">
          <img
            src={image}
            alt={`Illustration for ${title}`}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="mt-4 flex flex-grow flex-col">
        <p className="mb-1 text-xs font-bold tracking-wider uppercase">
          {title}
        </p>

        <p className="flex-grow text-base leading-relaxed text-slate-700 md:text-lg">
          {description}
        </p>
      </div>
    </article>
  );
};
