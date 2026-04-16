import { motion } from "motion/react";
import { ArticleCard } from "@/components/ArticleCard";
import { Newsletter } from "@/components/Newsletter";
import { PageHeader } from "@/components/PageHeader";
import { FeaturedBlock } from "@/components/FeaturedBlock";
import { POSTS } from "@/data/posts";
import { FEATURED_CONTENT_ID } from "@/data/featured";
import { Search } from "lucide-react";
import { calculateReadingTime } from "@/lib/utils";

export function Home() {
  const hasPosts = POSTS.length > 0;

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20"
    >
      {/* Hero Section */}
      <PageHeader 
        title="ski blog" 
        description="A Kotlin-first engineering journal for Compose, systems, and UI thinking."
        className="mb-20"
      >
        <div className="flex items-center gap-4">
          <a
            href="#articles"
            className="inline-flex h-10 items-center justify-center rounded-md bg-fg px-6 text-sm font-medium text-bg transition-colors hover:bg-fg/90"
          >
            Read Articles
          </a>
        </div>
      </PageHeader>

      {/* Featured Concept - Hero Style */}
      <section className="mb-24">
        <FeaturedBlock id={FEATURED_CONTENT_ID} hero={true} />
      </section>

      {!hasPosts ? (
        <section className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-border rounded-2xl bg-muted/5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted/20 text-muted-fg mb-4">
            <Search className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-semibold text-fg">No content found</h2>
          <p className="mt-2 text-muted-fg max-w-xs">
            We haven't published any articles yet. Check back soon for deep dives into Kotlin and Compose.
          </p>
        </section>
      ) : (
        <>
          {/* Latest Articles */}
          <section id="articles" className="mb-24">
            <h2 className="mb-8 text-xl font-semibold tracking-tight text-fg">Latest Articles</h2>
            <div className="flex flex-col divide-y divide-border/50">
              {POSTS.map((post) => (
                <ArticleCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt || ""}
                  tags={post.tags}
                  readingTime={calculateReadingTime(post)}
                  date={post.date}
                />
              ))}
            </div>
          </section>
        </>
      )}

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
