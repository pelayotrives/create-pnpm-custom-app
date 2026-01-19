# create-pnpm-custom-app

> A professional CLI to scaffold full-stack monorepo projects with Next.js, Fastify, and pnpm workspaces

## Features

- **Next.js 16**: Latest Next.js with App Router and React 19
- **Fastify 5**: High-performance backend API
- **MongoDB**: Mongoose ODM for database operations
- **JWT Authentication**: Secure authentication out of the box
- **i18n Ready**: Internationalization with next-intl (English/Spanish)
- **Tailwind CSS 4**: Modern utility-first styling
- **Swagger/OpenAPI**: Auto-generated API documentation
- **Testing Ready**: Jest configured for both frontend and backend
- **Monorepo**: pnpm workspaces for efficient dependency management
- **Shared Types**: TypeScript interfaces shared between apps

## Quick Start

### Recommended: Use npx (always latest version)

```bash
npx create-pnpm-custom-app@latest my-project
```

### Alternative: Global Installation

```bash
# Install globally
npm install -g create-pnpm-custom-app

# Use anywhere
create-pnpm-custom-app my-project
```

### With pnpm

```bash
pnpm create pnpm-custom-app my-project
```

## Project Structure

```txt
my-project/
├── apps/
│   ├── web/                # Next.js frontend
│   │   ├── app/
│   │   ├── i18n/
│   │   ├── messages/
│   │   └── package.json
│   └── api/                # Fastify backend
│       ├── src/
│       ├── tests/
│       └── package.json
├── packages/
│   └── shared/             # Shared types
├── docs/
├── .github/
│   └── copilot-instructions.md
└── package.json
```

## What's Included

### Frontend (Next.js)

- React 19 with Server Components
- TypeScript strict mode
- Tailwind CSS 4 with custom design system
- i18n with next-intl (Spanish/English)
- Fully responsive with mobile-first approach
- Accessibility-first components

### Backend (Fastify)

- Fastify 5 with TypeScript
- MongoDB with Mongoose
- JWT authentication (@fastify/jwt)
- Swagger/OpenAPI documentation
- CORS, rate limiting, multipart support
- Pino logger (pretty mode in dev)
- Input validation schemas
- Jest + Supertest for testing

### Monorepo Setup

- pnpm workspaces
- Shared TypeScript types
- Consistent linting and formatting
- Comprehensive documentation
- GitHub Copilot instructions

## After Creating Your Project

1. **Navigate to your project:**

   ```bash
   cd my-project
   ```

2. **Configure environment variables:**

   ```bash
   # Frontend
   cp apps/web/.env.example apps/web/.env.local
   
   # Backend
   cp apps/api/.env.example apps/api/.env
   ```

3. **Edit the environment files with your values:**
   - `apps/web/.env.local` - API URL and frontend config
   - `apps/api/.env` - MongoDB URI, JWT secret, CORS origin

4. **Start development servers:**

   ```bash
   # Terminal 1: Frontend (http://localhost:3000)
   pnpm --filter web dev
   
   # Terminal 2: Backend (http://localhost:3002)
   pnpm --filter api dev
   ```

5. **Access Swagger documentation:**
   - Open <http://localhost:3002/docs>

## Available Scripts

### Root Level

```bash
pnpm install       # Install all dependencies
pnpm run dev       # Start both apps in parallel
pnpm run build     # Build all apps
pnpm run lint      # Lint all apps
pnpm run test      # Run all tests
```

### Frontend

```bash
pnpm --filter web dev       # Development server
pnpm --filter web build     # Production build
pnpm --filter web start     # Production server
pnpm --filter web lint      # Lint code
```

### Backend

```bash
pnpm --filter api dev           # Development server
pnpm --filter api build         # Build TypeScript
pnpm --filter api start         # Production server
pnpm --filter api test          # Run tests
pnpm --filter api test:watch    # Tests in watch mode
pnpm --filter api lint          # Lint code
```

## Tech Stack

| Category | Technologies |
| ---------- | ------------- |
| **Frontend** | Next.js 16, React 19, TypeScript, Tailwind CSS 4, next-intl |
| **Backend** | Fastify 5, TypeScript, MongoDB, Mongoose, Pino |
| **Auth** | @fastify/jwt, bcrypt |
| **Testing** | Jest, Supertest |
| **Tooling** | pnpm, ESLint, Prettier, TypeScript |
| **Docs** | Swagger/OpenAPI, JSDoc |

## Requirements

- **Node.js** 20.0.0 or higher
- **pnpm** 9.0.0 or higher
- **MongoDB** (local or remote instance)

## Documentation

After creating your project, check:

- `README.md` - Project overview and setup
- `CONTRIBUTING.md` - Contribution guidelines
- `.github/copilot-instructions.md` - AI coding assistant guidelines
- `docs/` - Additional documentation

## Tips

### MongoDB Setup

**Local MongoDB:**

```bash
# macOS (Homebrew)
brew install mongodb-community
brew services start mongodb-community

# Your connection string:
MONGODB_URI=mongodb://localhost:27017/your-database
```

**MongoDB Atlas (Cloud):**

1. Sign up at <https://www.mongodb.com/cloud/atlas>
2. Create a cluster
3. Get your connection string
4. Add to `.env`: `MONGODB_URI=mongodb+srv://...`

### Customization

- **Colors**: Edit `apps/web/app/globals.css`
- **i18n**: Add/edit translations in `apps/web/messages/`
- **API Routes**: Add routes in `apps/api/src/routes/`
- **Models**: Create models in `apps/api/src/models/`
- **Components**: Add to `apps/web/app/components/`

## License

MIT

## Author

Created by Pelayo Trives

---

**Happy coding!**
