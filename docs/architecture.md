# System Architecture

This document provides a high-level overview of the `clifolio` technical architecture and design principles.

## 🏗️ Core Framework

`clifolio` is built using **Next.js 16**, leveraging the latest features of the **App Router** for optimized routing and performance.

### Key Architectural Decisions:
- **Server-First Components**: By default, components are rendered as Server Components to minimize client-side JavaScript. Interactivity is added surgically using the `"use client"` directive.
- **Tailwind CSS v4 Engine**: Utilizes the modern Tailwind CSS v4 for styling, which offers improved performance and a more powerful configuration system via CSS variables.
- **Centralized Data Approach**: Content (projects, logs, experience) is decoupled from the UI layer and stored in `data/*.ts` files. This allows for easy updates without touching component logic.

## 📂 Directory Structure

The repository follows a clean, modular structure:

```text
├── app/
│   ├── components/     # Reusable UI components
│   ├── logs/           # Dedicated Blog/Activity Logs page
│   ├── projects/       # Dedicated Project Records page
│   ├── globals.css     # Global styles and Tailwind v4 theme
│   └── layout.tsx      # Root layout with theme persistence
├── data/
│   ├── projects.ts     # Centralized Project records
│   └── logs.ts         # Centralized Activity log entries
├── docs/               # Detailed technical documentation
├── public/             # Static assets (Favicon, images)
└── LICENSE             # MIT License
```

## 🔄 Data Flow

1. **Storage**: Data is defined in `data/*.ts` using TypeScript interfaces.
2. **Access**: UI components import these constants directly.
3. **Rendering**:
    - The homepage (`app/page.tsx`) slices the data to show "Featured" or "Recent" entries.
    - Dedicated pages (`app/projects/page.tsx`, `app/logs/page.tsx`) map through the entire data array to provide an exhaustive archive.

## 🌗 Theme Management

`clifolio` implements a state-aware Dark Mode system:
- **Persistence**: The theme preference is stored in `localStorage`.
- **System Awareness**: On first load, it respects the user's OS preference (`prefers-color-scheme`).
- **Implementation**: Theme changes are applied via a `.dark` class on the `<html>` element, which toggles a set of CSS color variables defined in `app/globals.css`.

For more details on styling, see the [Design System Guide](./design-system.md).
