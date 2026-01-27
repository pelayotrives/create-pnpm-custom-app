/**
 * @packageDocumentation
 * Shared types, interfaces, and utilities for {{PROJECT_NAME}}
 *
 * This package provides common TypeScript definitions used across
 * both frontend (web) and backend (api) applications.
 *
 * Add your shared types, interfaces, and enums here.
 */

// ===================================================
// COMMON ENUMS
// ===================================================

/**
 * Standard HTTP status codes
 */
export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

// ===================================================
// Add your shared types below
// ===================================================

// Example:
// export interface User {
//   id: string;
//   email: string;
//   name: string;
// }
