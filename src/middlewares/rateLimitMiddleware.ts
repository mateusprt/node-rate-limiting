import { NextFunction, Request, Response } from 'express';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import { redisClient } from '../config/redis';
import { RATE_LIMIT_KEY_PREFIX, RATE_LIMIT_POINTS, RATE_LIMIT_DURATION } from '../config/contants';

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: RATE_LIMIT_KEY_PREFIX,
  points: RATE_LIMIT_POINTS,
  duration: RATE_LIMIT_DURATION
});


export default async function rateLimitMiddleware(request: Request, response: Response, next: NextFunction) {
  try {
    await limiter.consume(request.ip);
    return next();
  } catch(err) {
    throw new AppError("Too many requests", httpStatus.TOO_MANY_REQUESTS);
  }
}