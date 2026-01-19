import { Calendar, ExternalLink } from 'lucide-react';
import { useSubstackNews, SUBSTACK_HOME_URL, type SubstackPost } from '@/hooks/useSubstackNews';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

interface NewsGridProps {
  showViewAll?: boolean;
}

function NewsCard({ post }: { post: SubstackPost }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl border border-border bg-background overflow-hidden hover-lift"
    >
      <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        {post.imageUrl ? (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="font-display text-xl font-semibold text-primary">
                V
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(post.publishedAt).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </span>
          <span className="flex items-center gap-1.5 ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink className="h-3.5 w-3.5" />
            Read on Substack
          </span>
        </div>
      </div>
    </a>
  );
}

function NewsCardSkeleton() {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-background overflow-hidden">
      <Skeleton className="aspect-[16/10] rounded-none" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-3/4" />
        <div className="pt-4 border-t border-border">
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </div>
  );
}

export function NewsGrid({ showViewAll = false }: NewsGridProps) {
  const { data: posts, isLoading, error } = useSubstackNews();

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <NewsCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error || !posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No news available right now.</p>
        <a
          href={SUBSTACK_HOME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-primary hover:underline"
        >
          Visit our Substack
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
      {showViewAll && (
        <div className="text-center">
          <Button variant="outline" asChild>
            <a
              href={SUBSTACK_HOME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              View all on Substack
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      )}
    </div>
  );
}
