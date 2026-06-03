# AGENTS.md — VistaEye AI Workshop

## Project

A React + Vite SPA (hosted on GitHub Pages) for an AI workshop. Two routes:
- `/` — Marketing homepage for "VistaEye" (fictional AI ophthalmology company)
- `/mail?account=<id>` — Gmail-style email client exposing concerning internal conversations

## Accounts (login via modal on `/`)

| username | password | role |
|---|---|---|
| `data_scientist` | `retina123` | Clinical ML inbox |
| `data_engineer` | `pipeline123` | Data pipeline inbox |
| `legal_and_ethics` | `fairview123` | Governance inbox |

Passwords are plaintext in `src/mailData.json`.

## Key commands

```sh
npm run dev      # Vite dev server
npm run build    # Production build
npm run preview  # Preview production build
```

No test/lint/typecheck commands exist.

## Tech stack

- React 18, react-router-dom 6, Tailwind CSS v4
- Tailwind configured via `@tailwindcss/vite` plugin in `vite.config.js`
- Custom theme tokens defined in `src/styles.css` via `@theme` (colors: `surface`, `accent`, `gmail-*`, etc.)
- Styling is 100% Tailwind utility classes — no custom CSS except body background gradient and hero glow pseudo-elements
- Google Fonts: Fraunces (serif headings) + IBM Plex Sans (body)

## Architecture

- `src/main.jsx` — mounts `<App />`
- `src/App.jsx` — `BrowserRouter` with `/` and `/mail` routes
- `src/components/HomePage.jsx` — marketing landing page with staff login modal
- `src/components/MailPage.jsx` — 3-column Gmail layout (sidebar | thread list | reader), reads `?account=` from URL or `localStorage`
- `src/components/MailSidebar.jsx` — folder nav + account info + sign out
- `src/components/MailThreadList.jsx` — inbox thread rows
- `src/components/MailReader.jsx` — conversation view
- `src/components/StaffLoginModal.jsx` — login form overlay
- `src/mailData.json` — all email data (accounts, threads, messages)
- `src/data.js` — re-exports `accounts` and marketing claim strings

## Data shape

Each account in `mailData.json.accounts` has:
- `displayName`, `username`, `password`, `inboxLabel`
- `threads[]` — each with `id`, `subject`, `preview`, `participants[]`, `messages[]`, `concern` (unused)

## Key constraints

- All hospital/trust names must be fictional (no real NHS trusts or hospitals)
- Email conversations should sound like believable staff members cutting corners
- `base: './'` in Vite config — required for GitHub Pages relative paths
- No server-side logic — purely client-side SPA
