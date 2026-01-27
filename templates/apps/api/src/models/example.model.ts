import mongoose, { Schema, Document } from 'mongoose';

/**
 * Example Mongoose Model
 *
 * Models define the structure of documents in MongoDB collections.
 * They provide an interface for database operations.
 *
 * @remarks
 * Model best practices:
 * - Define TypeScript interfaces for type safety
 * - Use Mongoose Schema for MongoDB structure
 * - Add indexes for frequently queried fields
 * - Include timestamps for audit trail
 * - Add schema validation
 *
 * @example
 * ```typescript
 * // User Model Example
 * import mongoose, { Schema, Document } from 'mongoose';
 *
 * export interface IUser extends Document {
 *   email: string;
 *   password: string;
 *   name: string;
 *   role: 'user' | 'admin';
 *   createdAt: Date;
 *   updatedAt: Date;
 * }
 *
 * const UserSchema = new Schema<IUser>(
 *   {
 *     email: {
 *       type: String,
 *       required: true,
 *       unique: true,
 *       lowercase: true,
 *       trim: true,
 *     },
 *     password: {
 *       type: String,
 *       required: true,
 *     },
 *     name: {
 *       type: String,
 *       required: true,
 *       trim: true,
 *     },
 *     role: {
 *       type: String,
 *       enum: ['user', 'admin'],
 *       default: 'user',
 *     },
 *   },
 *   {
 *     timestamps: true, // Adds createdAt and updatedAt
 *   }
 * );
 *
 * // Add indexes
 * UserSchema.index({ email: 1 });
 *
 * export const User = mongoose.model<IUser>('User', UserSchema);
 * ```
 */

export interface IExample extends Document {
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ExampleSchema = new Schema<IExample>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Example = mongoose.model<IExample>('Example', ExampleSchema);
