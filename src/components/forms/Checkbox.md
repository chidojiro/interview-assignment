Single checkbox

```jsx
import { useState } from 'react';
import { Checkbox } from "@ffw/randstad-shared-components";

const [checked, setChecked] = useState(false);

const onChange = () => {
  setChecked(!checked);
}

<Checkbox
  name="email-1"
  formGroupLabel="job specialism"
  checked={checked}
  onChange={onChange}
  checkboxLabel={<>Test <a href="/example">link</a> component</>}/>
```
