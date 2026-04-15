import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { TagPill } from "@/components/TagPill";
import { PageHeader } from "@/components/PageHeader";
import { ContentRenderer } from "@/components/ContentRenderer";
import { AuthorSection } from "@/components/AuthorSection";
import { ArrowLeft } from "lucide-react";
import { Post } from "@/types/blog";
import { POSTS } from "@/data/posts";
import { AUTHORS } from "@/data/authors";
import { calculateReadingTime } from "@/lib/utils";

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

  if (!post) return <div className="p-12 text-center">Loading...</div>;

  const postAuthors = AUTHORS.filter(a => post.authorIds.includes(a.id));

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
        <div 
          className="h-full bg-fg transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <article 
        className="mx-auto max-w-[700px] px-6 py-12 md:py-20"
      >
        <Link 
          to="/" 
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-fg transition-colors hover:text-fg"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to articles
        </Link>

        <PageHeader 
          title={post.title} 
          className="mb-14"
          reverse
        >
          <div className="flex items-center gap-x-4 text-sm text-muted-fg">
            <time dateTime={post.date}>{post.date}</time>
            <span className="flex items-center gap-1">
              <span className="h-1 w-1 rounded-full bg-muted-fg/50"></span>
              {calculateReadingTime(post)}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {post.tags.map(tag => (
              <TagPill key={tag}>{tag}</TagPill>
            ))}
          </div>
        </PageHeader>

        {/* Content Body */}
        <ContentRenderer blocks={post.blocks} />

        {/* Author Section */}
        {postAuthors.length > 0 && <AuthorSection authors={postAuthors} />}

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
