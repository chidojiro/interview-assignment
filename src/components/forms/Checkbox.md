Single checkbox

```jsx
import { Checkbox } from "@ffw/randstad-shared-components";

const onChange = () => {

}

<>
<Checkbox
  name="email-1"
  formGroupLabel="job specialism"
  checked={true}
  onChange={onChange}
  checkboxLabel={<>Test <a href="/example">link</a> component</>}/>

<Checkbox
  name="email-1"
  formGroupLabel="job specialism"
  checked={true}
  onChange={onChange}
  checkboxLabel={<>Test <a href="/example">link</a> component</>}/>
</>
```
