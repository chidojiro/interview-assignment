/**
 * Check if we need to log the error.
 *
 * @param feDebug
 *   Boolean - if the FE debug option is on.
 * @param beDebug
 *   Boolean - if the BE debug option is on.
 *
 *   Typically used, so we can check if the logging is enabled, based on the feDebug env var and beDebug env var.
 */
function shouldLog(feDebug: boolean, beDebug: boolean) {
  return (feDebug || beDebug);
}

export default shouldLog;
