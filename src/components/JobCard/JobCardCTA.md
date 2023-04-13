```jsx
import { JobCardCTA, JobCardList } from "@ffw/randstad-shared-components";
import Icon from '../Icon';

<JobCardList>
  <JobCardCTA
      label="Find Other Jobs" jobsPageUrl="/jobs" svgPath={process.env.NEXT_PUBLIC_RESOURCE_PREFIX}
  />
</JobCardCTA>
```
