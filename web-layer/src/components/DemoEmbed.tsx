import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface DemoEmbedProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function DemoEmbed({ title, description, className, children }: DemoEmbedProps) {
  return (
    <div className={cn("my-8 overflow-hidden rounded-xl border border-border bg-bg shadow-sm", className)}>
      <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-4 py-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-fg/10 text-fg">
          <Play className="h-3 w-3 fill-current" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-fg">{title}</h4>
          {description && (
            <p className="text-xs text-muted-fg">{description}</p>
          )}
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="text-[10px] font-medium uppercase tracking-wider text-muted-fg">Interactive Demo</span>
        </div>
      </div>
      <div className="relative min-h-[300px] w-full bg-muted/10 p-6 flex items-center justify-center">
        {children || (
          <div className="text-center text-sm text-muted-fg">
            Demo content placeholder
          </div>
        )}
      </div>
    </div>
  );
}
