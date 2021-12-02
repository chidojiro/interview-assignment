Single checkbox
```jsx
import { Checkbox } from "@ffw/randstad-shared-components";

<Checkbox
  name="email-1"
  label="job specialism"
  required
  fieldLabel="I want to receive news in my inbox"
/>

```
Multiple checkbox items.
```jsx
import { Checkbox } from "@ffw/randstad-shared-components";

<Checkbox name="email-12" label="job specialism">
  <item name="engineer" label="engineer" />
  <item name="chef" label="Chef" />
  <item name="construction-worker" label="Construction worker" data-worker="full-time" />
</Checkbox>
```
