import { BaseError } from '../ErrorBase/types';

function isFormattedError(error: unknown): boolean {
  const typedError = error as BaseError;
  return !!('isFormattedError' in typedError && typedError.isFormattedError);
}

export default isFormattedError;
