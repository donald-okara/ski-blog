import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language: string;
  className?: string;
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("group relative my-6 overflow-hidden rounded-lg border border-border bg-code-bg", className)}>
      <div className="flex items-center justify-between border-b border-border/50 bg-muted/30 px-4 py-2">
        <span className="text-xs font-medium text-muted-fg uppercase tracking-wider">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-fg transition-colors hover:bg-muted hover:text-fg focus:outline-none focus:ring-2 focus:ring-fg"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
      </div>
      <div className="overflow-x-auto p-4">
        <pre className="text-sm leading-relaxed text-fg font-mono">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
