interface SpotifyPlaylistProps {
  title: string;
  spotifyUrl: string;
}

export function SpotifyPlaylist({ title, spotifyUrl }: SpotifyPlaylistProps) {
  return (
    <div className="rounded-2xl border border-border bg-bg p-4 shadow-sm">
      <h3 className="mb-4 px-2 text-sm font-medium text-fg">{title}</h3>
      <iframe 
        style={{ borderRadius: '12px' }} 
        src={spotifyUrl} 
        width="100%" 
        height="152" 
        frameBorder="0" 
        allowFullScreen 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        title={title}
      ></iframe>
    </div>
  );
}
