import { Post, PostMetadata, DocBlock } from "@/types/blog";
import { SLUGS } from "@/constants/slugs";

export const customLayoutsPostMetadata: PostMetadata = {
  id: "3",
  slug: SLUGS.CUSTOM_LAYOUTS_COMPOSE,
  title: "Building a Custom Flow Layout from Scratch",
  date: "Aug 02, 2023",
  tags: ["Compose", "UI", "Layout"],
  excerpt: "Step-by-step guide to the layout phase in Compose. We'll build a custom FlowRow layout that handles complex wrapping and alignment.",
};

export const customLayoutsPostBlocks: DocBlock[] = [
  { type: "P", text: "Jetpack Compose provides a set of standard layouts like Row and Column, but sometimes you need something more specific. A FlowRow layout, which wraps children to the next line when they overflow the current one, is a classic example of a custom layout." },
  { type: "H", text: "The Measure/Layout Phase" },
  { type: "P", text: "To create a custom layout, you use the Layout composable. This requires you to provide a measure policy that defines how children are measured and placed." },
  { 
    type: "Code", 
    language: "kotlin", 
    code: `@Composable\nfun FlowRow(modifier: Modifier = Modifier, content: @Composable () -> Unit) {\n    Layout(content = content, modifier = modifier) { measurables, constraints ->\n        // Measurement and placement logic goes here\n    }\n}` 
  }
];

export const customLayoutsPost: Post = {
  ...customLayoutsPostMetadata,
  blocks: customLayoutsPostBlocks
};
