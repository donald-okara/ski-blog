import { Post, PostMetadata, DocBlock } from "@/types/blog";
import { SLUGS } from "@/constants/slugs";

export const contextReceiversPostMetadata: PostMetadata = {
  id: "2",
  slug: SLUGS.KOTLIN_CONTEXT_RECEIVERS,
  title: "Designing APIs with Context Receivers",
  date: "Sep 15, 2023",
  tags: ["Kotlin", "API Design"],
  excerpt: "A deep dive into how context receivers change API design in Kotlin, moving beyond extension functions to true contextual abstractions.",
};

export const contextReceiversPostBlocks: DocBlock[] = [
  { type: "P", text: "Kotlin context receivers are a powerful new feature that allows you to declare that a function requires one or more contexts to be present in its scope. This goes beyond simple extension functions and provides a way to express complex dependencies cleanly." },
  { type: "H", text: "The Problem with Extension Functions" },
  { type: "P", text: "While extension functions are great, they only allow you to have a single receiver. If your function needs access to both a JSON serializer and a logger, you'd often have to pass them as parameters or use other workarounds." },
  { 
    type: "Code", 
    language: "kotlin", 
    code: `context(JsonSerializer, Logger)\nfun User.save() {\n    val json = serialize(this)\n    log("Saving user: $json")\n    // ...\n}` 
  }
];

export const contextReceiversPost: Post = {
  ...contextReceiversPostMetadata,
  blocks: contextReceiversPostBlocks
};
