Primary action notice with text as a child

```jsx
import { ActionNotice } from '@ffw/randstad-shared-components';

<ActionNotice 
  background="primary"
  primaryButtonText="check hours"
  onPrimaryButtonClick={() => {console.log("Primary button clicked!")}}
  secondaryButtonText="change"
  onSecondaryButtonClick={() => {console.log("Secondary button clicked!")}}
>
  did you work 32 hours last week?
</ActionNotice>

```

Secondary action notice with text as a child and no reversed buttons

```jsx
import { ActionNotice } from '@ffw/randstad-shared-components';

<ActionNotice 
  background="secondary"
  primaryButtonText="check hours"
  onPrimaryButtonClick={() => {console.log("Primary button clicked!")}}
  secondaryButtonText="change"
  onSecondaryButtonClick={() => {console.log("Secondary button clicked!")}}
  buttonsReversed={false}
>
  did you work 32 hours last week?
</ActionNotice>

```

Tertiary action notice with text as a child and primary button only

```jsx

import { ActionNotice } from '@ffw/randstad-shared-components';

<ActionNotice 
  background="tertiary"
  primaryButtonText="check hours"
  onPrimaryButtonClick={() => {console.log("Primary button clicked!")}}
>
  did you work 32 hours last week?
</ActionNotice>

```

Quaternary action notice with text as a child

```jsx

import { ActionNotice } from '@ffw/randstad-shared-components';

<ActionNotice 
  background="quaternary"
  primaryButtonText="check hours"
  onPrimaryButtonClick={() => {console.log("Primary button clicked!")}}
  secondaryButtonText="change"
  onSecondaryButtonClick={() => {console.log("Secondary button clicked!")}}
>
  did you work 32 hours last week?
</ActionNotice>

```

Quinary action notice with text as a child

```jsx
import { ActionNotice } from '@ffw/randstad-shared-components';

<ActionNotice 
  background="quinary"
  primaryButtonText="check hours"
  onPrimaryButtonClick={() => {console.log("Primary button clicked!")}}
  secondaryButtonText="change"
  onSecondaryButtonClick={() => {console.log("Secondary button clicked!")}}
>
  did you work 32 hours last week?
</ActionNotice>

```

Senary action notice with text as a child

```jsx
import { ActionNotice } from '@ffw/randstad-shared-components';

<ActionNotice 
  background="senary"
  primaryButtonText="check hours"
  onPrimaryButtonClick={() => {console.log("Primary button clicked!")}}
  secondaryButtonText="change"
  onSecondaryButtonClick={() => {console.log("Secondary button clicked!")}}
>
  did you work 32 hours last week?
</ActionNotice>
```