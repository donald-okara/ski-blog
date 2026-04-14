import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { TagPill } from "@/components/TagPill";
import { CodeBlock } from "@/components/CodeBlock";
import { DemoEmbed } from "@/components/DemoEmbed";
import { Callout } from "@/components/Callout";
import { PresentationEmbed } from "@/components/PresentationEmbed";
import { ArrowLeft } from "lucide-react";
import { Post, DocBlock } from "@/types/blog";
import { POSTS } from "@/data/posts";

export function BlogPost() {
  const { slug } = useParams();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const foundPost = POSTS.find(p => p.slug === slug);
    setPost(foundPost || null);
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
            <time dateTime={post.date}>{post.date}</time>
            <span className="flex items-center gap-1">
              <span className="h-1 w-1 rounded-full bg-muted-fg/50"></span>
              {post.readingTime}
            </span>
          </div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-fg sm:text-4xl md:text-5xl leading-tight text-balance">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            {post.tags.map(tag => (
              <TagPill key={tag}>{tag}</TagPill>
            ))}
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
            {POSTS.filter(p => p.slug !== slug).slice(0, 2).map(relatedPost => (
              <Link 
                key={relatedPost.slug}
                to={`/post/${relatedPost.slug}`} 
                className="group block p-5 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 transition-colors"
              >
                <div className="text-sm font-medium text-fg group-hover:text-fg/80 transition-colors mb-2 text-balance">
                  {relatedPost.title}
                </div>
                <div className="flex items-center gap-2">
                  {relatedPost.tags.slice(0, 2).map(tag => (
                    <TagPill key={tag}>{tag}</TagPill>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
