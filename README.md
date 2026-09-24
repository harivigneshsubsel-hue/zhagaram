# ZHAGARAM EXIM LLP Website

A responsive Vite + React + TypeScript website for ZHAGARAM EXIM LLP, with a PostgreSQL/Prisma catalog, email enquiries, customer reviews, and an authenticated admin catalog/review workspace.

## Project structure

- `src/` — React components, routes, data, auth, catalog API helpers, and styles
- `public/` — production website assets
- `server/` — Express API, authentication, database, and mail services
- `api/` — Vercel API entry points
- `prisma/` — Prisma schema and seed data
- `migrations/` — database migrations
- `screenshots/` — organized QA/reference screenshots
- `docs/requirements/` — project requirements and source documents
- `scripts/` — build, migration, preview, and QA helpers

## Local setup

1. Copy `.env.example` to `.env` and fill in the database, JWT, admin, and SMTP values.
2. Install dependencies with `npm ci`.
3. Generate Prisma Client with `npm run db:generate`.
4. Apply the database migrations with `npm run db:migrate:dev` when developing against PostgreSQL.
5. Seed the catalog/admin account with `npm run db:seed` when required.
6. Start the website with `npm run dev`.

## Useful commands

```bash
npm run dev
npm run typecheck
npm run lint
npm run test
npm run build
```

The production enquiry flow validates the same supplier/customer form shape on the server before sending the internal notification email. A customer confirmation email is sent as a secondary notification and does not turn a successfully delivered internal enquiry into a failed submission if the confirmation mail is unavailable.

## UI preservation

The cleanup pass keeps the existing page structure, spacing, component hierarchy, routes, and responsive layout intact. Changes are limited to broken asset paths, data/API consistency, admin editing behaviour, form/catalog reliability, and project organization.
