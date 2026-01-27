/**
 * Swagger Schema Definitions
 *
 * This file contains reusable schema definitions for Swagger/OpenAPI documentation.
 *
 * @remarks
 * - Define request/response schemas here
 * - Use these schemas in your route definitions
 * - Keep schemas organized by feature/entity
 *
 * @example
 * ```typescript
 * export const UserSchema = {
 *   type: 'object',
 *   properties: {
 *     id: { type: 'string' },
 *     email: { type: 'string' },
 *     name: { type: 'string' },
 *   },
 *   required: ['id', 'email', 'name'],
 * };
 *
 * export const CreateUserSchema = {
 *   type: 'object',
 *   properties: {
 *     email: { type: 'string' },
 *     password: { type: 'string' },
 *     name: { type: 'string' },
 *   },
 *   required: ['email', 'password', 'name'],
 * };
 * ```
 *
 * Usage in routes:
 * ```typescript
 * app.post('/users', {
 *   schema: {
 *     body: CreateUserSchema,
 *     response: {
 *       201: UserSchema,
 *     },
 *   },
 *   handler: async (request, reply) => {
 *     // ...
 *   },
 * });
 * ```
 */

export const HealthCheckSchema = {
  type: 'object',
  properties: {
    status: { type: 'string' },
    timestamp: { type: 'string' },
  },
};

// Add your schemas here
