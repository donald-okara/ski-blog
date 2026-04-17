import { Post, PostMetadata, DocBlock } from "@/types/blog";
import { SLUGS } from "@/constants/slugs";

export const stateHoistingPostMetadata: PostMetadata = {
  id: "1",
  slug: SLUGS.COMPOSE_STATE_HOISTING,
  title: "The Mechanics of State Hoisting in Jetpack Compose",
  date: "Oct 24, 2023",
  tags: ["Compose", "Architecture", "State"],
  excerpt: "Understanding how unidirectional data flow translates to Compose's state management model, and why hoisting is more than just passing callbacks.",
  authorIds: ["donald", "alexdev"],
};

export const stateHoistingPostBlocks: DocBlock[] = [
  { type: "P", text: "State hoisting is a pattern of moving state to a component's caller to make a component stateless. When applied to Jetpack Compose, this pattern often means introducing two parameters to the composable:" },
  { type: "H", text: "Why Hoist State?" },
  { 
    type: "Callout", 
    calloutType: "tip", 
    title: "Single Source of Truth", 
    text: "By moving state to the caller, we ensure there is only one source of truth for that state. This helps prevent bugs where multiple components get out of sync." 
  },
  { 
    type: "Code", 
    language: "kotlin", 
    code: `@Composable\nfun StatefulCounter() {\n    var count by remember { mutableStateOf(0) }\n    \n    Button(onClick = { count++ }) {\n        Text("Count: $count")\n    }\n}` 
  },
  { type: "H", text: "Interactive Example" },
  { type: "Demo", id: "state-hoisting-demo", label: "Hoist demo", url: "https://demo-template-nine.vercel.app/?text=Are_you_sure?" },
  { 
    type: "Presentation", 
    presentationType: "youtube", 
    title: "The Mechanics of State Hoisting - Droidcon", 
    embedUrl: "https://www.youtube.com/embed/SMOhl9RK0BA" 
  }
];

export const stateHoistingPost: Post = {
  ...stateHoistingPostMetadata,
  blocks: stateHoistingPostBlocks
};
