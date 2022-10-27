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

<Stackable name="email-12" label="job specialism">
  <Checkbox id="engineer" label="engineer" />
  <Checkbox id="chef" label="Chef" />
  <Checkbox id="construction-worker" label="Construction worker" data-worker="full-time" />
</Stackable>;
```
