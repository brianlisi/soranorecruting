---
name: API codegen workflow (orval)
description: How API request/response types, client hooks, and zod validation are generated and kept in sync in this monorepo.
---

# API codegen is spec-driven (orval)

`lib/api-spec/openapi.yaml` is the single source of truth. Running
`pnpm --filter @workspace/api-spec run codegen` regenerates three things from it:
- `@workspace/api-client-react` — react-query hooks (e.g. `useCreateIntakeSubmission`)
- `@workspace/api-zod` — zod schemas the server routes validate against (e.g. `CreateIntakeSubmissionBody`)
- TS types

**Rule:** to add/change a field OR tighten validation (min/max length, `format: email`, required),
edit `openapi.yaml` then re-run codegen. Never hand-edit files under `lib/api-zod/src/generated/`
or `lib/api-client-react` — they are overwritten.

**Why:** client and server validation stay in lockstep only because both derive from the spec.
Editing one generated side by hand silently drifts from the other.

**How to apply:** OpenAPI keywords map cleanly to zod — `minLength`→`.min()`, `maxLength`→`.max()`,
`format: email`→`.email()`, `type: ["string","null"]`→`.nullish()`. Verify after codegen by reading
`lib/api-zod/src/generated/api.ts`. Adding a new DB-backed endpoint also needs: a drizzle table in
`lib/db/src/schema/` (exported from `schema/index.ts`) + `pnpm --filter @workspace/db run push`,
a route in `artifacts/api-server/src/routes/` mounted in `routes/index.ts`.
