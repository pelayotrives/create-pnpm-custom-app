# Contributing to {{PROJECT_NAME}}

Thank you for your interest in contributing to this project! We welcome contributions from the community.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)

## Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [project-email@example.com].

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/{{PROJECT_NAME}}.git`
3. Add upstream remote: `git remote add upstream https://github.com/original-owner/{{PROJECT_NAME}}.git`
4. Create a new branch: `git checkout -b feature/your-feature-name`

## Development Setup

### Prerequisites

- Node.js 20+ (use the version specified in `.nvmrc`)
- pnpm 9+
- MongoDB (for local development)

### Installation

```bash
# Install dependencies
pnpm install

# Copy environment files
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env

# Start development servers
pnpm --filter web dev    # Frontend on http://localhost:3000
pnpm --filter api dev    # Backend on http://localhost:3002
```

## Making Changes

### Branch Naming

- Feature: `feature/description`
- Bug fix: `fix/description`
- Documentation: `docs/description`
- Refactor: `refactor/description`

### Code Style

- Follow existing code patterns
- Use TypeScript for all new code
- Add JSDoc comments for functions and components
- Ensure your code passes linting: `pnpm run lint`
- Format code with Prettier (automatic on save if configured)

### Testing

```bash
# Run tests
pnpm run test

# Run tests in watch mode
pnpm --filter api test:watch
```

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(auth): add Google OAuth integration
fix(api): resolve MongoDB connection timeout
docs(readme): update installation instructions
```

## Pull Request Process

1. **Update documentation** - Update README.md if needed
2. **Add tests** - Ensure new features have test coverage
3. **Run quality checks**:
   ```bash
   pnpm run lint
   pnpm run build
   pnpm run test
   ```
4. **Create pull request** - Use a clear title and description
5. **Link issues** - Reference related issues in the PR description
6. **Wait for review** - Address feedback from maintainers

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe the tests you ran

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated
- [ ] All tests passing
```

## Coding Standards

### TypeScript

- Use strict TypeScript (`strict: true`)
- Avoid `any` - use proper types
- Define interfaces for props and data structures
- Use descriptive variable and function names

### React/Next.js

- Use Server Components by default
- Add `'use client'` only when necessary
- Use `forwardRef` for components that need refs
- Implement proper error boundaries
- Optimize images with Next.js Image component

### Tailwind CSS

- Use utility classes only (no custom CSS)
- Follow mobile-first responsive design
- Use design tokens from `globals.css`
- Maintain consistent spacing and sizing

### Backend/API

- Write descriptive Swagger documentation
- Validate all input with proper schemas
- Handle errors consistently
- Add JSDoc comments for all functions
- Use Mongoose models for database operations

## Questions?

If you have questions, please:
1. Check existing documentation
2. Search existing issues
3. Create a new issue with the `question` label

Thank you for contributing! 🎉
