```jsx
import { PasswordInputField } from "@ffw/randstad-shared-components";

<PasswordInputField
  name="password-1"
  id="password-1"
  required
  formGroupLabel="password (standard 8 characters)"
/>;
```

With different minimum characters

```jsx
import { PasswordInputField } from "@ffw/randstad-shared-components";

<PasswordInputField
  name="password-2"
  id="password-2"
  required
  minChars={11}
  formGroupLabel="password (standard 11 characters)"
/>;
```

With translated validation schema type

```jsx
import { PasswordInputField } from "@ffw/randstad-shared-components";

<PasswordInputField
  name="password-3"
  id="password-3"
  required
  formGroupLabel="Passwort"
  validationSchema={{ minSign: "8 Zeichen" }}
/>;
```
