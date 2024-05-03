import { NextFunction, Request, Response } from "express";
import { AppErrorType } from "src/utils/errors";

export function handleErrors(error: Error | AppErrorType, request: Request, response: Response, next: NextFunction) {
  if ('statusCode' in error) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
