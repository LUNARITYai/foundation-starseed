# Foundation Starseed - Project Context

This file provides comprehensive context for Gemini CLI when working with this repository.

## Project Overview
**Foundation Starseed** is a React-based design system and component library built with modern web technologies. It follows a token-driven architecture where design decisions are codified as JSON and transformed into platform-specific outputs.

- **Framework:** React 19 (TypeScript)
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4 & CSS Variables
- **Design Tokens:** Style Dictionary (in `tokens/`)
- **Component Variants:** `class-variance-authority` (CVA)
- **Documentation:** Storybook 10
- **Testing:** Vitest 4

## Architecture & Workflow

### 1. Token Pipeline
Design tokens are the "source of truth" for all visual styles.
- **Source:** `tokens/src/**/*.json` (color, typography, spacing, etc.)
- **Processing:** `pnpm tokens:build` (runs Style Dictionary)
- **Output:** `tokens/build/css/variables.css` (CSS variables prefixed with `--ds-*`)
- **Integration:** `src/styles/globals.css` maps `--ds-*` variables to Tailwind theme properties via the `@theme` block.

**Workflow:** After editing a token JSON file, you **must** run `pnpm tokens:build` to reflect changes in the UI.

### 2. Component Pattern
Components live in `src/components/` (subdivided into `ui`, `layout`, `feedback`, `form`).
All components follow a consistent pattern:
- **Structure:** `forwardRef` + `cva` for variants + `cn()` for class merging.
- **File Naming:** `ComponentName.tsx`, `ComponentName.stories.tsx`, `ComponentName.test.tsx`.
- **Exports:** Each component folder's index or a central `src/components/index.ts` re-exports the components.
- **Utils:** `src/lib/utils.ts` contains the `cn` utility (clsx + tailwind-merge).

### 3. Styling Standards
- **Tailwind:** Use Tailwind classes for most styling (e.g., `bg-brand-primary`).
- **CSS Variables:** Prefer semantic Tailwind tokens mapped in `globals.css` rather than raw values.
- **CVA:** Use `class-variance-authority` to handle complex variant logic and ensure type safety.

## Key Commands
| Command | Description |
| :--- | :--- |
| `pnpm dev` | Start Vite dev server with HMR |
| `pnpm build` | TypeScript check + Vite production build |
| `pnpm lint` | Run ESLint with project-specific rules |
| `pnpm test` | Run all unit tests (Vitest) |
| `pnpm tokens:build` | Rebuild design tokens via Style Dictionary |
| `pnpm storybook` | Start Storybook dev server on port 6006 |
| `pnpm build-storybook`| Build Storybook for static deployment |

## Development Conventions
- **Path Aliases:** Use `@/` for `src/` directory (e.g., `import { Button } from '@/components/ui/Button'`).
- **Tests:** Always add or update unit tests (`.test.tsx`) for component changes. Use `@testing-library/react`.
- **Stories:** Document every UI component in Storybook with relevant variants/states.
- **Accessibility:** Components should follow WAI-ARIA guidelines; check with Storybook's A11y addon.
- **Git:** The project is managed by git. Do not stage or commit changes unless explicitly asked.

## Project Structure
```text
/
├── tokens/               # Design token source and build config
│   ├── src/              # Token JSON files (Source of Truth)
│   └── config.js         # Style Dictionary configuration
├── src/
│   ├── components/       # UI, Layout, and Feedback components
│   ├── lib/              # Shared utilities (cn, etc.)
│   ├── styles/           # Global CSS and Tailwind theme mapping
│   ├── assets/           # Static assets
│   └── App.tsx           # Application entry point
├── .storybook/           # Storybook configuration
└── vite.config.ts        # Vite configuration
```
