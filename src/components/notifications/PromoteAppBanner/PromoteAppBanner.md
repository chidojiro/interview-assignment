Promote App Banner used to show mobile app banner variation without image.

```jsx
import { PromoteAppBanner } from '@ffw/randstad-shared-components';
import React, { useState } from 'react';

const showPromoteAppBanner = () => {
  const [promoteAppBanner, setPromoteAppBanner] = useState(true);
  const promoteAppBannerCloseHandler = () => {
    setPromoteAppBanner(false);
  };
  return (
    <>
      {promoteAppBanner && (
        <PromoteAppBanner type="no-image" onClose={promoteAppBannerCloseHandler} appleLink="https://example.com" googlePlayLink="https://example.com">
          Download the Randstad app
        </PromoteAppBanner>
      )}
    </>
  );
};

showPromoteAppBanner();
```

Promote App Banner used to show mobile app banner variation with split-view image.

```jsx
<PromoteAppBanner type="split-view" appleLink="https://example.com" googlePlayLink="https://example.com" imagePath="https://www.randstad.co.uk/s3fs-media/uk/public/styles/banner_media_desktop/public/bynder/3FFC3FDC-AE60-4692-B576DA4FDF247941.jpg?itok=tL5em_4U">
  Download the Randstad app
</PromoteAppBanner>
```

Promote App Banner used to show mobile app banner variation with full-width image.

```jsx
<PromoteAppBanner type="full-width" appleLink="https://example.com" googlePlayLink="https://example.com" imagePath="https://www.randstad.co.uk/s3fs-media/uk/public/styles/banner_media_desktop/public/bynder/3FFC3FDC-AE60-4692-B576DA4FDF247941.jpg?itok=tL5em_4U">
  Download the Randstad app
</PromoteAppBanner>
```