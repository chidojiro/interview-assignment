Confirmation Modal

```jsx
import { Button, ConfirmationModal } from '@ffw/randstad-shared-components';
import React, { useState } from 'react';

const [open, setOpen] = useState(false);

<>
  <Button handleClick={() => setOpen(true)}>Open</Button>
  {open && (
    <ConfirmationModal title="are you sure?" confirmButtonText="delete account" cancelButtonText="cancel" content="Do you really want to delete your account? This action can not be undone." onClose={() => setOpen(false)} onSubmit={() => console.log("Submit")}/>
  )}
</>;
```
