# Foundation Starseed

A token-driven React design system built with TypeScript, Tailwind CSS v4, and Storybook. Foundation Starseed provides a set of accessible, composable UI primitives powered by a design token pipeline — from raw JSON tokens through Style Dictionary to Tailwind utility classes.

## Tech Stack

- **React 19** + **TypeScript 5.9**
- **Vite 7** — dev server & production builds
- **Tailwind CSS 4** — utility-first styling via `@theme` integration
- **Style Dictionary 5** — design token compilation
- **CVA** (class-variance-authority) — type-safe component variants
- **Storybook 10** — component development & documentation
- **Vitest 4** + **Testing Library** — unit & component testing

## Getting Started

```bash
# Install dependencies
npm install

# Build design tokens (required before first run)
npm run tokens:build

# Start the dev server
npm run dev

# Launch Storybook
npm run storybook
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | TypeScript check + production build |
| `npm run lint` | ESLint |
| `npm run test` | Unit tests (Vitest, jsdom) |
| `npm run test:watch` | Unit tests in watch mode |
| `npm run tokens:build` | Rebuild design tokens via Style Dictionary |
| `npm run storybook` | Storybook dev server on `:6006` |
| `npm run build-storybook` | Storybook static build |

## Architecture

### Design Token Pipeline

Design tokens are the single source of truth for visual properties. Raw tokens live in `tokens/src/` as JSON files:

```
tokens/src/
├── color.json
├── typography.json
├── spacing.json
├── shadow.json
├── radius.json
└── motion.json
```

Running `npm run tokens:build` compiles them through Style Dictionary into:

- **CSS custom properties** (`tokens/build/css/variables.css`) — prefixed with `--ds-*`
- **JS/TS modules** (`tokens/build/js/tokens.{js,d.ts}`)

These CSS variables are then mapped to Tailwind theme values in `src/styles/globals.css` via the `@theme` block, making them available as standard Tailwind classes (e.g., `bg-brand-primary`, `text-neutral-900`, `rounded-lg`).

### Component Pattern

All components follow the **forwardRef + CVA + cn()** pattern:

```tsx
import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const myVariants = cva('base-classes', {
  variants: { /* ... */ },
  defaultVariants: { /* ... */ },
})

const MyComponent = forwardRef<HTMLElement, Props>(
  ({ className, variant, ...props }, ref) => (
    <element className={cn(myVariants({ variant, className }))} ref={ref} {...props} />
  ),
)
```

Components are organized by category under `src/components/`:

| Category | Components |
| --- | --- |
| **ui** | Button, Input, Card, Badge |
| **layout** | Stack, Container |
| **feedback** | Alert |

Each component is co-located with its stories (`.stories.tsx`) and tests (`.test.tsx`), and re-exported from `src/components/index.ts`.

### Path Aliases

`@/*` maps to `./src/*`, configured in both `tsconfig.app.json` and `vite.config.ts`.

## Testing

Vitest is configured with two projects:

- **`unit`** — jsdom environment with `@testing-library/react` for component unit tests
- **`storybook`** — Playwright browser environment for Storybook interaction tests

Run a single test file:

```bash
npx vitest run --project unit src/components/ui/Button.test.tsx
```

## Project Structure

```
foundation-starseed/
├── tokens/
│   ├── src/             # Token source JSON files
│   ├── build/           # Compiled tokens (gitignored)
│   └── config.js        # Style Dictionary config
├── src/
│   ├── components/
│   │   ├── ui/          # Button, Input, Card, Badge
│   │   ├── layout/      # Stack, Container
│   │   ├── feedback/    # Alert
│   │   └── index.ts     # Barrel exports
│   ├── lib/
│   │   └── utils.ts     # cn() helper (clsx + tailwind-merge)
│   ├── styles/
│   │   └── globals.css  # Tailwind + token theme mapping
│   ├── App.tsx
│   └── main.tsx
├── .storybook/          # Storybook configuration
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## License

Private — internal use only.
