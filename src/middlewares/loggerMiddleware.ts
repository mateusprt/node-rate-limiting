import { NextFunction, Request, Response } from "express";
import logger from "../config/logger/logger";

export function loggerMiddleware(request: Request, response: Response, next: NextFunction) {
  logger.info(`Started ${request.method} - ${request.originalUrl} [${request.ip}]`)
  next();
}