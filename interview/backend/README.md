# Backend

Express + TypeScript scaffold for interview prep APIs.

## Getting Started

1. `cp .env.example .env` and adjust values as needed.
2. Install deps: `npm install`.
3. Start in watch mode: `npm run dev`.

## Available Scripts

- `npm run dev` – Run the server with hot reload via `ts-node-dev`.
- `npm run build` – Emit production-ready JavaScript to `dist/`.
- `npm start` – Serve the compiled output.
- `npm run lint` – Type-check the project.

## Structure

- `src/app.ts` – Express app setup and middleware.
- `src/routes/health.ts` – Example route for uptime checks.
- `src/server.ts` – Boots the HTTP server and manages shutdown signals.
- `src/config/env.ts` – Centralized environment variable loading/validation.


