import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";

const PLAYLIST_DATA = {
  "compose-internals": {
    title: "Jetpack Compose Internals",
    description: "A deep dive into the inner workings of Compose, from the compiler plugin to the layout phase. This series breaks down the magic behind the declarative UI framework.",
    articles: [
      {
        slug: "compose-state-hoisting",
        title: "The Mechanics of State Hoisting in Jetpack Compose",
        excerpt: "Understanding how unidirectional data flow translates to Compose's state management model, and why hoisting is more than just passing callbacks.",
        readingTime: "8 min read",
      },
      {
        slug: "custom-layouts-compose",
        title: "Building a Custom Flow Layout from Scratch",
        excerpt: "Step-by-step guide to the layout phase in Compose. We'll build a custom FlowRow layout that handles complex wrapping and alignment.",
        readingTime: "15 min read",
      },
      {
        slug: "compose-performance",
        title: "Gotchas in Compose Performance",
        excerpt: "Why your lists are lagging and how to fix them. A look into stability, deferring state reads, and the modifier chain.",
        readingTime: "12 min read",
      }
    ]
  },
  "kotlin-architecture": {
    title: "Modern Kotlin Architecture",
    description: "Patterns and practices for building scalable Android applications using modern Kotlin features and coroutines.",
    articles: [
      {
        slug: "kotlin-context-receivers",
        title: "Designing APIs with Context Receivers",
        excerpt: "A deep dive into how context receivers change API design in Kotlin, moving beyond extension functions to true contextual abstractions.",
        readingTime: "12 min read",
      }
    ]
  }
};

export function PlaylistDetail() {
  const { slug } = useParams();
  const playlist = PLAYLIST_DATA[slug as keyof typeof PLAYLIST_DATA];

  if (!playlist) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-fg">Playlist not found</h1>
        <Link to="/playlists" className="mt-4 inline-block text-muted-fg hover:text-fg">
          Return to playlists
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[700px] px-6 py-12 md:py-20">
      <Link 
        to="/playlists" 
        className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-muted-fg transition-colors hover:text-fg"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to playlists
      </Link>

      <header className="mb-16">
        <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-fg">
          <Play className="h-4 w-4" />
          Series
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl md:text-5xl leading-tight text-balance">
          {playlist.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-fg font-serif">
          {playlist.description}
        </p>
      </header>

      <div className="flex flex-col">
        {playlist.articles.map((article, index) => {
          const numberString = (index + 1).toString().padStart(2, '0');
          
          return (
            <div key={article.slug} className="group relative border-t border-border/50 py-10">
              {/* Oversized Number (Recipe 9 inspiration) */}
              <div className="absolute -left-4 top-6 z-0 font-serif text-[80px] font-bold leading-none text-muted/40 transition-colors group-hover:text-muted-fg/20 select-none pointer-events-none md:-left-12 md:text-[100px]">
                {numberString}
              </div>
              
              <div className="relative z-10 pl-12 md:pl-16">
                <div className="mb-3 flex items-center gap-x-4 text-xs text-muted-fg">
                  <span className="flex items-center gap-1">
                    <span className="h-1 w-1 rounded-full bg-muted-fg/50"></span>
                    {article.readingTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold leading-tight text-fg group-hover:text-fg/80 transition-colors">
                  <Link to={`/post/${article.slug}`}>
                    <span className="absolute inset-0" />
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-fg font-serif">
                  {article.excerpt}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
