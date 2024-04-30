import { errors } from 'celebrate';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import routes from './api/routes';
import { AppError, AppErrorType } from './utils/errors';

const app = express();

app.use(cors())
app.use(express.json())

app.use(routes);

app.use(errors())

app.use((error: AppErrorType, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message
    });
  }
  return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
})

export default app;
