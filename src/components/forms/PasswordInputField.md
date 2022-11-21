```jsx
import { PasswordInputField } from "@ffw/randstad-shared-components";

<PasswordInputField
  name="password-1"
  id="password-1"
  required
  label="password (standard 8 characters)"
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
  label="password (standard 11 characters)"
/>;
```

With translated validation schema type

```jsx
import { PasswordInputField } from "@ffw/randstad-shared-components";

<PasswordInputField
  name="password-3"
  id="password-3"
  required
  label="Passwort"
  validationSchema={{ minSign: "8 Zeichen" }}
/>;
```

With forgotten password link.

```jsx
import { PasswordInputField } from "@ffw/randstad-shared-components";

<PasswordInputField
  name="password-4"
  id="password-4"
  label="password"
  forgottenPasswordLink={<a href="#">forgotten password</a>}
/>;
```
