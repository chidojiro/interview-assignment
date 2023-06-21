Meta info card items. This is only the list, usually used inside MetaInfoCard component as a summary for job application page, etc.

```jsx
import { MetaInfoCardItems } from "@ffw/randstad-shared-components";

const items = [
  { icon: 'marker', title: 'thurrock, south east' },
  { icon: 'building', title: 'randstad financial services' },
  { icon: 'salary', title: '$ 16,000 - $ 18,000 per year' },
  { icon: 'briefcase', title: 'permanent' },
];

<MetaInfoCardItems items={items} />
```
