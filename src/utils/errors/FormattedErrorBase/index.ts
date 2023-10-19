// For the sake of better error handling.
/* eslint-disable @typescript-eslint/no-explicit-any */
export type StatusCodeError = {
  statusCode?: number;
  status?: number;
}

export default class FormattedErrorBase {
  protected statusCode?: number;

  protected message?: string;

  protected stack?: string;

  context?: string;

  /**
   * Create a formatted message.
   *
   * @param exception
   *  An error.
   * @param context
   *  A bit of a context where this error has happened or why.
   * @param settings
   *  Allow to the child classes pass additional configuration through the constructor.
   */
  constructor(exception: any, context: string, settings: object = {}) {
    this.context = context;
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
   * We will log only if the error is of type UNKNOWN AND we have NEXT_PUBLIC_DEBUG turned on, or BACKEND_DEBUG.
   *
   * NEXT_PUBLIC_DEBUG - this is an env variable, which turns on debugging for the app in general (BE and FE).
   *
   * BACKEND_DEBUG - this is an env variable, which turns on debugging for the back-end only.
   * We are going to figure out if we are on the back-end or the front-end based on this variable.
   * Next only puts env variables on the FE if they are prefixed with NEXT_PUBLIC_, so this means that
   * this variable will be undefined on the FE, and not undefined on the backend.
   * Only when it is set to "true" we will turn on logging.
   *
   * The idea is that on PROD we only want to log on the backend.
   *
   * @protected
   */
  shouldLog() {
    return true;
  }

  /**
   * Log a formatted error to the console.
   *
   * @private
   */
  public logError() {
    console.error(this);
  }

  /**
   * Log an error to splunk.
   *
   * This is empty, as every app will need to decide how they want to log the error.
   *
   * @param exception
   *   The error that we want to log.
   *
   * @public
   */
  public logSplunkError(exception: unknown) {}

  /**
   * Extract an error status code from the error if possible.
   *
   * @param exception
   *  An error.
   * @return number
   *  An error number.
   * @protected
   */
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
