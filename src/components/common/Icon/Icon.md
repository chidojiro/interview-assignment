```jsx
import { Icon } from "@ffw/randstad-shared-components";
    
<Icon iconType="eye" iconClassName="icon icon--inline" />; 
```

Used for displaying icon with additional svg props.

```jsx
import { Icon } from "@ffw/randstad-shared-components";

const fourthOptionAriaLabel = { 'aria-label': 'test' };

<Icon svgProps={fourthOptionAriaLabel} iconType={'building'} iconClassName={null}/>; 
```
