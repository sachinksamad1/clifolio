# Component Catalog

This document details the custom UI components built for `clifolio`. These components are designed with a focus on reusability and a consistent "terminal-inspired" aesthetic.

## 🛠️ Layout Components

### `Navbar`
A persistent sticky header containing navigation links and theme controls.
- **Location**: `app/components/Navbar.tsx`
- **Interactivity**: Includes a Dark Mode toggle and anchor links to homepage sections.

### `Footer`
A responsive footer with a brutalist dashed border.
- **Location**: `app/components/Footer.tsx`
- **Features**: Includes social media links and copyright notice.

## 🧱 UI Building Blocks

### `TerminalWindow`
A versatile container that mimics a terminal/code editor window.
- **Location**: `app/components/TerminalWindow.tsx`
- **Props**:
    - `title` (string): The window title (e.g., `stats.json`).
    - `children` (ReactNode): Content to display inside the window.
    - `titleColor` (string): Optional Tailwind class for title text color.
- **Visuals**: Features "traffic light" window controls and a `window-shadow` depth effect.

### `ProjectCard`
A multi-variant card for showcasing project data.
- **Location**: `app/components/ProjectCard.tsx`
- **Variants**:
    - `large`: Features a large image and detailed text.
    - `wide`: Horizontal layout with image and text side-by-side.
    - `small`: Compact layout for minor projects or libraries.
- **Interactivity**: Includes a grayscale-to-color transition on hover for images and a 4px translation effect.

### `LogCard`
A specialized card for blog (LOGS) entries.
- **Location**: `app/components/LogCard.tsx`
- **Visuals**: Features a category badge and date stamp in code font.

## 📊 Section Components

### `Hero`
The introductory section of the portfolio.
- **Location**: `app/components/Hero.tsx`
- **Includes**: The main headline, a `TerminalWindow` with animated-style JSON stats, and CTA buttons.

### `ProjectsGrid`
A 12-column Bento-style grid that displays featured projects.
- **Location**: `app/components/ProjectsGrid.tsx`

### `Experience`
A vertical timeline of career milestones.
- **Location**: `app/components/Experience.tsx`
- **Aesthetics**: Each entry is contained in a window-shadowed card with distinct theme-colored borders.

## 🎨 Global Styling Utilities

### `.window-shadow`
A custom utility class that adds a hard, brutalist shadow to containers.
- **Implementation**: Defined in `app/globals.css`.
- **Behavior**: Automatically adjusts opacity between light and dark modes.

### `hover:translate-x-1 hover:translate-y-1`
A standard hover interaction used across most interactive cards to create a "press" feel.
