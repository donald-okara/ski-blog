export interface Post {
  id: string;
  title: string;
  blocks: DocBlock[];
}

export type DocBlock =
  | { type: "H"; text: string }
  | { type: "P"; text: string }
  | { type: "Demo"; id: string }
  | { type: "Code"; code: string; language: string }
  | { type: "Callout"; calloutType: "info" | "warning" | "tip"; title?: string; text: string }
  | { type: "Presentation"; presentationType: "youtube" | "slides"; embedUrl: string; title: string };
