export type AppErrorType = {
  message: string;
  statusCode: number;
}

export function AppError(message: string, statusCode = 400): AppErrorType {
  return { message, statusCode }
}
