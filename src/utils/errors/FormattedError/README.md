# Format errors
The main idea behind these set of function - to have one place with basic functionality, that can be
reused across multiple apps.

The functions that are exposed here are the building blocks, which should be used throughout the apps, in order to implement the error handling.

We will log only if the error is of type `UNKNOWN` and we have `NEXT_PUBLIC_DEBUG` turned on, or `BACKEND_DEBUG`.

The `BaseError` types contains the following base properties.

`message` - an error message.

`stack` - an error stack.

`context` - a bit of a context where this error has happened or why.

`type` - the type of the error. 

`isFormattedError` - an inner helper property, in order to hint that it is a formatted error, in fact.

Base example usage:
```js
import { createError } from '@ffw/randstad-shared-components/src/utils';

try {} catch (error) {
  /* throw */ createError(FormattedErrorBase, error, 'Error context');
}
```

If you need to turn on logging for eiter FE debug, or BE debug, you need to provide the `feDebug` and the `beDebug` params to the createError function.
```js
import { createError } from '@ffw/randstad-shared-components/src/utils';

try {} catch (error) {
  /* throw */ createError(FormattedErrorBase, error, 'Error context', /* feDebug */ true, /* beDebug */ true);
}
```

If you want to have the full control, and extend the functionality, you should use the `BaseError` function directly, to avoid unnecessary logging.
Example in MyRandstad app:
```js
function FnFormattedError(exception: unknown, context: string, errorMap: object = {}): FormattedError {
  // The base error creation.
  const baseError = ErrorBase(exception, context);
  
  // Functionality extensions for our case.
  const formattedError = handleApiError(exception, errorMap);
  formattedError.axiosError = createAxiosError(exception);
  
  const finalError = { ...baseError, ...formattedError, context };
  
  // We are also calling directly the 'shouldLog' function, in order to figure out if the logging is on and then we want to log only for UNKNOWN errors.
  const shouldLogError = shouldLog(process.env.NEXT_PUBLIC_DEBUG === 'true', process.env.BACKEND_DEBUG === 'true') && formattedErrorType === ErrorType.UNKNOWN
  if (shouldLogError) {
    // Calling directly logError from the lib.
    logError(finalError);
  }

  // Extension of the functionality for handling sending splunk errors.
  logSplunkError(exception, finalError);

  return finalError;
}
```
