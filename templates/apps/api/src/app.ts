import Fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import rateLimit from '@fastify/rate-limit';
import multipart from '@fastify/multipart';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import routes from './routes/routes.js';
import config from './config/config.js';
import { getLoggerConfig } from './config/logger.js';

/**
 * Registers CORS middleware
 */
function registerCors(app: FastifyInstance) {
  app.register(cors, {
    origin: config.corsOrigin,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });
}

/**
 * Registers JWT authentication plugin
 */
function registerJWT(app: FastifyInstance) {
  if (!config.jwtSecret) {
    throw new Error(
      'JWT_SECRET is not defined. Please copy apps/api/.env.example to apps/api/.env and set JWT_SECRET'
    );
  }
  
  app.register(jwt, {
    secret: config.jwtSecret,
    sign: {
      expiresIn: '24h',
    },
  });
}

/**
 * Registers rate limiting plugin
 */
function registerRateLimit(app: FastifyInstance) {
  if (config.env === 'test') {
    return;
  }
  
  app.register(rateLimit, {
    global: false,
  });
}

/**
 * Registers Swagger documentation
 */
async function registerSwagger(app: FastifyInstance) {
  await app.register(swagger, {
    openapi: {
      openapi: '3.0.0',
      info: {
        title: '{{PROJECT_NAME}} API',
        description: 'API documentation for {{PROJECT_NAME}}',
        version: '1.0.0',
      },
      servers: [
        {
          url: `http://localhost:${config.port}`,
          description: 'Development server',
        },
      ],
      tags: [
        { name: 'Health', description: 'Health check endpoints' },
      ],
    },
  });

  await app.register(swaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: true,
    },
    staticCSP: true,
  });
}

/**
 * Registers file upload support
 */
function registerMultipart(app: FastifyInstance) {
  app.register(multipart, {
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB
    },
  });
}

/**
 * Builds and configures the Fastify application
 * 
 * @returns Configured Fastify instance
 */
export async function buildApp(): Promise<FastifyInstance> {
  const app = Fastify({
    logger: getLoggerConfig(),
  });

  // Register plugins
  registerCors(app);
  registerJWT(app);
  registerRateLimit(app);
  registerMultipart(app);
  await registerSwagger(app);

  // Register routes
  await app.register(routes);

  return app;
}
