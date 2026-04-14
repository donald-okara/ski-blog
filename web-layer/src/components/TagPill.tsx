import { cn } from "@/lib/utils";

interface TagPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function TagPill({ children, className, ...props }: TagPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-fg transition-colors hover:bg-border hover:text-fg cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
