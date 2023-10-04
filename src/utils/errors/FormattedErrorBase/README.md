# Format errors
The main idea behind this class - to have one place with basic functionality, that can be 
reused across multiple apps.

This base class contains minimum implementation to log errors within the app.
It might be used as is, or can be extended by functional requirements per app.

We will log only if the error is of type `UNKNOWN` and we have `NEXT_PUBLIC_DEBUG` turned on, or `BACKEND_DEBUG`. 

Class contains the following properties (can be overwritten):

`message` - an error message.

`stack` - an error stack.

`context` - a bit of a context where this error has happened or why.

`prepareException()` - prepare an exception message with all helpful information to identify the root cause of an error. @protected

`shouldLog()` -  responsible for error logging. @protected

`logError()` - log error itself. @protected

`getStatusCodeFromError()` - return error number. @protected

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
  /**
   * @inheritDoc
   *   Log errors depending on env configuration.
   */
  shouldLog() {
    return (process.env.NEXT_PUBLIC_DEBUG === 'true' || process.env.BACKEND_DEBUG === 'true') && super.shouldLog();
  }
  
  /* 
   * @inheritDoc
   *   Add unique app id to the log.
   */
  prepareException(exception: any, settings: object) {
    this.app = 'UNIQUE_APP_ID';
  }
}

export default FormattedError;
```
