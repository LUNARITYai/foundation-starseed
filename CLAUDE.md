# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # Vite dev server with HMR
npm run build            # TypeScript check + Vite production build
npm run lint             # ESLint
npm run test             # Unit tests (vitest, jsdom, one-shot)
npm run test:watch       # Unit tests in watch mode
npm run tokens:build     # Rebuild design tokens (Style Dictionary)
npm run storybook        # Storybook dev server on :6006
npm run build-storybook  # Storybook production build
```

Run a single test file: `npx vitest run --project unit src/components/ui/Button.test.tsx`

## Architecture

### Token Pipeline

```
tokens/src/*.json  →  Style Dictionary  →  tokens/build/css/variables.css (--ds-* vars)
                                        →  tokens/build/js/tokens.{js,d.ts}
                                              ↓
                              src/styles/globals.css  @theme block maps --ds-* → Tailwind theme
                                              ↓
                              Components use Tailwind classes (e.g. bg-brand-primary)
```

Token source files live in `tokens/src/` (color, typography, spacing, shadow, radius, motion). After editing tokens, run `npm run tokens:build` to regenerate outputs. The `tokens/build/` directory is gitignored.

### Component Pattern

Components use **forwardRef + CVA + cn()** and live in `src/components/{ui,layout,feedback,form}/`:

- **CVA** (`class-variance-authority`) defines type-safe variant maps
- **cn()** (`src/lib/utils.ts`) merges classes via `clsx` + `tailwind-merge`
- Each component exports the component, its variants function, and its props type
- Stories (`.stories.tsx`) and tests (`.test.tsx`) are co-located with components
- All components are re-exported from `src/components/index.ts`

### Testing

Vitest is configured with two projects in `vite.config.ts`:
- **`unit`** — jsdom environment, `@testing-library/react`, files matching `src/**/*.test.{ts,tsx}`
- **`storybook`** — Playwright browser, runs Storybook component tests

### Path Aliases

- `@/*` → `./src/*` (configured in both `tsconfig.app.json` and `vite.config.ts`)
