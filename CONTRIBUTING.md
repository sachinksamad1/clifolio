# Contributing to clifolio

Thank you for your interest in contributing to `clifolio`! We welcome contributions from the community to help make this portfolio template better for everyone.

## 🛠️ Development Setup

1. **Fork & Clone**:

   ```bash
   git clone https://github.com/sachinksamad1/clifolio.git
   cd clifolio
   ```

2. **Install Dependencies**:
   We recommend using `pnpm`:

   ```bash
   pnpm install
   ```

3. **Start Development Server**:
   ```bash
   pnpm dev
   ```

## 📜 Coding Standards

- **TypeScript**: All new components and utilities should be fully typed.
- **Styling**: Use Tailwind CSS v4 utility classes. Avoid hardcoded colors; use the theme variables defined in `app/globals.css`.
- **Naming**: Use `PascalCase` for React components and `camelCase` for variables and functions.
- **Architecture**: Keep UI components inside `app/components/` and keep them modular and reusable where possible.

## 🚀 Pull Request Process

1. **Create a Branch**: Use a descriptive name like `feature/dark-mode-polish` or `fix/nav-accessibility`.
2. **Commit Changes**: Use clear, concise commit messages.
3. **Verify Build**: Ensure the production build still passes:
   ```bash
   pnpm build
   ```
4. **Submit PR**: Provide a detailed description of your changes and why they are necessary.

## 🐞 Reporting Issues

Found a bug? Open an issue on GitHub with:

- A clear description of the problem.
- Steps to reproduce the issue.
- Details about your environment (OS, Browser, Node version).

## ⚖️ License

By contributing to this project, you agree that your contributions will be licensed under the project's [MIT License](./LICENSE).
