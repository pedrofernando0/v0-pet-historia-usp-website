# PET Historia USP Digital Archive Prototype

Interface prototype for organizing the historical archive and institutional memory of PET Historia USP.

The project presents a dashboard-style experience for browsing documents, people, reports, search flows, and historical records. It is designed as a product prototype: the current repository focuses on interface structure and user workflows, with sample/static data used to represent the intended experience.

## What It Includes

- Dashboard for document counts, historical timeline, recent records, and quick actions
- Document catalog interface for archive material and metadata
- Advanced search flow for structured discovery
- People profiles and reports modules
- Responsive UI built with reusable React components

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui-style components
- Recharts

## Run Locally

```bash
pnpm install
pnpm dev
```

For a production build:

```bash
pnpm build
pnpm start
```

## Project Status

This is a public UI prototype, not a production archive system. The codebase is useful for evaluating product direction, interface organization, and the proposed information architecture for a PET Historia USP digital archive.

## Repository Notes

- The app currently uses representative sample data in the interface.
- The repository was originally generated from a visual prototyping workflow and has been documented here as a standalone public project.
- Future production work should connect the interface to persistent data, authentication, permissions, and an ingestion workflow for archival records.
