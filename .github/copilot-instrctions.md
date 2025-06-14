# GitHub Copilot Instructions for pandasanjay.github.io

## Project Overview

This repository contains the source code for my personal website and blog, built using Gatsby. The goal is to create a modern developer website showcasing skills, experience, portfolio, and blog posts related to large-scale applications, efficient software development, and data pipelines.

## Technology Stack

*   **Framework:** Gatsby (React-based static site generator)
*   **Language:** JavaScript, JSX
*   **Styling:** SCSS (`src/styles/global.scss`)
*   **Content:** Local Markdown (`.md`) files (managed via Obsidian, sourced by Gatsby)
*   **Deployment:** GitHub Pages (implied by repo name)

## Key Directories

*   `src/`: Contains the main source code (pages, components, templates, styles).
*   `src/pages/`: Gatsby pages.
*   `src/components/`: Reusable React components.
*   `src/templates/`: Templates for programmatically generating pages (e.g., blog posts from Markdown).
*   `src/styles/`: Global styles and SCSS partials.
*   `content/blog/`: (Likely location for Markdown blog posts managed via Obsidian).
*   `static/`: Static assets (images, fonts, etc.).
*   `gatsby-config.js`: Gatsby configuration file (will need `gatsby-source-filesystem` configured for `content/blog/`).
*   `gatsby-node.js`: Gatsby Node APIs for building the site (will query Markdown files and create pages).
*   `gatsby-browser.js`: Gatsby Browser APIs for client-side interactions.

## Copilot Guidance

*   **Code Style:** Follow standard React/JavaScript best practices. Maintain consistency with existing code.
*   **Components:** Create functional React components. Use hooks where appropriate.
*   **Styling:** Use SCSS according to the structure in `src/styles/`. Prefer modular CSS/SCSS.
*   **Markdown:** Generate clean and standard Markdown for content.
*   **Gatsby:** Leverage Gatsby APIs and conventions (e.g., GraphQL queries for data fetching, `Link` component for internal navigation).
*   **File Paths:** Ensure generated code snippets use correct relative file paths based on the project structure.

## Potential Future Improvements (Post-2024 Considerations)

*   **Styling:**
    *   **Tailwind CSS / Utility-First CSS:** Consider migrating to or integrating Tailwind CSS for faster UI development and consistent styling with utility classes. This can reduce the need for custom SCSS.
    *   **CSS Modules:** Enhance modularity by using CSS Modules alongside SCSS for component-scoped styles.
*   **State Management:** If complexity increases, consider Zustand or Jotai for lightweight global state management.
*   **Content Management:**
    *   **Headless CMS:** For easier blog/portfolio management, integrate a headless CMS like Strapi, Sanity, or Contentful. This separates content from the codebase.
*   **Performance:**
    *   **Modern Image Formats:** Ensure consistent use of modern image formats (WebP, AVIF) via Gatsby plugins (`gatsby-plugin-image`).
*   **Build Tools:** While Gatsby is robust, explore newer tools in the ecosystem if specific needs arise (though Gatsby remains a strong choice).
*   **Accessibility:** Continuously audit and improve accessibility (A11y) using tools like Axe DevTools and adhering to WCAG guidelines.
