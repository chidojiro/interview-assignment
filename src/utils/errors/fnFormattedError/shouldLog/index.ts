/**
 * Check if we need to log the error.
 *
 * @param feDebug
 *   Boolean - if the FE debug option is on.
 * @param beDebug
 *   Boolean - if the BE debug option is on.
 */
function shouldLog(feDebug: boolean, beDebug: boolean) {
  return (feDebug || beDebug);
}

export default shouldLog;
