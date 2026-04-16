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

function RenderBlock({ block }: { block: DocBlock }) {
  switch (block.type) {
    case "H":
      return (
        <h2 className="mt-10 mb-4 text-2xl font-bold tracking-tight text-fg">
          {renderTextWithFormatting(block.text)}
        </h2>
      );

    case "P":
      return (
        <p className="text-lg leading-relaxed text-muted-fg mb-4">
          {renderTextWithFormatting(block.text)}
        </p>
      );

    case "Code":
      return (
        <CodeBlock
          code={block.code}
          language={block.language}
        />
      );

    case "Callout":
      return (
        <Callout
          type={block.calloutType}
          title={block.title}
        >
          {renderTextWithFormatting(block.text)}
        </Callout>
      );

    case "Demo":
      return (
        <DemoEmbed
          title="Interactive Demo"
        />
      );

    case "Presentation":
      return (
        <PresentationEmbed
          type={block.presentationType}
          embedUrl={block.embedUrl}
          title={block.title}
        />
      );

    case "Image":
      return (
        <figure
          className="my-8 flex flex-col items-center"
          style={{
            width: block.width || "100%",
            height: block.height || "auto",
            margin: "2rem auto"
          }}
        >
          <img
            src={block.src}
            alt={block.alt}
            className={cn(
              "rounded-xl border border-border w-full h-full object-cover",
              block.grayscale && "grayscale hover:grayscale-0 transition-all duration-500",
              block.className
            )}
            style={{
              objectPosition: block.objectPosition || "center",
            }}
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
        <div className="my-6 flex flex-wrap gap-2">
          {block.tags.map(tag => (
            <TagPill key={tag}>{tag}</TagPill>
          ))}
        </div>
      );

    case "Row":
      return (
        <div className="flex flex-col md:flex-row gap-4 my-8">
          {block.items.map((item, index) => (
            <div
              key={index}
              style={{ flex: item.ratio }}
              className="flex flex-col"
            >
              <RenderBlock block={item.block} />
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export function ContentRenderer({ blocks }: ContentRendererProps) {
  return (
    <div className="content-renderer flex flex-col gap-2">
      {blocks.map((block, index) => (
        <React.Fragment key={index}>
          <RenderBlock block={block} />
        </React.Fragment>
      ))}
    </div>
  );
}
