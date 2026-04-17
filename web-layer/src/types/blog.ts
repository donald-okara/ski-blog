export interface Social {
  id: string;
  name: string;
  url: string;
  icon: "twitter" | "github" | "linkedin" | "site" | "playstore" | "globe" | "smartphone";
}

export interface Author {
  id: string;
  slug: string;
  name: string;
  bio: string;
  description: string;
  avatar: string;
  socials: Social[];
}

export interface PostMetadata {
  id: string;
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt?: string;
  authorIds: string[];
}

export interface Post extends PostMetadata {
  blocks: DocBlock[];
}

export interface FeaturedContent {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  label?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export type DocBlock =
  | { type: "H"; text: string }
  | { type: "P"; text: string }
  | { type: "Demo"; id: string; url?: string; label?: string }
  | { type: "Code"; code: string; language: string }
  | { type: "Callout"; calloutType: "info" | "warning" | "tip"; title?: string; text: string }
  | { type: "Presentation"; presentationType: "youtube" | "slides"; embedUrl: string; title: string }
  | { type: "Image"; src: string; alt: string; className?: string; grayscale?: boolean; objectPosition?: string; width?: string | number; height?: string | number }
  | { type: "Tags"; tags: string[] }
  | { type: "Row"; items: { block: DocBlock; ratio: number }[] }
  | { type: "Featured"; id: string; hero?: boolean };

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
