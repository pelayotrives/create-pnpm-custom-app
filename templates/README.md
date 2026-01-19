# {{PROJECT_NAME}}

> A professional full-stack monorepo with Next.js 16, Fastify, MongoDB, and TypeScript

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16.x-black.svg)](https://nextjs.org/)
[![Fastify](https://img.shields.io/badge/Fastify-5.x-green.svg)](https://www.fastify.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Building for Production](#-building-for-production)
- [Testing](#-testing)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- 🎨 **Modern UI** - Next.js 16 with App Router and React Server Components
- 🎯 **Type-Safe** - Full TypeScript coverage across frontend and backend
- 🌐 **Internationalization** - Built-in i18n support with next-intl (English/Spanish)
- 🎨 **Tailwind CSS 4** - Utility-first styling with custom design system
- 🚀 **Fast API** - Fastify backend with MongoDB and Mongoose
- 🔐 **Authentication** - JWT-based auth with secure cookie handling
- 📚 **API Documentation** - Interactive Swagger/OpenAPI documentation
- 🧪 **Testing Ready** - Jest configured for both frontend and backend
- 📦 **Monorepo** - pnpm workspaces for efficient dependency management
- 🔄 **Shared Types** - Common interfaces between frontend and backend

## 🛠 Tech Stack

### Frontend (`apps/web`)

- **Framework**: Next.js 16.1.1+ (App Router)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 4
- **i18n**: next-intl
- **State Management**: React hooks + Context API
- **Form Validation**: React Hook Form + Zod

### Backend (`apps/api`)

- **Framework**: Fastify 5+
- **Language**: TypeScript 5+
- **Database**: MongoDB + Mongoose
- **Authentication**: @fastify/jwt + bcrypt
- **Validation**: Fastify schemas
- **Documentation**: @fastify/swagger + @fastify/swagger-ui
- **Logging**: Pino
- **Testing**: Jest + Supertest

### Shared (`packages/shared`)

- TypeScript interfaces and types
- Shared utilities and constants

## 📁 Project Structure

```txt
{{PROJECT_NAME}}/
├── apps/
│   ├── web/                    # Next.js frontend
│   │   ├── app/
│   │   │   ├── [locale]/       # Internationalized routes
│   │   │   │   ├── (routes)/   # Main application routes
│   │   │   │   │   ├── layout.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   └── not-found.tsx
│   │   │   ├── api/            # API routes (if needed)
│   │   │   ├── components/     # React components
│   │   │   │   ├── layout/     # Layout components
│   │   │   │   └── ui/         # UI components
│   │   │   │       ├── atoms/  # Basic components
│   │   │   │       └── molecules/ # Composite components
│   │   │   ├── globals.css     # Global styles + Tailwind config
│   │   │   ├── layout.tsx      # Root layout
│   │   │   └── providers.tsx   # Context providers
│   │   ├── hooks/              # Custom React hooks
│   │   ├── i18n/               # Internationalization config
│   │   ├── interfaces/         # TypeScript interfaces
│   │   ├── lib/                # Utility functions and API clients
│   │   ├── messages/           # Translation files
│   │   │   ├── en.json
│   │   │   └── es.json
│   │   ├── public/             # Static assets
│   │   ├── types/              # TypeScript type definitions
│   │   └── package.json
│   │
│   └── api/                    # Fastify backend
│       ├── src/
│       │   ├── config/         # Configuration files
│       │   │   ├── config.ts   # Environment config
│       │   │   └── logger.ts   # Pino logger setup
│       │   ├── db/             # Database connection
│       │   │   └── mongo.ts    # MongoDB connection
│       │   ├── middlewares/    # Custom middlewares
│       │   ├── models/         # Mongoose models
│       │   ├── routes/         # API route handlers
│       │   ├── schemas/        # Validation and Swagger schemas
│       │   ├── services/       # Business logic services
│       │   ├── tests/          # Test files
│       │   ├── types/          # TypeScript types
│       │   ├── app.ts          # Fastify app setup
│       │   └── index.ts        # Entry point
│       └── package.json
│
├── packages/
│   └── shared/                 # Shared code between apps
│       └── src/
│           └── index.ts        # Exported types and utilities
│
├── docs/                       # Project documentation
├── .github/                    # GitHub specific files
│   └── copilot-instructions.md # AI assistant guidelines
├── .vscode/                    # VS Code settings
│   └── settings.json
├── .nvmrc                      # Node version
├── pnpm-workspace.yaml         # pnpm workspace config
├── package.json                # Root package.json
├── CONTRIBUTING.md             # Contribution guidelines
├── LICENSE                     # MIT License
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** 20+ (specified in `.nvmrc`)
- **pnpm** 9+
- **MongoDB** (local or remote instance)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/{{PROJECT_NAME}}.git
   cd {{PROJECT_NAME}}
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Configure environment variables**

   **Frontend** (`apps/web/.env.local`):

   ```env
   # API Configuration
   NEXT_PUBLIC_API_URL=http://localhost:3002

   # Add other environment variables as needed
   ```

   **Backend** (`apps/api/.env`):

   ```env
   # Server
   PORT=3002
   NODE_ENV=development

   # Database
   MONGODB_URI=mongodb://localhost:27017/your-database

   # Authentication
   JWT_SECRET=your-super-secret-jwt-key-change-this
   BCRYPT_ROUNDS=10

   # CORS
   CORS_ORIGIN=http://localhost:3000
   ```

4. **Start development servers**

   ```bash
   # Frontend (http://localhost:3000)
   pnpm --filter web dev

   # Backend (http://localhost:3002)
   pnpm --filter api dev
   ```

## 💻 Development

### Available Scripts

#### Root Level

```bash
pnpm install          # Install all dependencies
pnpm run lint         # Lint all packages
pnpm run build        # Build all packages
pnpm run test         # Run all tests
```

#### Frontend Development (`apps/web`)

```bash
pnpm --filter web dev         # Start dev server
pnpm --filter web build       # Build for production
pnpm --filter web start       # Start production server
pnpm --filter web lint        # Lint code
```

#### Backend Development (`apps/api`)

```bash
pnpm --filter api dev         # Start dev server
pnpm --filter api build       # Build TypeScript
pnpm --filter api start       # Start production server
pnpm --filter api test        # Run tests
pnpm --filter api lint        # Lint code
```

### Code Style

This project uses:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety

Configuration files:

- `.eslintrc.*` - ESLint rules
- `.prettierrc` - Prettier formatting rules
- `tsconfig.json` - TypeScript configuration

## 🏗 Building for Production

### Frontend

```bash
pnpm --filter web build
pnpm --filter web start
```

The build will be optimized for production with:

- Static page generation where possible
- Image optimization
- Code splitting
- Minification

### Backend

```bash
pnpm --filter api build
NODE_ENV=production pnpm --filter api start
```

## 🧪 Testing

### Run All Tests

```bash
pnpm run test
```

### Backend Tests

```bash
pnpm --filter api test          # Run once
pnpm --filter api test:watch    # Watch mode
pnpm --filter api test:coverage # With coverage
```

### Writing Tests

Example test structure:

```typescript
import { describe, it, expect } from '@jest/globals';

describe('Feature Name', () => {
  it('should do something', () => {
    expect(true).toBe(true);
  });
});
```

## 📚 Documentation

- **API Documentation**: Available at `http://localhost:3002/docs` when running the backend
- **Copilot Instructions**: See `.github/copilot-instructions.md` for AI-assisted development guidelines
- **Contributing Guide**: See `CONTRIBUTING.md` for contribution guidelines

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

### Quick Contribution Guide

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [Fastify](https://www.fastify.io/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Created with [create-pnpm-custom-app](https://github.com/your-username/create-pnpm-custom-app)

---

**Made with ❤️ by [Your Name]**
