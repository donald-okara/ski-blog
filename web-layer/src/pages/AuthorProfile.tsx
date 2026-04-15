import {useParams, Link} from "react-router-dom";
import {ArticleCard} from "@/components/ArticleCard";
import {PageHeader} from "@/components/PageHeader";
import {ArrowLeft, Github, Linkedin, Twitter, Globe, Smartphone} from "lucide-react";
import {POSTS} from "@/data/posts";
import {AUTHORS} from "@/data/authors";
import {calculateReadingTime} from "@/lib/utils";

const ICON_MAP = {
    twitter: Twitter,
    github: Github,
    linkedin: Linkedin,
    site: Globe,
    playstore: Smartphone,
    globe: Globe,
    smartphone: Smartphone,
};

export function AuthorProfile() {
    const {username} = useParams();
    const author = AUTHORS.find(a => a.slug === username);

    if (!author) {
        return (
            <div className="mx-auto max-w-4xl px-6 py-20 text-center">
                <h1 className="text-2xl font-bold text-fg">Author not found</h1>
                <Link to="/" className="mt-4 inline-block text-muted-fg hover:text-fg">
                    Return to home
                </Link>
            </div>
        );
    }

    const authorArticles = POSTS.filter(p => p.authorIds.includes(author.id));

    return (
        <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
            <Link
                to="/"
                className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-muted-fg transition-colors hover:text-fg"
            >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1"/>
                Back to articles
            </Link>

            {/* Author Details Section */}
            <PageHeader
                title={author.name}
                description={author.description}
                className="mb-16"
                maxWidth="max-w-none"
                serif
                reverse
            >
                <div className="flex flex-col items-start gap-8 md:flex-row md:items-start w-full">
                    <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border border-border bg-muted/30">
                        <img
                            src={author.avatar}
                            alt={author.name}
                            className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="mt-6 mb-6 flex items-center gap-4">
                            {author.socials.map((social) => {
                                const Icon = ICON_MAP[social.icon] || Globe;
                                return (
                                    <a
                                        key={social.id}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-fg transition-colors hover:text-fg"
                                        aria-label={social.name}
                                    >
                                        <Icon className="h-5 w-5"/>
                                    </a>
                                );
                            })}
                        </div>

                        <p className="text-lg font-medium text-muted-fg">
                            {author.bio}
                        </p>
                    </div>
                </div>
            </PageHeader>

            <hr className="mb-12 border-border/50"/>

            {/* Author's Articles Section */}
            <section>
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-xl font-semibold tracking-tight text-fg">
                        Articles by {author.name}
                    </h2>
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-fg">
            {authorArticles.length} Published
          </span>
                </div>

                <div className="flex flex-col divide-y divide-border/50">
                    {authorArticles.map((article) => {
                        const readingTime = calculateReadingTime(article);

                        return (
                            <ArticleCard
                                key={article.slug}
                                slug={article.slug}
                                title={article.title}
                                excerpt={article.excerpt || ""}
                                tags={article.tags}
                                readingTime={readingTime}
                                date={article.date}
                            />
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
