# Content Management Guide

`clifolio` is designed to be easily updated without requiring deep knowledge of React or component logic. Most content is centralized in the `data/` directory.

## 🚀 Updating Project Records

To add or modify your projects, edit the `data/projects.ts` file.

### Data Structure:
Each project entry follows this TypeScript interface:
```typescript
{
  id: string;          // Unique URL-friendly ID
  title: string;       // Name of the project
  description: string; // Short summary (1-2 sentences)
  tags: string[];      // Array of tech (e.g., ["RUST", "NEXT.JS"])
  image?: string;      // URL to a cover image
  variant: "large" | "small" | "wide"; // Layout style
  idLabel: string;     // Top-right label (e.g., "CORE_INFRA")
  featured?: boolean;  // Set to true to show on the homepage
}
```

### Pro Tip:
The homepage `ProjectsGrid` automatically selects the first 4 projects marked as `featured: true`. The dedicated `/projects` page displays everything in the array.

## 📝 Writing Activity Logs (Blog)

Blog-style entries are managed in `data/logs.ts`.

### Data Structure:
```typescript
{
  id: string;       // Unique ID
  title: string;    // Log title
  date: string;     // ISO format (YYYY-MM-DD)
  excerpt: string;  // Preview text for the card
  category: string; // E.g., "ARCHITECTURE", "DESIGN"
  tags: string[];   // Specific tags
}
```

## 👤 Personal Info & Experience

Currently, information in the **About Me** and **Experience** sections is managed directly within their respective components to allow for more complex layouts:

- **Bio/Edu/Base of Ops**: Modify `app/components/AboutMe.tsx`.
- **Work History**: Modify the `experiences` array in `app/components/Experience.tsx`.

## 🖼️ Static Assets

Store images, favicons, and other static files in the `public/` directory. They can then be referenced in your data files via simple paths (e.g., `/my-project.jpg`).
