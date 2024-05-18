import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { TokenPayloadType } from "src/api/types/users/auth";
import { TOKEN_SECRET } from "src/utils/authentication/token";
import { AppError } from "src/utils/errors";

export function isAuthenticated(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw AppError('JWT token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, TOKEN_SECRET);

    const { sub } = decodedToken as TokenPayloadType;

    req.user = {
      id: sub,
    };

    return next();
  } catch (error) {
    throw AppError('Invalid JWT token', 401);
  }
}
