import ErrorBase from '../ErrorBase';
import shouldLog from '../shouldLog';
import logError from '../logError';

function createError(exception: unknown, context: string, feDebug: boolean, beDebug: boolean) {
  const baseError = ErrorBase(exception, context);

  if (shouldLog(feDebug, beDebug)) {
    logError(baseError);
  }

  return baseError;
}

export default createError;
