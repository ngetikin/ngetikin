# Repository Guidelines

## Project Structure & Module Organization
- Next.js 15 app in `src/app`; `page.tsx` holds the landing page, `layout.tsx` wraps global UI, and `globals.css` carries Tailwind v4 styles.
- Static assets live in `public`; favicons already reside in `src/app/favicon.ico`.
- Config roots sit at repo top: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, and `postcss.config.mjs`.

## Build, Test, and Development Commands
- `npm run dev` — start the dev server with Turbopack on `http://localhost:3000`.
- `npm run build` — production build using Turbopack (mirrors deploy behavior).
- `npm start` — run the compiled app locally.
- `npm run lint` — run ESLint with the Next.js config; fix warnings before sending PRs.

## Coding Style & Naming Conventions
- TypeScript throughout; prefer explicit types on public exports and component props.
- Components: use PascalCase filenames (e.g., `HeroSection.tsx`); hooks in `useX.ts`.
- CSS via Tailwind v4 in `globals.css` or inline class names; keep utility groupings consistent by purpose (layout → spacing → color → state).
- Imports: absolute paths not configured—use relative paths from the file.
- Indentation: 2 spaces; keep files formatted with the repo ESLint defaults.

## Testing Guidelines
- No test harness is present yet; add tests when introducing logic beyond simple rendering.
- Prefer lightweight React testing (e.g., `@testing-library/react` + `vitest`) and colocate specs as `*.test.tsx` next to components.
- Cover success and failure states for UI that handles user input or async data.

## Commit & Pull Request Guidelines
- Commit messages in this repo are short and imperative (e.g., “Add home hero copy”); keep them scoped to one change set.
- For pull requests: describe intent, summarize key changes, link any issues, and include screenshots or recordings for UI updates.
- Ensure `npm run lint` passes and builds succeed before requesting review.

## Security & Configuration Tips
- Environment variables for future features should be loaded via Next.js conventions (`.env.local`, prefix client-safe vars with `NEXT_PUBLIC_`).
- Avoid committing secrets; use placeholders in config and document required keys in PR descriptions.
