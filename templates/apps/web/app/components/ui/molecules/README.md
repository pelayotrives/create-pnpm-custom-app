# UI Molecules

Composite UI components made of atoms (Atomic Design pattern).

## Purpose

Molecules are groups of atoms that work together as a unit.

## Examples

- Form fields (label + input + error message)
- Search bar (input + button)
- Card header (title + description)
- Avatar with name

## Component Template

```tsx
// FormField.component.tsx
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium">{label}</label>
        <input
          ref={ref}
          className={cn(
            'w-full rounded-md border px-3 py-2',
            error && 'border-destructive',
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
        {helperText && <p className="text-sm text-muted-foreground">{helperText}</p>}
      </div>
    );
  }
);

FormField.displayName = 'FormField';
```
