# UI Components

This folder contains reusable UI components following the Atomic Design pattern.

## Structure

- **atoms/** - Basic building blocks (Button, Input, Typography, etc.)
- **molecules/** - Combinations of atoms (Card, Modal, Form fields, etc.)

## Guidelines

1. All components should be in TypeScript
2. Use Tailwind CSS for styling
3. Interactive components need `'use client'` directive
4. Add JSDoc comments for documentation
5. Export components with `.component.tsx` suffix

## Example Atom Component

```tsx
// Button.component.tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children }: ButtonProps) {
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
  };

  return (
    <button className={`rounded-md px-4 py-2 font-medium transition-colors ${variants[variant]}`}>
      {children}
    </button>
  );
}
```
