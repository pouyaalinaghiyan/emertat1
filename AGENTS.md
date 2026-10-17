# Emertat — Base44 Dev Environment

## What this is
A NestJS flight booking API (`@nestjs/mongoose` + MongoDB). The repository was
imported with **no application source committed** — only `package.json`,
`tsconfig.json`, `docker-compose.yml`, `backend/Dockerfile`, and a stray partial
`backend/node_modules`. The `src/` NestJS application was missing, which is why
the project failed to start. A minimal NestJS app (`src/main.ts`,
`src/app.module.ts`, `src/app.controller.ts`, `src/app.service.ts`) plus
`nest-cli.json` were added so the project boots and serves a working preview.

## Run it
```
docker compose -f docker-compose.base44.yml up -d
```
- `web` (node:22-alpine): bind-mounts the repo at `/app`, runs `npm ci` then
  `npm run start:dev` (Nest watch mode, polling enabled for the bind mount) on
  port 3000. Source edits hot-reload.
- `mongo` (mongo:6): local DB at `mongodb://mongo:27017/emertatdb`, wired to the
  app via `MONGO_URI`.

## Verify
- `curl http://localhost:3000/health` → `{"status":"ok"}`
- `curl http://localhost:3000/` → `{"name":"Emertat Flight Booking API","status":"running"}`

## Notes / quirks
- The repo's own `docker-compose.yml` references `./frontend` and `backend/Dockerfile`
  references an `api/` directory — neither exists. They are leftover/unused; the
  Base44 dev compose (`docker-compose.base44.yml`) is the authoritative runbook.
- NestJS 11 deps require Node ≥ 20; the original `backend/Dockerfile` used
  node:18 (unsupported). The Base44 compose uses node:22-alpine.
- `backend/node_modules` was committed to git history (38 files). A `.gitignore`
  was added to prevent future `node_modules`/`dist` commits; the already-tracked
  stray files were left in place to keep this change minimal.
- No external secrets are required to boot.
