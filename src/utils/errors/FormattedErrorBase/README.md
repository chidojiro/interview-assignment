# Format errors
The main idea behind this class - to have one place with basic functionality, that can be 
reused across multiple apps.

This base class contains minimum implementation to log errors within the app.
It might be used as is, or can be extended by functional requirements per app.

We will log only if the error is of type `UNKNOWN` and we have `NEXT_PUBLIC_DEBUG` turned on, or `BACKEND_DEBUG` (more details in the comments). 


Class contains the following properties (can be overwritten):

`message` - the error message.

`stack` - the error stack.

`context` - a bit of a context where this error has happened or why.

`shouldLogError` - a boolean variable determinate will be error outputted ot not.

`shouldLog()` - protected method responsible for error logging.

`logError()` - private method can't be overwritten by inherited classes.

`getStatusCodeFromError()` - protected method return error number.

Base example usage:
```js
import { FormattedErrorBase } from '@ffw/randstad-shared-components/src/utils';

try {} catch (error) {
  new FormattedErrorBase(error, 'Error context', true);
}
```

Extend basic class implementation:
```js
import { FormattedErrorBase } from '@ffw/randstad-shared-components/src/utils';

enum ErrorType {
  VALIDATION,
  GENERAL,
  UNKNOWN,
}

class FormattedError extends FormattedErrorBase {
  constructor(exception: any, context: string, shouldLogError: boolean, ...args) {
    super(exception, context, shouldLogError);
    this.type = ErrorType.UNKNOWN;
    // constructor overwrites, if necessary.
  }

  // Custom implementation of basic shouldLog method.
  shouldLog() {
    return super.shouldLog() && this.type === ErrorType.UNKNOWN
  }
  
  // Custom implementation of basic default message output
  initExceptionErrorMessage(exception: any) {
    if (exception instanceof Error) {
      this.stack = exception.stack;
      this.message = exception.message;
      this.statusCode = this.getStatusCodeFromError(exception);

      if (this.statusCode === 500) {
        this.message = `Internal Server Error 500: ${exception.message}`;
      }
    }
  }

  appErrorsHandler() {
    // method required by the app.
  }
}

export default FormattedError;
```
