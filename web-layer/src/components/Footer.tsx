import { Link } from "react-router-dom";
import { Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24 py-12">
      <div className="mx-auto max-w-4xl px-6 flex flex-col gap-12">
        
        {/* Buy me a coffee section */}
        <div className="flex flex-col items-center justify-center text-center gap-4 rounded-2xl bg-muted/10 p-8 border border-border/50">
          <p className="text-sm font-serif text-muted-fg italic">
            "Every cup supports coffee farmers… and a slightly sleep-deprived dev"
          </p>
          <a 
            href="https://buymeacoffee.com/donaldokara"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:scale-105 active:scale-95"
          >
            <Coffee className="h-4 w-4" />
            Buy me a coffee
          </a>
        </div>

        {/* Bottom links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-sm font-semibold text-fg">ski blog</span>
            <span className="text-xs text-muted-fg">
              A Kotlin-first engineering journal.
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-fg">
            <a href="https://www.linkedin.com/in/donald-isoe-a21310255/" target="_blank" className="hover:text-fg transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/donald-okara" target="_blank" className="hover:text-fg transition-colors">
              GitHub
            </a>
          </div>
          <div className="text-xs text-muted-fg">
            built with ski system
          </div>
        </div>
      </div>
    </footer>
  );
}
