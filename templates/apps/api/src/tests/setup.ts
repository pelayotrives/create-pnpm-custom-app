/**
 * Jest Test Setup
 *
 * This file runs before any tests and sets up the test environment.
 * It configures environment variables needed for testing.
 */

// Set test environment variables before any modules are loaded
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-secret-key-for-testing-only';
process.env.MONGODB_URI = 'mongodb://localhost:27017/test-db';
