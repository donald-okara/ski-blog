import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  maxWidth?: string;
  serif?: boolean;
  reverse?: boolean;
}

export function PageHeader({ 
  title, 
  description, 
  children, 
  className,
  maxWidth = "max-w-2xl",
  serif = false,
  reverse = false
}: PageHeaderProps) {
  return (
    <header className={cn("mb-16", maxWidth, className)}>
      {reverse && children && (
        <div className="mb-6 flex flex-wrap items-center gap-4">
          {children}
        </div>
      )}
      <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl md:text-5xl leading-tight">
        {title}
      </h1>
      {description && (
        <p className={cn(
          "mt-6 text-lg leading-relaxed text-muted-fg",
          serif && "font-serif"
        )}>
          {description}
        </p>
      )}
      {!reverse && children && (
        <div className="mt-8">
          {children}
        </div>
      )}
    </header>
  );
}
