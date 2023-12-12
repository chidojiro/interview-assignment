import { StatusCodeError } from '../ErrorBase/types';

/**
 * This function will retrieve the status code of a given error.
 * The idea is to figure out from which field to get the status code for all the known possible error cases.
 *
 * @param exception
 *   The exception that we need to take the error from.
 */
// For better error handling.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getStatusCodeFromError(exception: any): number {
  let error = exception as { response: unknown };

  if (error.response) {
    error = exception.response;
  }
  const statusCodeError = error as StatusCodeError;

  // If the error contains a field for the status code we will return it.
  if (statusCodeError.statusCode) {
    return statusCodeError.statusCode;
  }
  if (statusCodeError.status) {
    return statusCodeError.status;
  }

  // If the error does not contain a field for the status code, then this means that we will return a default one.
  return 500;
}

export default getStatusCodeFromError;
