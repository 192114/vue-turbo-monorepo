# Vue Turbo Monorepo

A modern Vue 3 monorepo starter template with Turborepo and pnpm workspace.

## Features

- 🏎️ [Turborepo](https://turbo.build/repo) - High-performance build system for monorepos
- 📦 [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- ⚡️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- 🎨 [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework
- 🔧 [TypeScript](https://www.typescriptlang.org/) - Type safe development
- 📚 [Histoire](https://histoire.dev/) - A new way to write stories for your components
- 🎯 [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) - Code linting and formatting

## Project Structure

```
.
├── apps
│   └── web                 # Main web application
└── packages
    ├── config             # Shared configurations (TypeScript, ESLint, etc.)
    └── ui                 # UI component library with Histoire
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Build all packages
pnpm build

# Lint all packages
pnpm lint
```

### Development

- Web App: `http://localhost:5173`
- UI Documentation: `http://localhost:6006`

## License

MIT 