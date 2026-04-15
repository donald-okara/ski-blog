export interface PostMetadata {
  id: string;
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt?: string;
}

export interface Post extends PostMetadata {
  blocks: DocBlock[];
}

export type DocBlock =
  | { type: "H"; text: string }
  | { type: "P"; text: string }
  | { type: "Demo"; id: string }
  | { type: "Code"; code: string; language: string }
  | { type: "Callout"; calloutType: "info" | "warning" | "tip"; title?: string; text: string }
  | { type: "Presentation"; presentationType: "youtube" | "slides"; embedUrl: string; title: string };

export interface Playlist {
  slug: string;
  title: string;
  description: string;
  postSlugs: string[];
}

export interface MusicPlaylist {
  id: string;
  title: string;
  spotifyUrl: string;
}
