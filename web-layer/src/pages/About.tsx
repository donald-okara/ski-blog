import { PageHeader } from "@/components/PageHeader";
import { ContentRenderer } from "@/components/ContentRenderer";
import { DocBlock } from "@/types/blog";

const ABOUT_CONTENT: DocBlock[] = [
  {
    type: "Image",
    src: "/profiles/donald.jpg",
    alt: "Don smelling what The Rock is cooking",
    className: "h-[400px]",
    grayscale: true
  },
  {
    type: "P",
    text: "Hello Friend, I am *Donald*." +
        " I am a professional spammer of `Command + Click` as well as a lover of everything new. I am also a full time Android Engineer ( hopefully still as you read this ) and the chief editor of the [Kotlin Kenya](https://medium.com/kotlinkenya-android254) Medium publication." +
        " Welcome to my digital garden."
  },
  {
    type: "Tags",
    tags: ["Android", "Kotlin", "Jetpack Compose", "System Design", "UI/UX"]
  }
];

export function About() {
  return (
    <div className="mx-auto max-w-[700px] px-6 py-12 md:py-20">
      <PageHeader title="About Me" />
      <ContentRenderer blocks={ABOUT_CONTENT} />
    </div>
  );
}
