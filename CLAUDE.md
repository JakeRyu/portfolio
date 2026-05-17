# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Next.js dev server
- `npm run build` — production build
- `npm start` — run the production build
- `npm run lint` — run `next lint`

There is no test runner configured.

## Environment

`actions/sendEmail.ts` requires `RESEND_API_KEY` at runtime. Without it, the contact form server action will fail.

## Architecture

Next.js 13 **App Router** single-page portfolio. The entire site is one route (`app/page.tsx`) composed of section components rendered in order: `Intro → About → Projects → Skills → Experience → Contact`. Navigation works via in-page anchors (`#home`, `#about`, …), not routing.

### Two cross-cutting client contexts (both mounted in `app/layout.tsx`)

1. **`context/active-section-context.tsx`** — tracks which section is currently in view so the header can highlight the active link. Each section component calls the `useSectionInView(name, threshold)` hook from `lib/hooks.ts`, which wires up `react-intersection-observer` and updates the context when the section is sufficiently visible. The context also stores `timeOfLastClick`: when a user clicks a nav link, the observer is suppressed for ~1s so the click-driven highlight isn't immediately overwritten by scroll detection. Keep this debounce in mind when changing nav behavior.

2. **`context/theme-context.tsx`** — light/dark toggle. Persists to `localStorage` under key `"theme"` and falls back to `prefers-color-scheme`. Toggling adds/removes the `dark` class on `<html>`; Tailwind's `dark:` variants depend on this.

### Content lives in `lib/data.ts`

`links`, `experiencesData`, `projectsData`, `skillsData`, etc. are exported from a single module and consumed by the section components. The `links` array is also the source of truth for the `SectionName` type (`lib/types.ts`) — adding a section means adding it to `links` first so the type narrows correctly.

### Server actions

`actions/sendEmail.ts` is a `"use server"` action invoked by the contact form. It validates with `lib/utils.ts#validateString`, then sends a React Email template (`email/contact-form-email.tsx`) via Resend. Errors are surfaced through `getErrorMessage` and returned to the client as `{ error }`.

### Path alias

`@/*` resolves to the project root (see `tsconfig.json`). Use `@/components/...`, `@/lib/...`, `@/public/...` rather than relative paths.

### Styling & animation

Tailwind CSS with `darkMode: "class"`. Framer Motion is used throughout section components for scroll-in and hover animations — when editing sections, preserve the `motion.*` wrappers and their `initial`/`whileInView` patterns rather than replacing them with plain elements.
