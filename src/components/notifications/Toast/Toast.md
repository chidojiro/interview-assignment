Toast only with text

```jsx
import { Toast } from '@ffw/randstad-shared-components';
import React, { useState } from 'react';

const showToast = () => {
  const [toast, setToast] = useState(false);
  const toastCloseHandler = () => {
    setToast(false);
  };
  return (
    <>
      <button onClick={() => setToast(true)}>Show Toast</button>
      {toast && (
        <Toast
          id="toast-id"
          title="Thanks, we will inform you about new job opportunities in your mailbox."
          onClose={toastCloseHandler}
        />
      )}
    </>
  );
};

showToast();
```


Toast only with one button

```jsx
import { Toast } from '@ffw/randstad-shared-components';
import React, { useState } from 'react';

const showToast = () => {
  const [toast, setToast] = useState(false);
  const toastCloseHandler = () => {
    setToast(false);
  };

  const toastSucccessHandler = () => {
    setToast(false);
  };

  return (
    <>
      <button onClick={() => setToast(true)}>Show Toast</button>
      {toast && (
        <Toast
          id="toast-id"
          title="Thanks, we will inform you about new job opportunities in your mailbox."
          buttonSuccessText="Accept"
          successBtnVariant="filled"
          onClose={toastCloseHandler}
          onSuccess={toastSucccessHandler}
        />
      )}
    </>
  );
};

showToast();
```

Toast only with one button without fill

```jsx
import { Toast } from '@ffw/randstad-shared-components';
import React, { useState } from 'react';

const showToast = () => {
  const [toast, setToast] = useState(false);
  const toastCloseHandler = () => {
    setToast(false);
  };

  const toastSucccessHandler = () => {
    setToast(false);
  };

  return (
    <>
      <button onClick={() => setToast(true)}>Show Toast</button>
      {toast && (
        <Toast
          id="toast-id"
          title="Thanks, we will inform you about new job opportunities in your mailbox."
          buttonSuccessText="Accept"
          onClose={toastCloseHandler}
          onSuccess={toastSucccessHandler}
        />
      )}
    </>
  );
};

showToast();
```


Toast with buttons

```jsx
import { Toast } from '@ffw/randstad-shared-components';
import React, { useState } from 'react';

const showToast = () => {
  const [toast, setToast] = useState(false);
  const toastCloseHandler = () => {
    setToast(false);
    console.log('NOT NOW');
  };

  const toastSucccessHandler = () => {
    setToast(false);
    console.log('DO IT NOW');
  };

  return (
    <>
      <button onClick={() => setToast(true)}>Show Toast</button>
      {toast && (
        <Toast
          id="toast-id"
          title="Thanks, we will inform you about new job opportunities in your mailbox."
          buttonSuccessText="do it now"
          buttonCloseText="not now"
          successBtnVariant="filled"
          onClose={toastCloseHandler}
          onSuccess={toastSucccessHandler}
        />
      )}
    </>
  );
};

showToast();
```
