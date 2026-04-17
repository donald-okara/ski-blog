# Skiblog System Context

This document defines the system architecture and execution context for the Skiblog platform.

---

## Core Principle

**Structured Content, Flexible Presentation.**
Content is authored as a series of typed "DocBlocks" that the web layer renders into a rich, interactive experience.

---

## High-Level Architecture

```
Web Blog Renderer (TypeScript/React)
        ↓
  Content Data (TypeScript Objects)
        ↓
   Vercel Deployment
```

The system is currently centered around the `web-layer`, which acts as both the authoring repository (via TS data files) and the rendering engine.

---

## Modules & Components

### 1. Web Layer (`web-layer`)
The primary application built with React, Vite, and Tailwind CSS.

- **Types (`src/types/blog.ts`)**: Defines the schema for Posts, Authors, and DocBlocks.
- **Components (`src/components/`)**: Atomic renderers for each block type (e.g., `CodeBlock`, `DemoEmbed`, `FeaturedBlock`).
- **Data (`src/data/`)**: Contains the source of truth for the blog content.
    - `posts/`: Individual blog post definitions.
    - `featured.ts`: Global featured content/promotions.
    - `authors.ts`: Author profiles.

---

## Content Model

### Post Structure
A Post consists of metadata (title, slug, tags, etc.) and an array of `DocBlock` objects.

### Supported DocBlocks
1.  **H**: Section headings.
2.  **P**: Standard paragraphs with inline markdown support.
3.  **Code**: Syntax-highlighted code blocks (using Prism/Shiki style).
4.  **Demo**: Interactive iframes with custom labels.
5.  **Callout**: Styled info/tip/warning boxes.
6.  **Presentation**: Embedded YouTube videos or slide decks.
7.  **Image**: Images with captions and grayscale hover effects.
8.  **Tags**: Lists of related tags.
9.  **Row**: Flexbox-based horizontal layouts for nesting other blocks.
10. **Featured**: Reusable promotional cards linked to `featured.ts`.

---

## Demo System
Demos are independent web applications hosted externally and embedded via the `Demo` block.
- Supported properties: `id`, `url`, `label`.
- The `label` allows customizing the header of the demo frame.

---

## Featured Content System
Centralized in `src/data/featured.ts`.
- Allows defining promotions with custom titles, descriptions, images, links, and gradients.
- Can be rendered as a `hero` (large banner) or a standard card.

---

## Development Constraints
- **Type Safety**: All content must strictly adhere to the `DocBlock` union type.
- **Component Isolation**: Each block type should have a dedicated component in `web-layer/src/components`.
- **Styling**: Use Tailwind CSS and follow the existing design tokens (e.g., `fg`, `bg`, `muted-fg`, `primary`).
- **Performance**: Prefer static data imports for now; avoid heavy runtime transformations.
