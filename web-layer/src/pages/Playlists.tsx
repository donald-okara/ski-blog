import { Link } from "react-router-dom";
import { BookOpen, Headphones } from "lucide-react";

const ARTICLE_PLAYLISTS = [
  {
    slug: "compose-internals",
    title: "Jetpack Compose Internals",
    description: "A deep dive into the inner workings of Compose, from the compiler plugin to the layout phase. Best read in order.",
    articleCount: 4,
  },
  {
    slug: "kotlin-architecture",
    title: "Modern Kotlin Architecture",
    description: "Patterns and practices for building scalable Android applications using modern Kotlin features and coroutines.",
    articleCount: 3,
  }
];

export function Playlists() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      <header className="mb-16 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
          Playlists
        </h1>
        <p className="mt-4 text-lg text-muted-fg">
          Curated collections of articles designed to be read in sequence, plus some tracks to keep you in the flow state.
        </p>
      </header>

      {/* Article Playlists */}
      <section className="mb-20">
        <div className="mb-8 flex items-center gap-2 border-b border-border/50 pb-4">
          <BookOpen className="h-5 w-5 text-muted-fg" />
          <h2 className="text-xl font-semibold tracking-tight text-fg">Learning Tracks</h2>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2">
          {ARTICLE_PLAYLISTS.map((playlist) => (
            <Link 
              key={playlist.slug}
              to={`/playlist/${playlist.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-muted/10 p-6 transition-all hover:bg-muted/30 hover:shadow-sm"
            >
              <div>
                <h3 className="text-lg font-semibold text-fg group-hover:text-fg/80 transition-colors">
                  {playlist.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-fg">
                  {playlist.description}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-fg">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-fg/10 text-fg">
                  {playlist.articleCount}
                </span>
                Articles
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Music Playlists */}
      <section>
        <div className="mb-8 flex items-center gap-2 border-b border-border/50 pb-4">
          <Headphones className="h-5 w-5 text-muted-fg" />
          <h2 className="text-xl font-semibold tracking-tight text-fg">Coding Vibes</h2>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-bg p-4 shadow-sm">
            <h3 className="mb-4 px-2 text-sm font-medium text-fg">Deep Focus / Lofi</h3>
            <iframe 
              style={{ borderRadius: '12px' }} 
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator&theme=0" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Lofi Beats"
            ></iframe>
          </div>
          
          <div className="rounded-2xl border border-border bg-bg p-4 shadow-sm">
            <h3 className="mb-4 px-2 text-sm font-medium text-fg">Synthwave / Cyberpunk</h3>
            <iframe 
              style={{ borderRadius: '12px' }} 
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdLEN7aqioJC?utm_source=generator&theme=0" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Synthwave Beats"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
