import { DocBlock } from "@/types/blog";
import { CodeBlock } from "./CodeBlock";
import { Callout } from "./Callout";
import { DemoEmbed } from "./DemoEmbed";
import { PresentationEmbed } from "./PresentationEmbed";
import { TagPill } from "./TagPill";
import { cn } from "@/lib/utils";
import React from "react";

interface ContentRendererProps {
  blocks: DocBlock[];
}

function renderTextWithFormatting(text: string) {
  // Pattern to match [text](url), *bold*, and `monospace`
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*[^*]+\*|`[^`]+`)/);

  return parts.map((part, i) => {
    if (!part) return null;

    // Match Link: [text](url)
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={i}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline font-bold"
        >
          {linkMatch[1]}
        </a>
      );
    }

    // Match Bold: *text*
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <strong key={i} className="font-bold text-fg">
          {part.slice(1, -1)}
        </strong>
      );
    }

    // Match Monospace: `text`
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={i} className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm text-fg-muted">
          {part.slice(1, -1)}
        </code>
      );
    }

    return part;
  });
}

export function ContentRenderer({ blocks }: ContentRendererProps) {
  return (
    <div className="content-renderer flex flex-col gap-2">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "H":
            return (
              <h2
                key={index}
                className="mt-10 mb-4 text-2xl font-bold tracking-tight text-fg"
              >
                {renderTextWithFormatting(block.text)}
              </h2>
            );

          case "P":
            return (
              <p
                key={index}
                className="text-lg leading-relaxed text-muted-fg mb-4"
              >
                {renderTextWithFormatting(block.text)}
              </p>
            );

          case "Code":
            return (
              <CodeBlock
                key={index}
                code={block.code}
                language={block.language}
              />
            );

          case "Callout":
            return (
              <Callout
                key={index}
                type={block.calloutType}
                title={block.title}
              >
                {renderTextWithFormatting(block.text)}
              </Callout>
            );

          case "Demo":
            return (
              <DemoEmbed
                key={index}
                title="Interactive Demo"
              />
            );

          case "Presentation":
            return (
              <PresentationEmbed
                key={index}
                type={block.presentationType}
                embedUrl={block.embedUrl}
                title={block.title}
              />
            );

          case "Image":
            return (
              <figure key={index} className="my-8">
                <img
                  src={block.src}
                  alt={block.alt}
                  className={cn(
                    "rounded-xl border border-border w-full object-cover",
                    block.grayscale && "grayscale hover:grayscale-0 transition-all duration-500",
                    block.className
                  )}
                  style={{ objectPosition: block.objectPosition || "center" }}
                />
                {block.alt && (
                  <figcaption className="mt-3 text-center text-sm text-muted-fg italic">
                    {block.alt}
                  </figcaption>
                )}
              </figure>
            );

          case "Tags":
            return (
              <div key={index} className="my-6 flex flex-wrap gap-2">
                {block.tags.map(tag => (
                  <TagPill key={tag}>{tag}</TagPill>
                ))}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
