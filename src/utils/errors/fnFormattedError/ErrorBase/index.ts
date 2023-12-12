import getStatusCodeFromError from '../getStatusCodeFromError';
import { BaseError, ErrorType } from './types';

// For better error handling.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ErrorBase(exception: any, context: string): BaseError {
  const baseError: BaseError = {
    context,
    isFormattedError: true,
    type: ErrorType.UNKNOWN,
  };

  // This means that this is an Api Error.
  if (exception.response && Object.hasOwn(exception.response.data, 'error')
    && typeof exception.response.data.error === 'object'
  ) {
    // Get the status code from the error.
    baseError.statusCode = getStatusCodeFromError(exception);
  } else if (exception instanceof Error) {
    // If we got here, this means that the error is of type generic Error, and we can format it accordingly.
    baseError.stack = exception.stack;
    baseError.message = exception.message;
    baseError.statusCode = getStatusCodeFromError(exception);
  } else {
    // If the error is none of the above cases, we don't know what the error is, so we will set the message of the error to the string version of the exception.
    baseError.message = String(exception);
  }

  return baseError;
}

export default ErrorBase;
