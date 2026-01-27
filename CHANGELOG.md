# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.5] - 2026-01-27

### Added in 1.0.5

- CHANGELOG.md file to track version history and changes

## [1.0.4] - 2026-01-27

### Added in 1.0.4

- Dark theme with gradient background (black → gray-900 → gray-800)
- Quick Start command reference section in landing page
- CSS animations (fade-in-down for title, fade-in for description)
- Monospace font styling for command examples

### Changed in 1.0.4

- Updated 40+ dependencies to latest versions:
  - Next.js: 16.1.4 → 16.1.5
  - React: 19.0.0 → 19.2.4
  - TypeScript: 5.7.3 → 5.9.3
  - Prettier: 3.4.2 → 3.8.1
  - Tailwind CSS: 4.1.14 → 4.1.18
  - Fastify: 5.2.0 → 5.7.2
  - Mongoose: 8.9.3 → 9.1.5
  - Jest: 29.7.0 → 30.2.0
  - CLI dependencies: chalk, commander, fs-extra, ora updated
- Simplified navigation to Home link only
- Adjusted card spacing (mt-16 → mt-10)
- Fixed @types/node to v22.19.7 (compatible with Node 20 LTS)

### Fixed in 1.0.4

- JSX placeholder compilation error in Nav component
- All template files formatted with Prettier
- Consistent dark theme across Nav, Footer, and main page

## [1.0.3] - 2026-01-21

### Fixed in 1.0.3

- Updated pnpm version to 9 in CI workflow

## [1.0.2] - 2026-01-21

### Changed in 1.0.2

- Improved project documentation
- Updated README with better examples

## [1.0.1] - 2026-01-19

### Fixed in 1.0.1

- Minor bug fixes in template generation

## [1.0.0] - 2026-01-19

### Added

- Initial release
- Next.js 16 with App Router
- Fastify 5 backend with MongoDB
- pnpm workspaces monorepo
- TypeScript support across all packages
- Internationalization with next-intl (English/Spanish)
- Tailwind CSS 4
- JWT authentication
- Swagger/OpenAPI documentation
- Jest testing setup
- GitHub Actions CI/CD
