import { StatusCodeError } from '../../FormattedErrorBase';

function getStatusCodeFromError(exception: any): number {
  let innerError = exception;

  if (innerError.response) {
    innerError = exception.response;
  }
  const statusCodeError = innerError as StatusCodeError;

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
