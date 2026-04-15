import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Post } from "@/types/blog";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateReadingTime(post: Post): string {
  const wordsPerMinute = 200;
  let wordCount = 0;

  post.blocks.forEach((block) => {
    switch (block.type) {
      case "P":
      case "H":
      case "Callout":
        wordCount += block.text.split(/\s+/).filter((w) => w.length > 0).length;
        break;
      case "Code":
        // Code is harder to estimate, but let's count it partially or just by lines
        wordCount += block.code.split(/\s+/).filter((w) => w.length > 0).length;
        break;
      case "Presentation":
        wordCount += block.title.split(/\s+/).filter((w) => w.length > 0).length;
        break;
    }
  });

  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}
