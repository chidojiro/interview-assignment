```jsx
import { MultipleCheckboxSelect } from "@ffw/randstad-shared-components";
import { useState } from 'react';

const items =[
    {id: 'option1', name: 'Option 1'},
    {id: 'option2', name: 'Option 2'},
    {id: 'option3', name: 'Option 3'},
    {id: 'option4', name: 'Option 4'},
]

const [value, setValue] = useState(['option1','option2',]);

<MultipleCheckboxSelect
        name="test"
        items={items}
        value={value}
        setValue={setValue}
        label='Label'
        optionalLabel='optional'
        required={false}
        error={undefined}
/>;
```
