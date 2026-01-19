# GitHub Copilot Instructions for [Project Name]

## Project Overview

[Brief description of your project]

**Tech Stack:**
- **Frontend**: Next.js 16+ (App Router), React 19+, TypeScript
- **Backend**: Fastify API with MongoDB
- **Monorepo**: pnpm workspace (apps/web, apps/api, packages/shared)
- **Styling**: Tailwind CSS 4 with custom design system
- **i18n**: next-intl (English/Spanish)

---

## Architecture Patterns

### Component Structure (Atomic Design)

- **Atoms**: `/app/components/ui/atoms/` - Basic UI elements (Button, Input, etc.)
- **Molecules**: `/app/components/ui/molecules/` - Composite components
- **Layout**: `/app/components/layout/` - Navigation, Footer, etc.

### Component Guidelines

1. **All Typography components MUST use `forwardRef`** for animation library compatibility
2. **Interactive components MUST have `'use client'`** directive
3. **Server components by default** - only add 'use client' when necessary
4. Use **TypeScript strictly** - avoid `any` types, define all interfaces
5. **Tailwind only** - no inline styles or CSS modules
6. Use **cn()** utility for className merging

---

## File Naming Conventions

- Components: `ComponentName.component.tsx`
- Pages: `page.tsx` (Next.js App Router)
- Layouts: `layout.tsx`
- Interfaces: `name.interface.ts`
- Utilities: `name.ts`

---

## Code Style

### TypeScript

```typescript
// Prefer interfaces over types
interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

// Use Record for variant mappings
const variantClasses: Record<string, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
};
```

### React Patterns

```typescript
// Use forwardRef for components that need refs
export const Component = forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn("base-class", className)} {...props}>
      {children}
    </div>
  )
);
Component.displayName = "Component";

// Use 'use client' for interactive components
("use client");
import { useState } from "react";
```

### Tailwind CSS

- Use responsive prefixes: `sm:`, `md:`, `lg:`
- Dark mode support with theme provider
- Custom colors: Use design tokens (bg-primary, text-muted-foreground, etc.)
- Spacing: Use Tailwind scale (p-4, gap-6, etc.)

---

## Translations (next-intl)

- Files: `/messages/en.json` and `/messages/es.json`
- Usage: `const t = useTranslations('namespace');`
- Structure: Nested keys `{ "auth": { "login": { "title": "Sign in" } } }`
- Always add both English and Spanish translations

---

## API Integration

- Services in `/lib/` (e.g., auth.ts, api.ts)
- Use `fetch` with proper error handling
- Handle errors with toast notifications
- Types from `@{{PROJECT_NAME}}/shared` package

---

## State Management

- Use React hooks for local state
- Global state: Context API or state management library of choice
- Keep state management simple and predictable

---

## Performance

- Use `loading.tsx` for loading states
- Implement proper error boundaries
- Lazy load heavy components when possible
- Optimize images with Next.js Image component

---

## Common Mistakes to Avoid

❌ DON'T use inline styles - only Tailwind classes
❌ DON'T forget 'use client' on interactive components
❌ DON'T use `any` type
❌ DON'T mix Spanish and English in same file
❌ DON'T create CSS modules - Tailwind only

---

## When Making Changes

1. Read existing file structure first
2. Follow established patterns
3. Update translations if adding new text
4. Run `pnpm run lint` to verify
5. Run `pnpm run build` for final verification
6. Check for TypeScript errors
7. Ensure mobile responsiveness

---

## Priority Order for Edits

1. Fix TypeScript errors
2. Fix build errors
3. Add missing 'use client' directives
4. Improve accessibility
5. Optimize performance
6. Enhance UX

---

## Documentation & Communication

- **All code comments and JSDoc must be in English**
- Code itself (variable names, function names) in English
- Translation files (en.json, es.json) in their respective languages
- Add JSDoc comments for all functions/components:
  - Description of purpose
  - `@param` for each parameter
  - `@returns` for return value
  - `@example` for complex usage

---

## Backend API Guidelines

- When creating new API routes, update Swagger documentation
- Follow existing Swagger schema patterns
- Include request/response examples
- Document all query parameters, headers, and body fields

---

## Other Notes

- ALWAYS prioritize accessibility (a11y)
- AVOID using emojis in code comments or documentation
- Update this file when project standards or patterns change
