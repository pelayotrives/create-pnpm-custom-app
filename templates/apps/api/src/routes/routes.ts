import { FastifyInstance } from 'fastify';

/**
 * Registers all API routes
 * 
 * @param app - Fastify instance
 * 
 * @remarks
 * This function registers all route modules.
 * Add your route registrations here as you create new endpoints.
 * 
 * @example
 * ```typescript
 * // Register a new route module
 * await app.register(userRoutes, { prefix: '/users' });
 * ```
 */
export default async function routes(app: FastifyInstance) {
  // Health check endpoint
  app.get('/health', {
    schema: {
      tags: ['Health'],
      description: 'Health check endpoint',
      response: {
        200: {
          description: 'Server is healthy',
          type: 'object',
          properties: {
            status: { type: 'string' },
            timestamp: { type: 'string' },
          },
        },
      },
    },
    handler: async () => {
      return {
        status: 'ok',
        timestamp: new Date().toISOString(),
      };
    },
  });

  // Example protected route (uncomment when you have auth middleware)
  // app.get('/protected', {
  //   preHandler: [app.authenticate], // JWT verification middleware
  //   handler: async (request) => {
  //     return { message: 'You are authenticated!', user: request.user };
  //   },
  // });

  // Register your route modules here:
  // await app.register(authRoutes, { prefix: '/auth' });
  // await app.register(userRoutes, { prefix: '/users' });
}
