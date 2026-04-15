import { Link } from "react-router-dom";
import { BookOpen, Headphones } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ARTICLE_PLAYLISTS, MUSIC_PLAYLISTS } from "@/data/playlists";
import { SpotifyPlaylist } from "@/components/SpotifyPlaylist";

export function Playlists() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      <PageHeader 
        title="Playlists" 
        description="Curated collections of articles designed to be read in sequence, plus some tracks to keep you in the flow state."
      />

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
                  {playlist.postSlugs.length}
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
          {MUSIC_PLAYLISTS.map((playlist) => (
            <SpotifyPlaylist 
              key={playlist.id}
              title={playlist.title}
              spotifyUrl={playlist.spotifyUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
