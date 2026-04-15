import { useParams, Link } from "react-router-dom";
import { ArticleCard } from "@/components/ArticleCard";
import { ArrowLeft, Github, Linkedin, Twitter, Globe, Smartphone } from "lucide-react";
import { SLUGS } from "@/constants/slugs";

// Mock data for the author
const AUTHOR = {
  username: "alexdev",
  name: "Alex Developer",
  avatar: "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?q=80&w=800&auto=format&fit=crop",
  oneLiner: "Android Engineer & UI Enthusiast",
  description: "Alex is a software engineer specializing in Android, Kotlin, and Jetpack Compose. With over 8 years of experience building mobile applications, they focus on creating intuitive, high-performance user interfaces and sharing knowledge through deep technical writing.",
  socials: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    site: "https://example.com",
    playstore: "https://play.google.com/store/apps"
  }
};

// Mock data for articles written by the author
const AUTHOR_ARTICLES = [
  {
    slug: SLUGS.COMPOSE_STATE_HOISTING,
    title: "The Mechanics of State Hoisting in Jetpack Compose",
    excerpt: "Understanding how unidirectional data flow translates to Compose's state management model, and why hoisting is more than just passing callbacks.",
    tags: ["Compose", "Architecture", "State"],
    readingTime: "8 min read",
    date: "Oct 24, 2023",
  },
  {
    slug: SLUGS.CUSTOM_LAYOUTS_COMPOSE,
    title: "Building a Custom Flow Layout from Scratch",
    excerpt: "Step-by-step guide to the layout phase in Compose. We'll build a custom FlowRow layout that handles complex wrapping and alignment.",
    tags: ["Compose", "UI", "Layout"],
    readingTime: "15 min read",
    date: "Aug 02, 2023",
  },
];

export function AuthorProfile() {
  const { username } = useParams();

  // In a real app, you would fetch the author data based on the username.
  // For this demo, we'll just use the mock data.

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      <Link 
        to="/" 
        className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-muted-fg transition-colors hover:text-fg"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to articles
      </Link>

      {/* Author Details Section */}
      <section className="mb-16 flex flex-col items-start gap-8 md:flex-row md:items-start">
        <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border border-border bg-muted/30">
          <img 
            src={AUTHOR.avatar} 
            alt={AUTHOR.name} 
            className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            {AUTHOR.name}
          </h1>
          <p className="mt-2 text-lg font-medium text-muted-fg">
            {AUTHOR.oneLiner}
          </p>
          <p className="mt-4 max-w-2xl font-serif text-base leading-relaxed text-fg/90">
            {AUTHOR.description}
          </p>
          <div className="mt-6 flex items-center gap-4">
            {AUTHOR.socials.twitter && (
              <a href={AUTHOR.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-fg transition-colors hover:text-fg" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {AUTHOR.socials.github && (
              <a href={AUTHOR.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted-fg transition-colors hover:text-fg" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            )}
            {AUTHOR.socials.linkedin && (
              <a href={AUTHOR.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-fg transition-colors hover:text-fg" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {AUTHOR.socials.site && (
              <a href={AUTHOR.socials.site} target="_blank" rel="noopener noreferrer" className="text-muted-fg transition-colors hover:text-fg" aria-label="Personal Website">
                <Globe className="h-5 w-5" />
              </a>
            )}
            {AUTHOR.socials.playstore && (
              <a href={AUTHOR.socials.playstore} target="_blank" rel="noopener noreferrer" className="text-muted-fg transition-colors hover:text-fg" aria-label="Play Store">
                <Smartphone className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </section>

      <hr className="mb-12 border-border/50" />

      {/* Author's Articles Section */}
      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-fg">
            Articles by {AUTHOR.name}
          </h2>
          <span className="text-xs font-medium uppercase tracking-wider text-muted-fg">
            {AUTHOR_ARTICLES.length} Published
          </span>
        </div>
        
        <div className="flex flex-col divide-y divide-border/50">
          {AUTHOR_ARTICLES.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </section>
    </div>
  );
}
