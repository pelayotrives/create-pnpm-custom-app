import { describe, it, expect, beforeAll, afterAll } from '@jest/globals';
import { buildApp } from '../app.js';
// import { connectMongo, disconnectMongo } from '../db/mongo.js';
import type { FastifyInstance } from 'fastify';

/**
 * Example Test Suite
 * 
 * This file demonstrates how to write tests for your API endpoints.
 * 
 * @remarks
 * Testing best practices:
 * - Use descriptive test names
 * - Test both success and error cases
 * - Mock external dependencies
 * - Clean up test data after each test
 * - Use beforeAll/afterAll for setup/teardown
 * 
 * @example
 * ```typescript
 * describe('User API', () => {
 *   let app: FastifyInstance;
 * 
 *   beforeAll(async () => {
 *     await connectMongo(process.env.MONGODB_URI_TEST!);
 *     app = await buildApp();
 *   });
 * 
 *   afterAll(async () => {
 *     await app.close();
 *     await disconnectMongo();
 *   });
 * 
 *   it('should create a new user', async () => {
 *     const response = await app.inject({
 *       method: 'POST',
 *       url: '/users',
 *       payload: {
 *         email: 'test@example.com',
 *         password: 'password123',
 *         name: 'Test User',
 *       },
 *     });
 * 
 *     expect(response.statusCode).toBe(201);
 *     expect(response.json()).toMatchObject({
 *       email: 'test@example.com',
 *       name: 'Test User',
 *     });
 *   });
 * 
 *   it('should return 400 for invalid email', async () => {
 *     const response = await app.inject({
 *       method: 'POST',
 *       url: '/users',
 *       payload: {
 *         email: 'invalid-email',
 *         password: 'password123',
 *       },
 *     });
 * 
 *     expect(response.statusCode).toBe(400);
 *   });
 * });
 * ```
 */

describe('Health Check API', () => {
  let app: FastifyInstance;

  beforeAll(async () => {
    app = await buildApp();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return health status', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/health',
    });

    expect(response.statusCode).toBe(200);
    const body = response.json();
    expect(body).toHaveProperty('status', 'ok');
    expect(body).toHaveProperty('timestamp');
  });
});
