import { Link } from "react-router-dom";
import { Author } from "@/types/blog";

interface AuthorSectionProps {
  authors: Author[];
}

export function AuthorSection({ authors }: AuthorSectionProps) {
  return (
    <div className="mt-20 border-t border-border pt-12">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-fg mb-8">
        {authors.length > 1 ? "Authors" : "About the Author"}
      </h3>

      <div className="flex flex-col gap-10">
        {authors.map((author) => (
          <div key={author.id} className="flex flex-col sm:flex-row items-start gap-6">
            <Link to={`/author/${author.slug}`} className="shrink-0">
              <div className="h-20 w-20 overflow-hidden rounded-full border border-border bg-muted/30">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
              </div>
            </Link>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <Link
                  to={`/author/${author.slug}`}
                  className="text-lg font-bold text-fg hover:text-fg/80 transition-colors"
                >
                  {author.name}
                </Link>
              </div>
              <p className="text-muted-fg leading-relaxed">
                {author.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
