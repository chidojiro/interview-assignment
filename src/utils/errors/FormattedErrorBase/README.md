# Format errors
The main idea behind this class - to have one place with basic functionality, that can be 
reused across multiple apps.

This base class contains minimum implementation to log errors within the app.
It might be used as is, or can be extended by functional requirements per app.

We will log only if the error is of type `UNKNOWN` and we have `NEXT_PUBLIC_DEBUG` turned on, or `BACKEND_DEBUG` (more details in the comments). 


`NEXT_PUBLIC_DEBUG` - this is an env variable, which turns on debugging for the app in general (BE and FE).

`BACKEND_DEBUG` - this is an env variable, which turns on debugging for the back-end only.

Class contains the following properties (can be overwritten):

`message` - the error message.

`stack` - the error stack.

`context` - a bit of a context where this error has happened or why.

`shouldLog()` - protected method responsible for error logging.

`logError()` - private method can't be overwritten by inherited classes.

`getStatusCodeFromError()` - protected method return error number.

Base example usage:
```js
import { FormattedErrorBase } from '@ffw/randstad-shared-components/src/utils';

try {} catch (error) {
  new FormattedErrorBase(error, 'Error context');
}
```

Extend basic class implementation:
```js
import { FormattedErrorBase } from '@ffw/randstad-shared-components/src/utils';

class FormattedError extends FormattedErrorBase {
  constructor(exception: any, context: string, ...args) {
    super(exception, context);
    this.type = ErrorType.UNKNOWN;
    // constructor overwrites, if necessary.
  }

  // custom implementation of basic method.
  shouldLog() {
    return super.shouldLog() && && this.type === ErrorType.UNKNOWN
  }

  appErrorsHandler() {
    // method required by the app.
  }
}

export default FormattedError;
```
