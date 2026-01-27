/**
 * Example Service
 *
 * Services contain business logic and interact with models/database.
 * They are called by route handlers and keep routes thin.
 *
 * @remarks
 * Service responsibilities:
 * - Business logic implementation
 * - Data validation
 * - Database operations via models
 * - Error handling
 * - Data transformation
 *
 * @example
 * ```typescript
 * // User Service Example
 * import bcrypt from 'bcrypt';
 * import { User } from '../models/user.model.js';
 *
 * export class UserService {
 *   async createUser(email: string, password: string, name: string) {
 *     const hashedPassword = await bcrypt.hash(password, 10);
 *     const user = await User.create({
 *       email,
 *       password: hashedPassword,
 *       name,
 *     });
 *     return user;
 *   }
 *
 *   async findUserByEmail(email: string) {
 *     return User.findOne({ email });
 *   }
 *
 *   async findUserById(id: string) {
 *     return User.findById(id);
 *   }
 * }
 *
 * export const userService = new UserService();
 * ```
 *
 * Usage in routes:
 * ```typescript
 * import { userService } from '../services/user.service.js';
 *
 * app.post('/users', async (request, reply) => {
 *   const { email, password, name } = request.body;
 *   const user = await userService.createUser(email, password, name);
 *   reply.status(201).send(user);
 * });
 * ```
 */

export class ExampleService {
  async doSomething() {
    // Your business logic here
    return { message: 'Example service method' };
  }
}

export const exampleService = new ExampleService();
