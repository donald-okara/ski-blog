import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";
import { ARTICLE_PLAYLISTS } from "@/data/playlists";
import { POSTS } from "@/data/posts";

export function PlaylistDetail() {
  const { slug } = useParams();
  const playlist = ARTICLE_PLAYLISTS.find(p => p.slug === slug);

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

  const playlistPosts = playlist.postSlugs
    .map(postSlug => POSTS.find(p => p.slug === postSlug))
    .filter((post): post is typeof POSTS[0] => !!post);

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
        {playlistPosts.map((post, index) => {
          const numberString = (index + 1).toString().padStart(2, '0');
          
          return (
            <div key={post.slug} className="group relative border-t border-border/50 py-10">
              {/* Oversized Number (Recipe 9 inspiration) */}
              <div className="absolute -left-4 top-6 z-0 font-serif text-[80px] font-bold leading-none text-muted/40 transition-colors group-hover:text-muted-fg/20 select-none pointer-events-none md:-left-12 md:text-[100px]">
                {numberString}
              </div>
              
              <div className="relative z-10 pl-12 md:pl-16">
                <div className="mb-3 flex items-center gap-x-4 text-xs text-muted-fg">
                  <span className="flex items-center gap-1">
                    <span className="h-1 w-1 rounded-full bg-muted-fg/50"></span>
                    {post.readingTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold leading-tight text-fg group-hover:text-fg/80 transition-colors">
                  <Link to={`/post/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-fg font-serif">
                  {post.excerpt}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
