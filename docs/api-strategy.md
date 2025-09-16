# API Layer and Data Fetching Strategy

- Use `@saas/utils` `apiClient(baseUrl, getToken)` for REST calls.
- Inject tenant via `withTenant(headers, tenantId)` to set `X-Tenant-ID`.
- Establish an API gateway for external consumers; services expose internal REST/GraphQL.
- Include retries, idempotency keys for writes, and request correlation IDs.
- Real-time via WebSocket/SSE for notifications; fall back to polling with ETags.
- For React apps, prefer React Query/TanStack Query for caching, retries, and deduping.




