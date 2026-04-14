import { Playlist, MusicPlaylist } from "@/types/blog";

export const ARTICLE_PLAYLISTS: Playlist[] = [
  {
    slug: "compose-internals",
    title: "Jetpack Compose Internals",
    description: "A deep dive into the inner workings of Compose, from the compiler plugin to the layout phase. Best read in order.",
    postSlugs: [
      "compose-state-hoisting",
      "custom-layouts-compose",
      "compose-performance"
    ],
  },
  {
    slug: "kotlin-architecture",
    title: "Modern Kotlin Architecture",
    description: "Patterns and practices for building scalable Android applications using modern Kotlin features and coroutines.",
    postSlugs: [
      "kotlin-context-receivers"
    ],
  }
];

export const MUSIC_PLAYLISTS: MusicPlaylist[] = [
  {
    id: "af_soul",
    title: "Afro Pink Soul",
    spotifyUrl: "https://open.spotify.com/embed/playlist/5BChSWyyyiGr6jQgrAOkk9?utm_source=generator&theme=0"
  },
  {
    id: "funky_drummer",
    title: "Funky Drummer Boy",
    spotifyUrl: "https://open.spotify.com/embed/playlist/1IBq1qHDSn6r2LKM8JeAvn?utm_source=generator&theme=0"
  }
];
