import { SignOptions, sign } from 'jsonwebtoken';
import { AppError } from '../errors';

type payloadType = {
  id: number;
}

const TOKEN_SECRET = '97382689029b92c526a5a1fb0ed7e7f3';

const configToken: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

export function generateToken(payload: payloadType): string {
  try {
    const token = sign(payload, TOKEN_SECRET, configToken);
    return token;
  } catch (error) {
    throw AppError('Error during token generation', 500);
  }
}
