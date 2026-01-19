/**
 * Test Mocks
 * 
 * Mock data and functions for testing.
 * 
 * @example
 * ```typescript
 * // Mock user data
 * export const mockUser = {
 *   id: '507f1f77bcf86cd799439011',
 *   email: 'test@example.com',
 *   name: 'Test User',
 *   role: 'user',
 *   createdAt: new Date('2024-01-01'),
 *   updatedAt: new Date('2024-01-01'),
 * };
 * 
 * // Mock service response
 * export const mockUserService = {
 *   findUserById: jest.fn().mockResolvedValue(mockUser),
 *   createUser: jest.fn().mockResolvedValue(mockUser),
 * };
 * ```
 */

export const mockHealthResponse = {
  status: 'ok',
  timestamp: '2024-01-01T00:00:00.000Z',
};
