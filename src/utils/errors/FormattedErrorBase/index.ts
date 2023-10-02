// For the sake of better error handling.
/* eslint-disable @typescript-eslint/no-explicit-any */

export type StatusCodeError = {
  statusCode?: number;
  status?: number;
}

type ExceptionResponse = { response: any };
type ExceptionTypeB = { errorCode: number, message: string };

export default class FormattedErrorBase {
  protected statusCode?: number;

  message?: string;

  stack?: string;

  public context?: string;

  /**
   * Create a formatted message.
   *
   * @param exception
   *  An error.
   * @param context
   *  A bit of a context where this error has happened or why.
   */
  constructor(exception: any, context: string) {
    this.context = context;
    this.prepareException(exception);
    if (this.shouldLog()) {
      this.logError();
    }
  }

  /**
   * Prepare an exception message with all helpful information to identify the root cause of an error.
   *
   * @param exception
   *  An error.
   *
   * @protected
   */
  protected prepareException(exception: any) {
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

  /**
   * Allow to log an errors by default.
   *
   * @protected
   */
  // eslint-disable-next-line class-methods-use-this
  protected shouldLog() {
    return true;
  }

  /**
   * Log a formatted error to the console.
   *
   * @private
   */
  private logError() {
    console.error(this);
  }

  /**
   * Extract an error status code if possible.
   * Whenever error does not contain a field for the status code,
   * then this means that we will just return a default one.
   * @param exception
   *  An error.
   *
   * @return number
   *  An error number.
   *
   * @protected
   */
  // eslint-disable-next-line class-methods-use-this
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

    return 500;
  }
}
