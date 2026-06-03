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

## Gotchas
- **Adding a required (`NOT NULL`) column:** `drizzle-kit push` cannot add a `NOT NULL` column to a
  table that already has rows — it fails or prompts. If the existing rows are disposable test data,
  clear them first; otherwise stage it (add nullable → backfill → enforce `NOT NULL`).
- **Gating a generated GET hook with a Bearer token:** `setAuthTokenGetter` (from
  `@workspace/api-client-react`) attaches `Authorization: Bearer <token>` to every `customFetch`.
  Register the getter at **module scope**, not in a `useEffect` — the generated `useQuery` hook fires
  during the component's first render, before effects run, so an already-persisted session would race
  to a 401 and wipe its own stored credential. The getter should read live storage each call so it
  reflects login/logout without re-registration.
- **OpenAPI `enum` → orval type name:** an `enum` on property `companySize` of schema `IntakeInput`
  generates a const+union named `IntakeInputCompanySize` (exported from `@workspace/api-client-react`).
  A react-hook-form field registered as plain `string` won't be assignable to it — cast at the mutation
  call site (`values.companySize as IntakeInputCompanySize`) or type the field as the union.
  Prefer encoding fixed dropdown option sets as an `enum` in the spec so the server zod rejects
  off-list values (returns `invalid_enum_value` 400) instead of accepting arbitrary strings.
