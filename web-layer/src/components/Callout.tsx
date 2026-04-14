import { Info, AlertTriangle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutType = "info" | "warning" | "tip";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Callout({ type = "info", title, children, className }: CalloutProps) {
  const config = {
    info: {
      icon: Info,
      classes: "border-blue-500/20 bg-blue-500/5 text-blue-700 dark:text-blue-300",
      iconClasses: "text-blue-500",
    },
    warning: {
      icon: AlertTriangle,
      classes: "border-amber-500/20 bg-amber-500/5 text-amber-800 dark:text-amber-300",
      iconClasses: "text-amber-500",
    },
    tip: {
      icon: Lightbulb,
      classes: "border-emerald-500/20 bg-emerald-500/5 text-emerald-800 dark:text-emerald-300",
      iconClasses: "text-emerald-500",
    },
  };

  const { icon: Icon, classes, iconClasses } = config[type];

  return (
    <div className={cn("my-6 flex gap-3 rounded-lg border p-4", classes, className)}>
      <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", iconClasses)} />
      <div className="flex-1">
        {title && <h5 className="mb-1 font-medium leading-none tracking-tight">{title}</h5>}
        <div className="text-sm leading-relaxed opacity-90">
          {children}
        </div>
      </div>
    </div>
  );
}
