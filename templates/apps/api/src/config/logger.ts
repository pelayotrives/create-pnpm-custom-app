import config from './config.js';
import pino from 'pino';

/**
 * Returns logger configuration based on environment
 *
 * @returns Logger config or false to disable logging in test
 *
 * @remarks
 * - Test/E2E: Logging disabled
 * - Production: Structured JSON logs at 'info' level
 * - Development: Pretty-printed colored logs at 'debug' level
 */
export function getLoggerConfig(): false | object {
  if (config.env === 'test' || process.env.E2E_MODE === 'true') {
    return false;
  }

  if (config.env === 'production') {
    return {
      level: 'info',
      serializers: {
        req: (req: { method: string; url: string }) => ({
          method: req.method,
          url: req.url,
        }),
        res: (res: { statusCode: number }) => ({
          statusCode: res.statusCode,
        }),
      },
    };
  }

  return {
    level: 'debug',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname,reqId',
      },
    },
  };
}

/**
 * Application-wide logger instance using Pino
 *
 * @example
 * ```typescript
 * logger.info({ userId: '123' }, 'User logged in');
 * logger.error({ error }, 'Failed to process request');
 * logger.debug({ data }, 'Processing data');
 * ```
 */
export const logger = pino(getLoggerConfig() || { level: 'silent' });
