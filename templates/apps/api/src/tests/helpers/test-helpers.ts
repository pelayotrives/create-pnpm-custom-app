/**
 * Test Helpers
 * 
 * Utility functions to help with testing.
 * 
 * @example
 * ```typescript
 * // Create test data
 * export function createTestUser(overrides = {}) {
 *   return {
 *     email: 'test@example.com',
 *     password: 'password123',
 *     name: 'Test User',
 *     role: 'user',
 *     ...overrides,
 *   };
 * }
 * 
 * // Generate JWT token for testing
 * export function generateTestToken(userId: string, app: FastifyInstance) {
 *   return app.jwt.sign({ id: userId });
 * }
 * 
 * // Clean up test database
 * export async function clearDatabase() {
 *   const collections = mongoose.connection.collections;
 *   for (const key in collections) {
 *     await collections[key].deleteMany({});
 *   }
 * }
 * ```
 */

export function generateRandomEmail(): string {
  return `test-${Date.now()}-${Math.random().toString(36).substring(7)}@example.com`;
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
