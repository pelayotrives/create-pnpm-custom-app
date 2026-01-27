import '@fastify/jwt';

/**
 * Extend Fastify types with custom properties
 *
 * This file augments Fastify's type definitions to include custom properties
 * like user authentication data from JWT.
 *
 * @example
 * ```typescript
 * declare module '@fastify/jwt' {
 *   interface FastifyJWT {
 *     user: {
 *       id: string;
 *       email: string;
 *       role: 'user' | 'admin';
 *     };
 *   }
 * }
 * ```
 *
 * This allows TypeScript to recognize `request.user` in route handlers:
 * ```typescript
 * app.get('/profile', {
 *   preHandler: [authenticate],
 *   handler: async (request) => {
 *     // TypeScript knows request.user has id, email, role
 *     const userId = request.user.id;
 *     return { userId };
 *   },
 * });
 * ```
 */

declare module '@fastify/jwt' {
  interface FastifyJWT {
    user: {
      id: string;
      // Add your JWT payload properties here
      // email?: string;
      // role?: string;
    };
  }
}
