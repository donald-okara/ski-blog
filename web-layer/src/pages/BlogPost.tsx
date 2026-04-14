import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { TagPill } from "@/components/TagPill";
import { CodeBlock } from "@/components/CodeBlock";
import { DemoEmbed } from "@/components/DemoEmbed";
import { Callout } from "@/components/Callout";
import { PresentationEmbed } from "@/components/PresentationEmbed";
import { ArrowLeft } from "lucide-react";
import { Post, DocBlock } from "@/types/blog";

export function BlogPost() {
  const { slug } = useParams();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    // In a real app, you would fetch this data from your core module or an API
    // For now, we'll simulate loading a post that matches the structure
    const mockPost: Post = {
      id: slug || "1",
      title: "The Mechanics of State Hoisting in Jetpack Compose",
      blocks: [
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
        { type: "Demo", id: "state-hoisting-demo" },
        { 
          type: "Presentation", 
          presentationType: "youtube", 
          title: "The Mechanics of State Hoisting - Droidcon", 
          embedUrl: "https://www.youtube.com/embed/SMOhl9RK0BA" 
        }
      ]
    };

    setPost(mockPost);
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderBlock = (block: DocBlock, index: number) => {
    switch (block.type) {
      case "H":
        return <h2 key={index} className="text-2xl font-semibold mt-12 mb-6 text-fg">{block.text}</h2>;
      case "P":
        return <p key={index} className="mb-6 text-fg/90 leading-relaxed">{block.text}</p>;
      case "Code":
        return <CodeBlock key={index} language={block.language} code={block.code} />;
      case "Callout":
        return (
          <Callout key={index} type={block.calloutType} title={block.title}>
            {block.text}
          </Callout>
        );
      case "Demo":
        return (
          <DemoEmbed key={index} title="Interactive Demo">
             <div className="text-center text-sm text-muted-fg">Demo {block.id} content</div>
          </DemoEmbed>
        );
      case "Presentation":
        return (
          <PresentationEmbed 
            key={index} 
            type={block.presentationType} 
            title={block.title} 
            embedUrl={block.embedUrl} 
          />
        );
      default:
        return null;
    }
  };

  if (!post) return <div className="p-12 text-center">Loading...</div>;

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
        <div 
          className="h-full bg-fg transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <article className="mx-auto max-w-[700px] px-6 py-12 md:py-20">
        <Link 
          to="/" 
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-fg transition-colors hover:text-fg"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to articles
        </Link>

        {/* Article Header */}
        <header className="mb-14">
          <div className="mb-6 flex items-center gap-x-4 text-sm text-muted-fg">
            <time dateTime="2023-10-24">Oct 24, 2023</time>
            <span className="flex items-center gap-1">
              <span className="h-1 w-1 rounded-full bg-muted-fg/50"></span>
              8 min read
            </span>
          </div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-fg sm:text-4xl md:text-5xl leading-tight text-balance">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            <TagPill>Compose</TagPill>
            <TagPill>Architecture</TagPill>
            <TagPill>State</TagPill>
          </div>
        </header>

        {/* Content Body */}
        <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-sans prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-fg prose-a:underline-offset-4 hover:prose-a:text-fg/80 prose-p:leading-relaxed prose-p:text-fg/90 font-serif">
          {post.blocks.map((block, index) => renderBlock(block, index))}
        </div>

        {/* Footer / Related Articles */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold tracking-tight text-fg mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link to="/post/custom-layouts-compose" className="group block p-5 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 transition-colors">
              <div className="text-sm font-medium text-fg group-hover:text-fg/80 transition-colors mb-2">
                Building a Custom Flow Layout from Scratch
              </div>
              <div className="flex items-center gap-2">
                <TagPill>Compose</TagPill>
                <TagPill>UI</TagPill>
              </div>
            </Link>
            <Link to="/post/compose-performance" className="group block p-5 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 transition-colors">
              <div className="text-sm font-medium text-fg group-hover:text-fg/80 transition-colors mb-2">
                Gotchas in Compose Performance
              </div>
              <div className="flex items-center gap-2">
                <TagPill>Compose</TagPill>
                <TagPill>Performance</TagPill>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
