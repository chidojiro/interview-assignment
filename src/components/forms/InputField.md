```jsx
import { InputField } from "@ffw/randstad-shared-components";

<InputField
  name="email-1"
  id="email-1"
  required
  placeholder="design@randstad.com"
  label="email address"
/>;
```

With extra text

```jsx
import { InputField } from "@ffw/randstad-shared-components";

<InputField
  name="email-1"
  id="email-1"
  required
  placeholder="Have text below input"
  label="email address"
  afterContent="Extra text"
/>;
```

Email type

```jsx
import { InputField } from "@ffw/randstad-shared-components";

<InputField
  type="email"
  name="email-1"
  id="email-1"
  required
  placeholder="design@randstad.com"
  label="email address"
/>;
```

Disabled input field

```jsx
import { InputField } from "@ffw/randstad-shared-components";

<InputField
  type="text"
  name="disabled-1"
  id="disabled-1"
  required
  placeholder="This should be disabled"
  label="Disabled field"
  disabled="true"
/>;
```
