import 'express-async-errors';
import express from 'express';
import helmet from 'helmet';

import { SERVER_PORT } from './config/contants';

import { loggerMiddleware } from './middlewares/loggerMiddleware';
import { handleErrorMiddleware } from './middlewares/handleErrorMiddleware';
import httpStatus from 'http-status';
import rateLimitMiddleware from './middlewares/rateLimitMiddleware';
import { connectRedis } from './config/redis';
import logger from './config/logger/logger';

const server = express();

// default config
server.use(express.json());
server.use(helmet());

// middlewares
server.use(loggerMiddleware);
server.use(rateLimitMiddleware);

// connect to redis
connectRedis()
  .then(res => logger.info('Redis connected successfully'))
  .catch(err => {
    logger.error('Redis Client Error', err);
    process.exit(1);
  })

server.get('/', (request, response) => {
  return response.status(httpStatus.OK).send();
});

// handle errors globally
server.use(handleErrorMiddleware);

server.listen(SERVER_PORT, () => {
  logger.info(`Server is running on port ${SERVER_PORT}...`)
});