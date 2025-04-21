---
title: "Test Markdown Page"
date: "2025-04-21"
tags: ["test", "markdown"]
published: false # Exclude from blog list
description: "A test page to showcase various Markdown features."
---

# Heading 1

This is a paragraph demonstrating basic text formatting. You can have **bold text**, *italic text*, and `inline code`.

## Heading 2

Here's an unordered list:
*   Item 1
*   Item 2
    *   Sub-item 2.1
    *   Sub-item 2.2
*   Item 3

And an ordered list:
1.  First item
2.  Second item
3.  Third item

### Heading 3

Let's include a blockquote:
> This is a blockquote. It can span multiple lines and is often used for citations or highlighting text.

#### Heading 4

Here's a horizontal rule:

---

##### Heading 5

Now for some code blocks.

Inline code: `const greeting = "Hello";`

A fenced code block with syntax highlighting (JavaScript):
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('World');
```

A fenced code block without specified language:
```
This is just plain text
inside a code block.
  Indentation is preserved.
```

###### Heading 6

Links and Images:

A link to [Google](https://www.google.com).
A link to an internal page: [My Works](/works)

An image (requires the image file to exist in the static folder or be handled by Gatsby Image):
![Gatsby Logo](/gatsby.svg "Gatsby Logo")

Tables:

| Header 1 | Header 2 | Header 3 |
| :------- | :------: | -------: |
| Align L  | Center   | Align R  |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

Task Lists:

* [x] Completed task
* [ ] Incomplete task
* [ ] Another task

Emphasis:

*   This is *italic*.
*   This is _italic_.
*   This is **bold**.
*   This is __bold__.
*   This is ***bold and italic***.
*   This is ___bold and italic___.
*   This is `inline code`.
*   ~~Strikethrough~~

This file should now be accessible at `/blogs/test-page` but won't appear in your main blog listing if the listing query filters by `published: true` (or similar logic).
