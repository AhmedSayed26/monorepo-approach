# Multi-tenant SaaS Dashboard (Monorepo)

This monorepo hosts the multi-tenant SaaS dashboard platform. It is organized into apps, services, and shared packages.

## Structure

- apps/
  - dashboard/: Main web dashboard for organizations
- services/
  - auth/: Authentication and identity management service
  - billing/: Billing and subscriptions service
  - notifications/: Real-time notifications service
  - analytics/: Analytics and event processing service
- packages/
  - ui/: Shared UI component library
  - utils/: Shared utilities and helpers
  - types/: Shared TypeScript types and schema
- configs/
  - env/: Environment configuration templates and docs
  - feature-flags/: Feature flag definitions and strategies
- scripts/: Developer scripts (bootstrap, dev)
- .github/workflows/: CI pipelines

## Getting Started

- Install Node (see .nvmrc) and pnpm
- pnpm install
- pnpm -w dev

## Workspaces

This repo uses pnpm workspaces and Turbo for task running.
