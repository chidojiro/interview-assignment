export type StatusCodeError = {
  statusCode?: number;
  status?: number;
}

export default class FormattedErrorBase {
  protected statusCode?: number;

  message?: string;

  stack?: string;

  public context?: string;

  private shouldLogError?: boolean;

  // For the sake of better error handling.
  /* eslint-disable @typescript-eslint/no-explicit-any */
  constructor(exception: any, context: string, shouldLogError: boolean) {
    this.context = context;
    this.shouldLogError = shouldLogError;

    this.initExceptionErrorMessage(exception);

    if (this.shouldLog()) {
      this.logError();
    }
  }

  /**
   * Format an error message output.
   */
  protected initExceptionErrorMessage(exception: any) {
    // This means that this is an Api Error.
    if (exception.response && Object.hasOwn(exception.response.data, 'error')
      && typeof exception.response.data.error === 'object') {
      // Get the status code from the error.
      this.statusCode = this.getStatusCodeFromError(exception);
    } else if (exception instanceof Error) {
      // If we got here, this means that the error is of type generic Error, and we can format it accordingly.
      this.stack = exception.stack;
      this.message = exception.message;
      this.statusCode = this.getStatusCodeFromError(exception);
    } else {
      // If the error is none of the above, we will assume that the error is unknown
      // and set the message to the exception message.
      this.message = String(exception);
    }
  }

  protected shouldLog() {
    return this.shouldLogError;
  }

  private logError() {
    // Remove shouldLogError from output.
    delete this.shouldLogError;
    console.error(this);
  }

  protected getStatusCodeFromError(exception: any): number {
    if (exception.response) {
      exception = exception.response;
    }
    const statusCodeError = exception as StatusCodeError;

    // If the error contains a field for the status code we will return it.
    if (statusCodeError.statusCode) {
      return statusCodeError.statusCode;
    }
    if (statusCodeError.status) {
      return statusCodeError.status;
    }

    // If the error does not contain a field for the status code, then this means that we will just return a default one.
    return 500;
  }
}
