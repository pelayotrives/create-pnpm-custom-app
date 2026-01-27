import { buildApp } from './app.js';
import { connectMongo } from './db/mongo.js';
import config from './config/config.js';

/**
 * Starts the API server
 *
 * - Connects to MongoDB
 * - Starts the Fastify server on configured port
 * - Logs server URL when ready
 */
async function start() {
  const app = await buildApp();

  try {
    if (!config.mongoUri) {
      app.log.error(
        'MONGODB_URI is not defined. Please copy apps/api/.env.example to apps/api/.env and set MONGODB_URI'
      );
      process.exit(1);
    }

    await connectMongo(config.mongoUri);
    app.log.info('MongoDB connected successfully');

    await app.listen({ port: config.port, host: '0.0.0.0' });
    app.log.info(`🚀 API server listening on http://localhost:${config.port}`);
    app.log.info(`📚 API documentation available at http://localhost:${config.port}/docs`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

// Only start server if not in test environment
if (config.env !== 'test') {
  start();
}

export { buildApp };
