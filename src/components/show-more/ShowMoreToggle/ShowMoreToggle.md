This is a variation of the ShowMore component. It renders either all or a predetermined number of items.

```jsx
import React, { useState } from 'react'
import { ShowMoreToggle } from '@ffw/randstad-shared-components';

const [isViewAllOpen, setIsViewAllOpen] = useState(false);
const arrayOfItems = [1, 2, 3, 4, 5];
const maxCount = 3;

<>
  <ul className="pb-l">
    {
      arrayOfItems.map((item, i) => {
        if (i >= maxCount && !isViewAllOpen) return null;
        return <li>item {item}</li>
      })
    }
  </ul>
  <ShowMoreToggle 
    items={arrayOfItems}
    handleClick={() => setIsViewAllOpen(!isViewAllOpen)}
    translations={{
      viewAll: `View all ${arrayOfItems.length} items`,
      viewLess: "Show less",
    }}
    isViewAllOpen = {isViewAllOpen}
  />
</>
```