# Skiblog Content Blocks Guide

This guide describes the available block types for creating content in Skiblog. Blocks are defined as JSON objects within the `blocks` array of a post.

---

## Inline Formatting
The `H`, `P`, and `Callout` blocks support basic markdown-like formatting for their text fields:
- **Bold**: `*text*`
- **Link**: `[text](url)`
- **Monospace**: `` `text` ``

---

## Block Types

### 1. Heading (`H`)
Used for section headers.
- `text`: (String) The header text. Supports inline formatting.

```json
{ "type": "H", "text": "This is a *Bold* Header" }
```

### 2. Paragraph (`P`)
Standard text block.
- `text`: (String) The paragraph content. Supports inline formatting.

```json
{ "type": "P", "text": "Visit our [site](https://example.com) for more info." }
```

### 3. Image (`Image`)
Displays an image with various styling options.
- `src`: (String) URL or path to the image.
- `alt`: (String) Alternative text and caption.
- `width`: (Optional String/Number) Custom width (e.g., `"300px"`, `50%`). Defaults to `"100%"`.
- `height`: (Optional String/Number) Custom height. Defaults to `"auto"`.
- `grayscale`: (Optional Boolean) If true, image starts grayscale and colors on hover.
- `objectPosition`: (Optional String) CSS object-position (e.g., `"top"`, `"center"`).
- `className`: (Optional String) Extra CSS classes.

```json
{
  "type": "Image",
  "src": "/assets/hero.jpg",
  "alt": "A beautiful landscape",
  "width": "80%",
  "grayscale": true
}
```

### 4. Code Block (`Code`)
Syntax-highlighted code.
- `code`: (String) The raw code string.
- `language`: (String) Language for highlighting (e.g., `"typescript"`, `"kotlin"`, `"html"`).

```json
{
  "type": "Code",
  "language": "typescript",
  "code": "const greet = () => console.log('Hello');"
}
```

### 5. Callout (`Callout`)
Highlights important information in a styled box.
- `calloutType`: (String) One of `"info"`, `"warning"`, or `"tip"`.
- `title`: (Optional String) Header for the callout.
- `text`: (String) The body text. Supports inline formatting.

```json
{
  "type": "Callout",
  "calloutType": "tip",
  "title": "Pro Tip",
  "text": "Use the *Row* block to align content side-by-side."
}
```

### 6. Row (`Row`)
A layout block that arranges other blocks horizontally.
- `items`: (Array) List of objects containing:
    - `block`: (DocBlock) Any valid block type.
    - `ratio`: (Number) The relative width ratio (flex-grow).

```json
{
  "type": "Row",
  "items": [
    {
      "ratio": 1,
      "block": { "type": "Image", "src": "left.jpg", "alt": "Left" }
    },
    {
      "ratio": 2,
      "block": { "type": "P", "text": "This text takes up 2/3 of the row." }
    }
  ]
}
```

### 7. Presentation (`Presentation`)
Embeds external media.
- `presentationType`: (String) `"youtube"` or `"slides"`.
- `embedUrl`: (String) The source URL.
- `title`: (String) Accessible title for the iframe.

```json
{
  "type": "Presentation",
  "presentationType": "youtube",
  "embedUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "title": "Tutorial Video"
}
```

### 8. Tags (`Tags`)
Displays a horizontal list of clickable/styled tags.
- `tags`: (Array of Strings) The list of tag names.

```json
{ "type": "Tags", "tags": ["React", "Android", "Web"] }
```

### 9. Demo (`Demo`)
Embeds an interactive project demo.
- `id`: (String) The unique identifier for the demo component.
- `url`: (Optional String) The URL for the demo iframe.
- `label`: (Optional String) Custom label for the demo header (defaults to "Interactive Demo").

```json
{ 
  "type": "Demo", 
  "id": "calculator-demo", 
  "url": "https://example.com/demo", 
  "label": "Live Calculator" 
}
```

### 10. Featured (`Featured`)
Displays a featured announcement or event (data defined in `src/data/featured.ts`).
- `id`: (String) The identifier for the featured content.
- `hero`: (Optional Boolean) If true, renders as a large hero section with glowing gradients. Defaults to `false` (compact card).

```json
{ 
  "type": "Featured", 
  "id": "upcoming-workshop", 
  "hero": true 
}
```
