# Design System

`clifolio` features a unique design system that merges the efficiency of a **CLI (Command Line Interface)** with the depth and color science of **Material Design 3**.

## 🎨 Color Palette

The core identity is built around a primary pink brand color, complemented by a sophisticated dark/light token system.

| Token | Light Hex | Dark Hex | Purpose |
| :--- | :--- | :--- | :--- |
| `primary` | `#b1008c` | `#ffaede` | Brand identity, primary accents |
| `secondary` | `#006b5b` | `#00dfc1` | Secondary accents, status indicators |
| `tertiary` | `#686000` | `#d9c919` | Tertiary accents, secondary headers |
| `background` | `#fff8f9` | `#1a1116` | Main page surface |
| `on-background`| `#25181f` | `#ffecf4` | Main text color |
| `surface-low` | `#fff0f5` | `#22181e` | Card backgrounds |

## 🅰️ Typography

The system uses a two-font stack to balance readability with a technical feel.

### Families:
- **Headline**: `Space Grotesk` (Bold, geometric, terminal-inspired)
- **Body**: `Inter` (Clean, highly legible sans-serif)
- **Code**: Standard `monospace`

### Scale:
- `headline-xl`: 48px / 1.1 / 700 / -0.02em (Main titles)
- `headline-lg`: 32px / 1.2 / 700 (Section headers)
- `body-lg`: 18px / 1.6 / 400 (Intro text)
- `label-caps`: 12px / 1.0 / 700 / 0.1em (Badges and labels)

## 🏗️ Structural Patterns

### Radial Gradient Background
A distinctive "dot" pattern that provides texture without overwhelming the content.
```css
body {
    background-image: radial-gradient(var(--color-outline-variant) 0.5px, transparent 0.5px);
    background-size: 24px 24px;
}
```

### Brutalist Shadows
Unlike soft Material shadows, `clifolio` uses hard, 100% opaque (or near-opaque) offsets to emphasize the "window" metaphor.
- **Utility**: `.window-shadow`
- **Effect**: `4px 4px 0px 0px rgba(0, 0, 0, 0.8)`

## 🌓 Dark Mode Logic

The dark theme is implemented using a class-based approach (`.dark` on `<html>`). 
- **Variable Overrides**: All core color tokens are redefined within the `.dark` selector in `app/globals.css`.
- **Accessibility**: Dark mode tokens are carefully selected to maintain high contrast ratios and reduce eye strain in low-light environments.
- **Transitions**: Background and color changes are animated smoothly (`transition-colors duration-300`).
