/**
 * Check if we need to log the error.
 *
 * @param feDebug
 *   Boolean - if the FE debug option is on.
 * @param beDebug
 *   Boolean - if the BE debug option is on.
 * @param formattedErrorType
 *   Number - The errorType of the formatted error that we need to log.
 * @param errorType
 *   Number - The errorType we need to log for.
 *   We will check if the 'formattedErrorType' param is the same as the 'errorType' param.
 *
 *   Typically, this is used, so we can check if the errorType is of UNKNOWN type, as we want to log only UNKNOWN errors.
 */
function shouldLog(feDebug: boolean, beDebug: boolean, formattedErrorType?: number, errorType?: number) {
  if (errorType && formattedErrorType) {
    return (feDebug || beDebug) && formattedErrorType === errorType;
  }
  return (feDebug || beDebug);
}

export default shouldLog;
