# Repository Guidelines

## Project Structure & Module Organization
This repository is a React 19 + TypeScript + Vite component library/design system. Source code lives in `src/`, with components grouped by domain in `src/components/ui`, `src/components/layout`, and `src/components/feedback`. Shared utilities are in `src/lib`, global styles in `src/styles`, and test setup in `src/test/setup.ts`. Static assets live in `public/` and `src/assets/`. Design tokens are built from `tokens/`. Storybook configuration is in `.storybook/`, and production output is generated into `dist/`.

## Build, Test, and Development Commands
- `npm run dev`: start the Vite dev server for local development.
- `npm run build`: run TypeScript project builds, then create the production bundle.
- `npm run preview`: serve the built app locally for a final smoke check.
- `npm run lint`: run ESLint across the repository.
- `npm run test`: run the Vitest `unit` project once.
- `npm run test:watch`: run unit tests in watch mode.
- `npm run storybook`: start Storybook on port `6006`.
- `npm run build-storybook`: build the static Storybook site.
- `npm run tokens:build`: regenerate design tokens with Style Dictionary.

## Coding Style & Naming Conventions
Follow the existing TypeScript and React patterns: functional components, named exports, and path aliases via `@/` for `src`. Use PascalCase for component files (`Button.tsx`), colocated tests as `Component.test.tsx`, and colocated stories as `Component.stories.tsx`. Formatting in the current codebase uses 2-space indentation, single quotes, and semicolon-free statements. Keep variant helpers and exported prop types alongside each component.

## Testing Guidelines
Vitest and Testing Library are the default test stack, with `jsdom` for unit tests and Storybook browser tests configured through Playwright. Add or update tests for every component behavior change, especially props, variants, and accessibility-sensitive states. Prefer colocated tests under `src/**/*.test.tsx`. Run `npm run test` before opening a PR; run `npm run storybook` when changing stories or visual states.

## Commit & Pull Request Guidelines
Recent history uses short, imperative commit subjects such as `Add GEMINI.md with project context and instructions`. Keep commits focused and descriptive. Pull requests should include a brief summary, testing notes, and linked issues when applicable. For UI changes, attach screenshots or Storybook references so reviewers can verify visual impact quickly.

## Security & Configuration Tips
Do not commit secrets or local environment files. Treat `dist/` as generated output, not source. If you change tokens, rebuild them and verify dependent components before merging.
