Form Group

```jsx
import { Dropdown } from '@ffw/randstad-shared-components';
import { useState } from 'react';

const [value, setValue] = useState('');

const onChangeHandler = (event) => {
  setValue(event.target.value);
};

<Dropdown
  label="Favorite number"
  id="numbers"
  options={[{value:'first', title: 'first'}, {value:'second', title: 'second'}, {value:'third', title: 'third'}]}
  value={value}
  defaultValue="Choose number"
  name="numbers-dropdown"
  onChange={onChangeHandler}
></Dropdown>;
```
