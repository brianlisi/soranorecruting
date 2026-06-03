---
name: Vite client env vars on Replit
description: How VITE_-prefixed env vars reach import.meta.env in this monorepo's Vite artifacts, and the restart requirement.
---

# Vite client env vars on Replit

Setting a Replit **shared** environment variable whose name starts with `VITE_`
(e.g. `VITE_GA_MEASUREMENT_ID`) makes it available to client code as
`import.meta.env.VITE_...` — no `.env` file is needed. Vite reads it from the
process environment and inlines the literal value into the served/built bundle.

**Why:** Vite only exposes `VITE_`-prefixed vars to the browser, and it does so
at dev-serve / build time, not at runtime. The value is baked into the bundle.

**How to apply:**
- After setting/changing such a var, **restart the artifact's web workflow** — the
  running Vite process won't see it otherwise (it's read at startup, then inlined).
- Use this for public client-side config (analytics IDs, public keys). It is NOT a
  secret mechanism: the value ends up visible in the shipped JS, so never put
  anything sensitive behind a `VITE_` name.
- Verify quickly by curling the transformed module through the preview proxy, e.g.
  `curl -s http://localhost:80/src/lib/analytics.ts` — Vite prints the resolved
  `import.meta.env` object at the top.
