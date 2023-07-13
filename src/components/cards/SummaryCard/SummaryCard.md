```jsx
import { SummaryCard } from "@ffw/randstad-shared-components";

<div className="dashboard-cards mt-m">
    <SummaryCard
        key="Summary card number"
        title="Summary card number"
        emptyMessage="Summary card empty message"
        message="Summary card message"
        tabIndex={0}
        count={1}
        onClick={() => {}}
        clickAreaAriaLabel="click area label"/>

    <SummaryCard
        key="Summary card stars"
        title="Summary card stars"
        emptyMessage="Summary card empty message"
        tabIndex={0}
        stars
        count={5}
        onClick={() => {}}
        clickAreaAriaLabel="click area label"/>

     <SummaryCard
        key="Empty summary card stars"
        title="Empty summary card stars"
        emptyMessage="Summary card empty message"
        tabIndex={0}
        onClick={() => {}}
        clickAreaAriaLabel="click area label"/>
</div>;
```
