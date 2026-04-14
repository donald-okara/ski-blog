import { motion } from "motion/react";
import { ArticleCard } from "@/components/ArticleCard";
import { DemoEmbed } from "@/components/DemoEmbed";
import { Newsletter } from "@/components/Newsletter";
import { POSTS, FEATURED_POST } from "@/data/posts";
import { Search } from "lucide-react";

export function Home() {
  const hasPosts = POSTS.length > 0;
  const hasFeatured = !!FEATURED_POST;

  const isEmpty = !hasPosts && !hasFeatured;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-4xl px-6 py-12 md:py-20"
    >
      {/* Hero Section */}
      <section className="mb-20 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">
          ski blog
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-fg">
          A Kotlin-first engineering journal for Compose, systems, and UI thinking.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="#articles"
            className="inline-flex h-10 items-center justify-center rounded-md bg-fg px-6 text-sm font-medium text-bg transition-colors hover:bg-fg/90"
          >
            Read Articles
          </a>
        </div>
      </section>

      {isEmpty ? (
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
          {/* Featured Concept */}
          {hasFeatured && (
            <section className="mb-24">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold tracking-tight text-fg">Featured Concept</h2>
                <span className="text-xs font-medium text-muted-fg uppercase tracking-wider">Interactive Posts</span>
              </div>
              <DemoEmbed 
                title={FEATURED_POST.title} 
                description={FEATURED_POST.description}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="flex gap-2">
                    <div className="h-16 w-16 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center animate-pulse">
                      <span className="text-xs font-mono text-blue-600 dark:text-blue-400">Scope A</span>
                    </div>
                    <div className="h-16 w-16 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">Scope B</span>
                    </div>
                  </div>
                  <button className="rounded-md bg-fg/10 px-4 py-2 text-sm font-medium text-fg hover:bg-fg/20 transition-colors">
                    Trigger State Change
                  </button>
                </div>
              </DemoEmbed>
            </section>
          )}

          {/* Latest Articles */}
          {hasPosts && (
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
                    readingTime={post.readingTime}
                    date={post.date}
                  />
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {/* Newsletter */}
      <Newsletter />
    </motion.div>
  );
}
