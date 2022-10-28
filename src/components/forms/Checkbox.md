Single checkbox

```jsx
import { Checkbox } from "@ffw/randstad-shared-components";

<Checkbox
  name="email-1"
  formGroupLabel="job specialism"
  required
  label="I want to receive news in my inbox"
/>;
```

Multiple checkbox items.

```jsx
import { Checkbox, Stackable } from "@ffw/randstad-shared-components";

<Stackable label="job specialism">
  <Checkbox name="email" id="engineer" label="engineer" />
  <Checkbox name="email" id="chef" label="Chef" />
  <Checkbox name="email" id="construction-worker" label="Construction worker" data-worker="full-time" />
</Stackable>;
```
