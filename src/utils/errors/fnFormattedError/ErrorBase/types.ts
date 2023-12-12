export enum ErrorType {
  VALIDATION,
  GENERAL,
  UNKNOWN,
}

export type BaseError = {
  type: ErrorType;
  statusCode?: number;
  message?: string;
  stack?: string;
  context?: string;
  isFormattedError: boolean;
};
