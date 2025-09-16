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
- ---------------------------------------------------------------------
├── apps
|  ├── dashboard
|  |  ├── next-env.d.ts
|  |  ├── next.config.mjs
|  |  ├── node_modules
|  |  ├── package.json
|  |  ├── README.md
|  |  ├── src
|  |  └── tsconfig.json
|  └── marketing
|     ├── eslint.config.mjs
|     ├── next-env.d.ts
|     ├── next.config.ts
|     ├── node_modules
|     ├── package.json
|     ├── postcss.config.mjs
|     ├── public
|     ├── README.md
|     ├── src
|     └── tsconfig.json
├── configs
|  ├── env
|  |  └── README.md
|  └── feature-flags
|     └── README.md
├── docs
|  ├── api-strategy.md
|  ├── Architecture
|  ├── architecture.md
|  └── testing.md
├── node_modules
|  ├── @eslint
|  ├── @eslint-community
|  ├── @next
|  ├── @rushstack
|  ├── @typescript-eslint
├── package.json
├── packages
|  ├── testing
|  |  ├── package.json
|  |  ├── README.md
|  |  ├── src
|  |  └── tsconfig.json
|  ├── types
|  |  ├── dist
|  |  ├── package.json
|  |  ├── README.md
|  |  ├── src
|  |  └── tsconfig.json
|  ├── ui
|  |  ├── dist
|  |  ├── node_modules
|  |  ├── package.json
|  |  ├── README.md
|  |  ├── src
|  |  └── tsconfig.json
|  └── utils
|     ├── dist
|     ├── node_modules
|     ├── package.json
|     ├── README.md
|     ├── src
|     └── tsconfig.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
├── scripts
|  ├── bootstrap.ps1
|  └── dev.ps1
├── services
|  ├── analytics
|  |  ├── node_modules
|  |  ├── package.json
|  |  ├── README.md
|  |  ├── src
|  |  └── tsconfig.json
|  ├── auth
|  |  ├── node_modules
|  |  ├── package.json
|  |  ├── README.md
|  |  ├── src
|  |  └── tsconfig.json
|  ├── billing
|  |  ├── node_modules
|  |  ├── package.json
|  |  ├── README.md
|  |  ├── src
|  |  └── tsconfig.json
|  └── notifications
|     ├── node_modules
|     ├── package.json
|     ├── README.md
|     ├── src
|     └── tsconfig.json
├── tsconfig.base.json
└── turbo.json


## Getting Started

- Install Node (see .nvmrc) and pnpm
- pnpm install
- pnpm -w dev

## Workspaces

This repo uses pnpm workspaces and Turbo for task running.
