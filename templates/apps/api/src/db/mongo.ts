import mongoose from 'mongoose';

/**
 * Establishes connection to MongoDB
 * 
 * @param uri - MongoDB connection URI
 * @returns Mongoose connection object
 * @throws Error if connection fails
 * 
 * @example
 * ```typescript
 * await connectMongo('mongodb://localhost:27017/mydb');
 * ```
 */
export async function connectMongo(uri: string) {
  mongoose.set('strictQuery', true);
  await mongoose.connect(uri);
  return mongoose.connection;
}

/**
 * Disconnects from MongoDB
 * 
 * @remarks
 * Call this when shutting down the application or when database
 * connection is no longer needed.
 */
export async function disconnectMongo() {
  await mongoose.disconnect();
}
