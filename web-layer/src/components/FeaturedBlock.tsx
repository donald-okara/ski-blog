import { FEATURED_CONTENT } from "@/data/featured";

interface FeaturedBlockProps {
  id: string | null;
  hero?: boolean;
}

export function FeaturedBlock({ id, hero = false }: FeaturedBlockProps) {
  if (!id) return null;

  const content = FEATURED_CONTENT.find((c) => c.id === id);

  if (!content) return null;

  if (hero) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/5 p-8 transition-all hover:bg-muted/10">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
              Featured
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-fg">{content.title}</h2>
            <p className="text-lg text-muted-fg leading-relaxed">{content.description}</p>
          </div>
          <div className="w-full md:w-1/3 shrink-0">
            <div className="aspect-square relative rounded-xl overflow-hidden border border-border shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 mix-blend-overlay" />
              <img
                src={content.image}
                alt={content.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-fg/20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10 flex gap-6 items-center">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-border">
          <img
            src={content.image}
            alt={content.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div>
          <h4 className="font-semibold text-fg mb-1">{content.title}</h4>
          <p className="text-sm text-muted-fg line-clamp-2">{content.description}</p>
        </div>
      </div>
    </div>
  );
}
