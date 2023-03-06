Notice negative with markup as a child

```jsx
import { Notice } from "@ffw/randstad-shared-components";

<Notice type="negative">Sorry, it seems like you have added an incorrect email or password. 
  Try again or reset your <a href="#">password.</a>
</Notice>
```

Notice informative with string as a child

```jsx
import { Notice } from "@ffw/randstad-shared-components";

<Notice type="informative">We have succesfully reviewed your resume 
  and you will be invited for a meeting.</Notice>
```

Notice positive

```jsx
import { Notice } from "@ffw/randstad-shared-components";

<Notice type="positive">Your message has been received successfully. 
  You will receive a copy in your inbox.
</Notice>
```

Notice warning

```jsx
import { Notice } from "@ffw/randstad-shared-components";

<Notice type="warning">Please confirm your account</Notice>
```

Notice subtle

```jsx
import { Notice } from "@ffw/randstad-shared-components";

<Notice type="subtle">Something went wrong and we could not load this data. Please try again later.</Notice>
```

Notice with custom icon

```jsx
import { Notice } from "@ffw/randstad-shared-components";

<Notice type="subtle" icon="person">Something went wrong and we could not load this data. Please try again later.</Notice>
```
