Meta info card. [Orbit example](https://s3-go-dta-orbit.s3-eu-west-1.amazonaws.com/mt/master/prototype-randstad/04_organisms/my-environment/track-and-trace-meta.html)

```jsx
import { MetaInfoCard, MetaInfoCardItems } from "@ffw/randstad-shared-components";

const items = [
  { icon: 'marker', title: 'thurrock, south east' },
  { icon: 'building', title: 'randstad financial services' },
  { icon: 'salary', title: '$ 16,000 - $ 18,000 per year' },
  { icon: 'briefcase', title: 'permanent' },
  { icon: 'clock', title: 'full-time' },
  { icon: 'calendar', title: '12 months period' },
  { icon: 'education', title: 'HBO degree' },
  { icon: 'promotion', title: '1-3 years experience' },
];

<MetaInfoCard title="summary">
  <MetaInfoCardItems items={items} />
  <p className="text--alternative mt-s">posted 19 june 2023</p>
  <div className="divider my-m pb-none"></div>
  <p className="mb-none">get in touch</p>
  <p className="text--alternative mb-s">we are here to help with your questions</p>
</MetaInfoCard>
```
