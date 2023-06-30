Modal

```jsx
import { Button, Modal } from '@ffw/randstad-shared-components';
import React, { useState } from 'react';

const [open, setOpen] = useState(false);

<>
  <Button handleClick={() => setOpen(true)}>Open</Button>
  {open && (
    <Modal title="modal component" confirmButtonText="delete account" cancelButtonText="cancel" content="Do you really want to delete your account? This action can not be undone." onClose={() => setOpen(false)} footer={<div>Footer content</div>} footerDividerTop>
    <div>Modal content</div>
    </Modal>
  )}
</>;
```
