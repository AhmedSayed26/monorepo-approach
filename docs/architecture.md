# Architecture Overview

- Monorepo with pnpm workspaces and Turbo.
- Apps: user-facing dashboards.
- Services: auth, billing, notifications, analytics (microservice-ready stubs).
- Packages: shared ui, utils, and types.
- Configs: env templates and feature flags.

## Multi-tenancy
- Tenant context via subdomain or header `X-Tenant-ID`.
- Data isolation at service/database layer; avoid cross-tenant joins.

## API Strategy
- Internal services communicate via REST/GraphQL; external gateway aggregates.
- SDK in `@utils` handles base URL, auth, retries, and tracing.

## Real-time
- Notifications via WebSocket or SSE; fall back to polling.

## Testing
- Unit: Jest/Vitest in each package.
- E2E: Playwright at app level.
- Contract: OpenAPI/Schema checks between app and services.
