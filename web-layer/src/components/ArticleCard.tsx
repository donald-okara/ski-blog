import { Link } from "react-router-dom";
import { TagPill } from "./TagPill";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
  date: string;
  slug: string;
}

export function ArticleCard({
  title,
  excerpt,
  tags,
  readingTime,
  date,
  slug,
}: ArticleCardProps) {
  return (
    <article className="group relative flex flex-col items-start justify-between py-6 transition-all">
      <div className="flex items-center gap-x-4 text-xs text-muted-fg mb-3">
        <time dateTime={date}>{date}</time>
        <span className="flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-muted-fg/50"></span>
          {readingTime}
        </span>
      </div>
      <div className="group relative">
        <h3 className="mt-1 text-xl font-semibold leading-tight text-fg group-hover:text-fg/80 transition-colors">
          <Link to={`/post/${slug}`}>
            <span className="absolute inset-0" />
            {title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-fg">
          {excerpt}
        </p>
      </div>
      <div className="relative mt-4 flex items-center gap-x-2">
        {tags.map((tag) => (
          <TagPill key={tag} className="relative z-10">
            {tag}
          </TagPill>
        ))}
      </div>
    </article>
  );
}
