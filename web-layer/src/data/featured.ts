import { FeaturedContent } from "@/types/blog";

export const FEATURED_CONTENT_ID: string | null = "upcoming-workshop";

export const FEATURED_CONTENT: FeaturedContent[] = [
  {
    id: "upcoming-workshop",
    title: "Advanced Compose Workshop",
    description: "Join our upcoming deep-dive into performance optimization and custom layouts. Early bird tickets available now!",
    image: "https://picsum.photos/200"
  },
  {
    id: "holiday-sale",
    title: "Holiday Course Sale",
    description: "Get 50% off on all our premium Kotlin and Compose courses until the end of the year.",
    image: "https://picsum.photos/200"
  }
];
