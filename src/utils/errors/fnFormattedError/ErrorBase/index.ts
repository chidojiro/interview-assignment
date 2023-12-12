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

  if (exception.response && Object.hasOwn(exception.response.data, 'error')
    && typeof exception.response.data.error === 'object'
  ) {
    baseError.statusCode = getStatusCodeFromError(exception);
  } else if (exception instanceof Error) {
    baseError.stack = exception.stack;
    baseError.message = exception.message;
    baseError.statusCode = getStatusCodeFromError(exception);
  } else {
    baseError.message = String(exception);
  }

  return baseError;
}

export default ErrorBase;
