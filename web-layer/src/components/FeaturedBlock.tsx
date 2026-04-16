import { FEATURED_CONTENT } from "@/data/featured";
import { ArrowRight } from "lucide-react";

interface FeaturedBlockProps {
  id: string | null;
  hero?: boolean;
}

export function FeaturedBlock({ id, hero = false }: FeaturedBlockProps) {
  if (!id) return null;

  const content = FEATURED_CONTENT.find((c) => c.id === id);

  if (!content) return null;

  const buttonLabel = content.label || "Learn More";

  // Use hex colors or standard CSS colors for reliability
  const fromColor = content.gradientFrom || "#3b82f6"; // default blue-500
  const toColor = content.gradientTo || "#10b981";     // default emerald-500

  if (hero) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/5 p-8 transition-all hover:bg-muted/10">
        {/* Blur Blobs using inline styles for dynamic colors */}
        <div
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: fromColor }}
        />
        <div
          className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: toColor }}
        />

        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div
              className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
              style={{
                borderColor: `${fromColor}4D`, // 30% opacity
                backgroundColor: `${fromColor}1A`, // 10% opacity
                color: fromColor
              }}
            >
              Featured
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-fg mb-2">{content.title}</h2>
              <p className="text-lg text-muted-fg leading-relaxed">{content.description}</p>
            </div>
            <a
              href={content.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-fg px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-fg/90"
            >
              {buttonLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="w-full md:w-1/3 shrink-0">
            <div className="aspect-square relative rounded-xl overflow-hidden border border-border shadow-2xl">
              <div
                className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{ background: `linear-gradient(to top right, ${fromColor}, ${toColor})` }}
              />
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
    <a
      href={content.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-fg/20"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(to bottom right, ${fromColor}1A, ${toColor}1A)` }} // 10% opacity
      />
      <div className="relative z-10 flex gap-6 items-center">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-border">
          <img
            src={content.image}
            alt={content.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-fg mb-1">{content.title}</h4>
          <p className="text-sm text-muted-fg line-clamp-2">{content.description}</p>
          <div
            className="mt-2 flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: fromColor }}
          >
            {buttonLabel}
            <ArrowRight className="h-3 w-3" />
          </div>
        </div>
      </div>
    </a>
  );
}
