import { FeaturedContent } from "@/types/blog";

export const FEATURED_CONTENT_ID: string | null = "holiday-sale";

export const FEATURED_CONTENT: FeaturedContent[] = [
  {
    id: "upcoming-workshop",
    title: "Advanced Compose Workshop",
    description: "Join our upcoming deep-dive into performance optimization and custom layouts. Early bird tickets available now!",
    image: "https://picsum.photos/200",
    link: "https://example.com/workshop",
    label: "Reserve Seat",
    gradientFrom: "#3b82f6", // blue-500
    gradientTo: "#10b981"    // emerald-500
  },
  {
    id: "holiday-sale",
    title: "Holiday Course Sale",
    description: "Get 50% off on all our premium Kotlin and Compose courses until the end of the year.",
    image: "https://picsum.photos/200",
    link: "https://example.com/sale",
    gradientFrom: "#f97316", // orange-500
    gradientTo: "#f43f5e"    // rose-500
  }
];
