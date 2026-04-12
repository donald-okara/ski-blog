# ski-blog Architecture & MCP Context

This document defines the system architecture and execution context for the ski-blog platform.

---

# ARCHITECTURE.md

## Overview

ski-blog is a Kotlin-first content system for technical publishing.
It supports:

* structured blog posts
* interactive demos
* presentation-style content links
* optional video embeds
* tag-based discovery and recommendations

It is designed to avoid content vendor lock-in while keeping rendering flexible.

---

## Core Principle

> Kotlin defines meaning. Web defines presentation.

Content is authored in Kotlin, compiled to JSON, and rendered in a web application.

---

## High-Level Architecture

```
Kotlin Content Layer
        ↓
     JSON Output
        ↓
 Web Blog Renderer (TypeScript)
        ↓
   Vercel Deployment
```

---

## Modules

### 1. content-core (Kotlin / KMP)

Responsible for:

* Content IR (DocBlock)
* Post and Author models
* Kotlin DSL for writing posts
* Tag system
* Recommendation logic
* Serialization contracts

Output:

* platform-agnostic JSON models

---

### 2. content (Authoring Layer)

Responsible for:

* Writing posts using Kotlin DSL
* Defining structure and demos
* Generating JSON output

Output:

* `/public/content/*.json`

---

### 3. web (Blog Application)

Hosted on Vercel.

Responsible for:

* Rendering posts (JSON → UI)
* Theme system (light/dark)
* Typography and layout
* Demo embedding via iframe
* Related content sections

  * articles
  * presentations
  * videos
* Analytics integration
* Newsletter UI

---

## Content Model

### Post

* id
* title
* author
* tags
* createdAt
* blocks

### DocBlock Types

* Heading
* Paragraph
* Code
* Demo
* Callout (optional)

---

## Rendering Rules

Web layer:

* renders JSON only
* contains no business logic
* does not interpret content meaning

---

## Demos

* standalone static artifacts
* embedded via iframe
* referenced via ID

Example:

```
/public/demos/lazy-list-scroll/index.html
```

---

## Tag System

Used for:

* related articles
* discovery
* recommendations

Initially implemented via tag overlap scoring.

---

## Related Content System

Each post includes:

### 1. Related Articles

* tag-based similarity

### 2. Related Presentations

* Ski slide system links or embeds

### 3. Related Videos

* optional YouTube embeds

---

## Theme System

Web-only responsibility.

Implemented using CSS variables:

* light mode
* dark mode
* system preference detection

Kotlin layer is unaware of theme.

---

## Build Pipeline

```
Kotlin DSL
   ↓
Post objects
   ↓
Serialization (kotlinx)
   ↓
JSON files
   ↓
Vercel static deployment
```

---

## Constraints

* Kotlin defines structure, not UI
* Web defines rendering only
* Demos remain independent
* No runtime interpretation of content meaning in web layer

---

## Future Extensions

* multi-author system
* analytics + metrics layer
* improved recommendation engine
* tighter Ski presentation integration
* newsletter system expansion

---

## Non-goals

* CMS system
* real-time editing
* backend-heavy architecture
* server-side rendering complexity

---

# MCP_CONTEXT.md

## System Identity

ski-blog is a Kotlin-first technical publishing system producing:

* engineering blog posts
* interactive demos
* presentation-linked content

It is not a CMS.

It is a structured content generation system.

---

## Core Mental Model

Three layers:

### 1. Content Layer (Kotlin)

* source of truth
* defines structure and meaning
* no UI concerns

### 2. Data Layer (JSON)

* serialized content contract
* platform-agnostic

### 3. Presentation Layer (Web)

* renders JSON only
* no content interpretation

---

## Content Rules

* posts authored in Kotlin DSL
* posts are immutable once generated
* content compiled into JSON
* no runtime content transformation on web

---

## Block System

Supported DocBlocks:

* Heading
* Paragraph
* Code
* Demo
* Callout (optional)

Blocks are structural only.

---

## Demo System

* external static artifacts
* embedded via iframe
* referenced via unique IDs

Rules:

* no embedded demo logic in renderer
* demos must run independently

---

## Tag System

* simple string tags
* used for similarity matching
* used for related content suggestions

No taxonomy complexity in v1.

---

## Related Content

Three categories:

1. Related Articles

   * tag overlap

2. Related Presentations

   * Ski system integration

3. Related Videos

   * optional metadata (YouTube)

---

## Rendering Constraints

Web layer must:

* only render JSON
* not infer meaning
* not modify structure

---

## Authoring Constraints

Kotlin layer must:

* define structure only
* avoid UI assumptions
* avoid platform-specific logic

---

## Evolution Strategy

Phase 1:

* single-author system
* static generation

Phase 2:

* multi-author support
* analytics
* improved recommendations

Phase 3:

* Ski presentation integration
* richer content ecosystem

---

## Design Philosophy

* optimize for writing speed
* keep architecture simple
* prefer explicit over clever
* avoid premature abstraction
