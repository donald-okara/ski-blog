import { ArticleCard } from "@/components/ArticleCard";
import { DemoEmbed } from "@/components/DemoEmbed";
import { Newsletter } from "@/components/Newsletter";

const ARTICLES = [
  {
    slug: "compose-state-hoisting",
    title: "The Mechanics of State Hoisting in Jetpack Compose",
    excerpt: "Understanding how unidirectional data flow translates to Compose's state management model, and why hoisting is more than just passing callbacks.",
    tags: ["Compose", "Architecture", "State"],
    readingTime: "8 min read",
    date: "Oct 24, 2023",
  },
  {
    slug: "kotlin-context-receivers",
    title: "Designing APIs with Context Receivers",
    excerpt: "A deep dive into how context receivers change API design in Kotlin, moving beyond extension functions to true contextual abstractions.",
    tags: ["Kotlin", "API Design"],
    readingTime: "12 min read",
    date: "Sep 15, 2023",
  },
  {
    slug: "custom-layouts-compose",
    title: "Building a Custom Flow Layout from Scratch",
    excerpt: "Step-by-step guide to the layout phase in Compose. We'll build a custom FlowRow layout that handles complex wrapping and alignment.",
    tags: ["Compose", "UI", "Layout"],
    readingTime: "15 min read",
    date: "Aug 02, 2023",
  },
];

export function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
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

      {/* Featured Concept */}
      <section className="mb-24">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-fg">Featured Concept</h2>
          <span className="text-xs font-medium text-muted-fg uppercase tracking-wider">Interactive Posts</span>
        </div>
        <DemoEmbed 
          title="Compose Recomposition Visualizer" 
          description="Interact with the UI to see exactly which scopes recompose."
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

      {/* Latest Articles */}
      <section id="articles" className="mb-24">
        <h2 className="mb-8 text-xl font-semibold tracking-tight text-fg">Latest Articles</h2>
        <div className="flex flex-col divide-y divide-border/50">
          {ARTICLES.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
