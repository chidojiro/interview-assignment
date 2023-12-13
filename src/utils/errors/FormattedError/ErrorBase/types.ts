export enum ErrorType {
  VALIDATION,
  GENERAL,
  UNKNOWN,
}

export type StatusCodeError = {
  statusCode?: number;
  status?: number;
};

export type BaseError = {
  // The error context.
  context: string;
  /**
   * The error type.
   *
   * There are 3 types - UNKNOWN, GENERAL and VALIDATION.
   *
   * - VALIDATION - this error type signals that the error is of type validation (for example a wrong email format).
   * - GENERAL - this error type signals that something more general happened. (for example wrong email or password (on login))
   * - UNKNOWN - this error types signals that something unexpected happened, and we are not prepared to handle it
   *             (GDS responds to us with an error of unknown format, or a 500 status code)
   */
  type: ErrorType;
  // The error status code.
  statusCode?: number;
  // The error message.
  message?: string;
  // The error stack.
  stack?: string;
  // Flag if the error is a formatted error, used for identifying.
  isFormattedError: boolean;
};
