import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";
import httpStatus from "http-status";

export function handleErrorMiddleware(error: Error, request: Request, response: Response, next: NextFunction) {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }
  return response.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error" });
} 