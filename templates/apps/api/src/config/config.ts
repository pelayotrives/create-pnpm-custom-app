import dotenv from 'dotenv';

dotenv.config();

interface Config {
  env: string;
  port: number;
  mongoUri: string;
  corsOrigin: string;
  bcryptRounds: number;
  jwtSecret?: string;
}

const env = process.env.NODE_ENV ?? 'development';

/**
 * Application configuration loaded from environment variables
 * 
 * @remarks
 * Required environment variables:
 * - MONGODB_URI: MongoDB connection string
 * - JWT_SECRET: Secret for JWT token signing
 * 
 * Optional environment variables:
 * - PORT: Server port (default: 3002)
 * - CORS_ORIGIN: Allowed CORS origin (default: *)
 * - BCRYPT_ROUNDS: Bcrypt hashing rounds (default: 10, 4 in test)
 */
const config: Config = {
  env,
  port: Number(process.env.PORT) || 3002,
  mongoUri: process.env.MONGODB_URI || '',
  corsOrigin: process.env.CORS_ORIGIN || '*',
  bcryptRounds: Number(process.env.BCRYPT_ROUNDS || (env === 'test' ? 4 : 10)),
  jwtSecret: process.env.JWT_SECRET,
};

export default config;
