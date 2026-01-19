import { FastifyRequest, FastifyReply } from 'fastify';

/**
 * Example Middleware
 * 
 * Middlewares (preHandlers in Fastify) run before route handlers.
 * They can modify requests, perform authentication, logging, etc.
 * 
 * @remarks
 * Common middleware uses:
 * - Authentication/Authorization
 * - Request validation
 * - Logging
 * - Rate limiting
 * - Request transformation
 * 
 * @example
 * ```typescript
 * // Authentication Middleware
 * export async function authenticate(
 *   request: FastifyRequest,
 *   reply: FastifyReply
 * ) {
 *   try {
 *     await request.jwtVerify();
 *   } catch (err) {
 *     reply.status(401).send({ error: 'Unauthorized' });
 *   }
 * }
 * 
 * // Admin Check Middleware
 * export async function requireAdmin(
 *   request: FastifyRequest,
 *   reply: FastifyReply
 * ) {
 *   if (request.user?.role !== 'admin') {
 *     reply.status(403).send({ error: 'Forbidden: Admin access required' });
 *   }
 * }
 * ```
 * 
 * Usage in routes:
 * ```typescript
 * app.get('/admin/users', {
 *   preHandler: [authenticate, requireAdmin],
 *   handler: async (request, reply) => {
 *     // Only authenticated admins reach here
 *   },
 * });
 * ```
 * 
 * Or register globally:
 * ```typescript
 * app.addHook('preHandler', authenticate);
 * ```
 */

export async function exampleMiddleware(
  request: FastifyRequest,
  _reply: FastifyReply
) {
  // Example: Log all requests
  request.log.info(`${request.method} ${request.url}`);
}

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.status(401).send({ error: 'Unauthorized' });
  }
}
