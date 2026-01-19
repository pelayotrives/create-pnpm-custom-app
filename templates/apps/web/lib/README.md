# Lib Folder

This folder contains utility functions, API clients, and helper modules.

## Purpose

- **API Clients**: Functions to interact with the backend API
- **Utilities**: Helper functions used across the application
- **Constants**: Shared constants and configuration
- **Helpers**: Common helper functions

## Example Structure

```txt
lib/
├── api.ts           # Generic API client
├── utils.ts         # Utility functions
├── constants.ts     # App constants
└── services/
    ├── auth.ts      # Authentication service
    └── users.ts     # Users service
```

## Example API Client

```typescript
// api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';

export async function fetcher<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}
```
