# Foundation Starseed

Foundation Starseed is a token-driven React design system built with TypeScript, Tailwind CSS 4, Storybook, and Vitest. It provides accessible, composable UI primitives backed by a Style Dictionary token pipeline.

## Tech Stack
- React 19 + TypeScript 5.9
- Vite 7 for dev and production builds
- Tailwind CSS 4 with `@theme` token mapping
- Style Dictionary 5 for token compilation
- CVA for type-safe component variants
- Storybook 10 for component development and docs
- Vitest 4 + Testing Library for tests

## Getting Started
```bash
corepack enable
pnpm install
pnpm tokens:build
pnpm dev
```

Run `pnpm storybook` to inspect components in isolation on `http://localhost:6006`.

## Scripts
| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Vite dev server |
| `pnpm build` | Run TypeScript checks and create the production bundle |
| `pnpm preview` | Preview the built app locally |
| `pnpm lint` | Run ESLint across the repository |
| `pnpm test` | Run unit tests once with Vitest |
| `pnpm test:watch` | Run unit tests in watch mode |
| `pnpm storybook` | Start Storybook on port `6006` |
| `pnpm build-storybook` | Build the static Storybook site |
| `pnpm tokens:build` | Rebuild design tokens from `tokens/src/*.json` |

## Architecture

### Design Token Pipeline
Token files in `tokens/src/` are the source of truth for color, typography, spacing, radius, shadow, and motion. Running `pnpm tokens:build` generates:

- `tokens/build/css/variables.css` with `--ds-*` CSS variables
- `tokens/build/js/tokens.{js,d.ts}` for JavaScript and TypeScript consumption

Those variables are imported in `src/styles/globals.css` and mapped into Tailwind theme tokens such as `bg-brand-primary`, `text-neutral-500`, and `rounded-lg`.

### Component Pattern
Components live in `src/components/` and follow the established `forwardRef + cva + cn()` pattern:

- `src/components/ui` for primitives such as `Button`, `Input`, `Card`, and `Badge`
- `src/components/layout` for layout primitives such as `Stack` and `Container`
- `src/components/feedback` for status messaging such as `Alert`

Each component is colocated with `Component.test.tsx` and `Component.stories.tsx`, and public exports are centralized in `src/components/index.ts`.

### Path Alias
Use `@/` for imports from `src/`, configured in `vite.config.ts` and `tsconfig.app.json`.

## Testing
Vitest is configured with:

- a `unit` project using `jsdom` and Testing Library
- a `storybook` browser project using Playwright

Run a single unit test file with:

```bash
pnpm exec vitest run --project unit src/components/ui/Button.test.tsx
```

For UI changes, update stories and tests together.

## Project Structure
```text
src/
  components/    UI, layout, and feedback components
  lib/           Shared utilities such as `cn()`
  styles/        Global styles and Tailwind theme mapping
  test/          Vitest setup
tokens/
  src/           Token source files
  build/         Generated CSS variables and JS outputs
.storybook/      Storybook configuration
```

## License
Private repository for internal use.
