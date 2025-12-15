import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', centered && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
