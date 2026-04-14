import { Video, Presentation } from "lucide-react";
import { cn } from "@/lib/utils";

interface PresentationEmbedProps {
  type: "youtube" | "slides";
  embedUrl: string;
  title: string;
  className?: string;
}

export function PresentationEmbed({ type, embedUrl, title, className }: PresentationEmbedProps) {
  const Icon = type === "youtube" ? Video : Presentation;
  const label = type === "youtube" ? "Related Video" : "Related Slides";

  return (
    <div className={cn("my-10 overflow-hidden rounded-xl border border-border bg-bg shadow-sm font-sans", className)}>
      <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-4 py-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-fg/10 text-fg">
          <Icon className="h-3 w-3" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-fg">{title}</h4>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="text-[10px] font-medium uppercase tracking-wider text-muted-fg">{label}</span>
        </div>
      </div>
      <div className="relative w-full aspect-video bg-muted/10">
        <iframe
          src={embedUrl}
          title={title}
          className="absolute top-0 left-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
