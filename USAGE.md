# Using create-pnpm-custom-app CLI

## Installation

### Option 1: Use with npx (Recommended)

```bash
npx create-pnpm-custom-app my-project
```

### Option 2: Global Installation

```bash
pnpm add -g create-pnpm-custom-app
create-pnpm-custom-app my-project
```

### Option 3: Local Testing (Development)

```bash
node /path/to/create-pnpm-custom-app/bin/cli.js my-project
```

## Usage

### Basic Usage

```bash
create-pnpm-custom-app my-project
```

### With Project Name Prompt

If you don't provide a project name, you'll be prompted:

```bash
create-pnpm-custom-app
? What is your project name? › my-app
```

## After Project Creation

1. **Navigate to project:**

   ```bash
   cd my-project
   ```

2. **Install dependencies (if not auto-installed):**

   ```bash
   pnpm install
   ```

3. **Configure environment variables:**

   ```bash
   # Frontend
   cp apps/web/.env.example apps/web/.env.local
   # Edit apps/web/.env.local

   # Backend
   cp apps/api/.env.example apps/api/.env
   # Edit apps/api/.env
   ```

4. **Start development:**

   ```bash
   # Frontend
   pnpm --filter web dev

   # Backend (in separate terminal)
   pnpm --filter api dev
   ```

## Environment Configuration

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:3002
```

### Backend (.env)

```env
PORT=3002
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/your-database
JWT_SECRET=your-super-secret-jwt-key-change-this
BCRYPT_ROUNDS=10
CORS_ORIGIN=http://localhost:3000
```

## Verification

### Test Frontend

```bash
cd apps/web
pnpm run build
# Should build successfully
```

### Test Backend

```bash
cd apps/api
pnpm run lint
pnpm run test
# Should pass all tests
```

### Test API Docs

Start the backend and visit: <http://localhost:3002/docs>

## Troubleshooting

### Issue: "Cannot find module"

**Solution:** Make sure you installed dependencies:

```bash
pnpm install
```

### Issue: "Port already in use"

**Solution:** Change ports in .env files:

- Frontend: Default 3000
- Backend: Default 3002

### Issue: "MongoDB connection failed"

**Solution:**

1. Ensure MongoDB is running locally, or
2. Use MongoDB Atlas connection string

```bash
# Check MongoDB status (macOS)
brew services list | grep mongodb
```

### Issue: ESLint errors after creation

**Solution:** Run lint fix:

```bash
pnpm run lint --fix
```

## Publishing Your Own Version

1. **Clone and modify:**

   ```bash
   git clone https://github.com/your-repo/create-pnpm-custom-app
   cd create-pnpm-custom-app
   ```

2. **Update package.json:**

   ```json
   {
     "name": "create-your-app",
     "version": "1.0.0",
     "author": "Your Name"
   }
   ```

3. **Publish to npm:**

   ```bash
   npm login
   npm publish
   ```

4. **Use it:**

   ```bash
   npx create-your-app my-project
   ```

## What Gets Created

```txt
my-project/
├── .github/
│   └── copilot-instructions.md  # AI coding guidelines
├── .vscode/
│   └── settings.json            # Editor configuration
├── apps/
│   ├── web/                     # Next.js frontend
│   │   ├── app/                 # App router pages
│   │   ├── components/          # React components
│   │   ├── i18n/                # Internationalization
│   │   ├── messages/            # Translations (en/es)
│   │   ├── hooks/               # Custom hooks
│   │   ├── lib/                 # Utilities
│   │   └── public/              # Static assets
│   └── api/                     # Fastify backend
│       ├── src/
│       │   ├── config/          # Configuration
│       │   ├── db/              # Database connection
│       │   ├── middlewares/     # Custom middlewares
│       │   ├── models/          # Mongoose models
│       │   ├── routes/          # API routes
│       │   ├── schemas/         # Swagger schemas
│       │   ├── services/        # Business logic
│       │   ├── tests/           # Jest tests
│       │   └── types/           # TypeScript types
│       └── package.json
├── packages/
│   └── shared/                  # Shared TypeScript types
├── docs/                        # Documentation
├── pnpm-workspace.yaml          # pnpm workspace config
├── package.json                 # Root package.json
├── .nvmrc                       # Node version
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

## Next Steps

After creating your project:

1. ✅ Read `README.md` in your project
2. ✅ Check `CONTRIBUTING.md` for development guidelines
3. ✅ Review `.github/copilot-instructions.md` for AI coding assistance
4. ✅ Customize `globals.css` for your brand colors
5. ✅ Add your MongoDB models in `apps/api/src/models/`
6. ✅ Create API routes in `apps/api/src/routes/`
7. ✅ Build UI components in `apps/web/app/components/`
8. ✅ Add translations in `apps/web/messages/`

## Support

For issues or questions:

- Check the generated README.md in your project
- Review documentation in the `/docs` folder
- Open an issue on GitHub

---

Happy coding! 🚀
