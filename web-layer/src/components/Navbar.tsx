import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-lg font-bold tracking-tight text-fg">
            ski blog
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-fg">
            <Link to="/" className="transition-colors hover:text-fg">
              Articles
            </Link>
            <Link to="/playlists" className="transition-colors hover:text-fg">
              Playlists
            </Link>
            <Link to="/about" className="transition-colors hover:text-fg">
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-fg transition-colors hover:bg-muted hover:text-fg"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-fg px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-fg/90">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
}
