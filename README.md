# clifolio // Terminal-Inspired Portfolio

`clifolio` is a high-performance, visually striking developer portfolio template built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**. It features a unique "CLI-meets-Brutalist" aesthetic, characterized by bold typography, Bento-style grids, and interactive terminal windows.

## 🚀 Key Features

- **Terminal UI Components**: Reusable `TerminalWindow`, `ProjectCard`, and `LogCard` components with "traffic light" controls and syntax highlighting.
- **Adaptive Dark Mode**: A seamless, persistence-enabled dark theme that transforms the CLI aesthetic while maintaining high accessibility.
- **Centralized Data Management**: Project and blog (LOGS) data are decoupled from the UI, stored in clean TypeScript schemas for easy maintenance.
- **Bento Grid Layout**: A responsive 12-column grid for showcasing projects with various card sizes (Large, Wide, Small).
- **Brutalist Design System**: Built on a Material Design 3 palette, featuring radial gradient backgrounds, sharp borders, and "window-shadow" depth.
- **Modern Tech Stack**: Leveraging Next.js 16's App Router and the blazing-fast Tailwind CSS v4 utility engine.
- **Performance Optimized**: Achieves near-perfect Lighthouse scores through `next/font` optimization and static generation.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) & [Inter](https://fonts.google.com/specimen/Inter)
- **Icons**: [Material Symbols Outlined](https://fonts.google.com/icons)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure

```text
├── app/
│   ├── components/     # UI Components (Navbar, Hero, Cards, etc.)
│   ├── logs/           # Dedicated Blog/Activity Logs page
│   ├── projects/       # Dedicated Project Records page
│   ├── globals.css     # Tailwind v4 theme & Global styles
│   └── layout.tsx      # Root layout with persistence logic
├── data/
│   ├── projects.ts     # Centralized Project data & types
│   └── logs.ts         # Centralized Blog/Log data & types
├── docs/
│   ├── dev/            # Implementation plans & tasklists
│   └── reference/      # Original design prototype (HTML/CSS)
└── public/             # Static assets (Favicons, Images)
```

## ⚙️ Getting Started

### Prerequisites

- Node.js 24.x or later
- pnpm (recommended) or npm/yarn

### Installation

```bash
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Create an optimized production build:

```bash
pnpm run build
```

## 🎨 Customization

### Design Tokens

Global styles, colors, and typography scales are defined in `app/globals.css` using the `@theme` block in Tailwind v4. To change the brand color, update the `--color-primary` variable in both light and dark mode sections.

### Content Management

The portfolio is designed to be "data-driven". To update your information:

- **Projects**: Edit `data/projects.ts` to add or modify project records.
- **Blog Logs**: Edit `data/logs.ts` to add new activity updates.
- **Bio/Experience**: Modify `app/components/AboutMe.tsx` and `app/components/Experience.tsx`.

## 📜 Documentation

For a deeper dive into the architectural decisions and customization options, refer to:

- [System Architecture](./docs/architecture.md)
- [Design System Guide](./docs/design-system.md)
- [Component Catalog](./docs/components.md)
- [Content Management](./docs/content-management.md)

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) to get started.

## ⚖️ License

This project is licensed under the [MIT License](./LICENSE).
