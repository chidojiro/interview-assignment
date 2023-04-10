Split View

```jsx
import { SplitView } from '@ffw/randstad-shared-components';
import React from 'react';
<>
  <SplitView
    eyebrow="workforce"
    title="working at randstad"
    description="See how our passion for people coupled with the power intelligent machines sets us apart."
    buttonLink="https://google.com/"
    buttonText="read stories"
    bgColor="secondary"
    illustration="https://rxp-static-dev2.dta.randstad-bluex.com/my-randstad/src/assets/img/HandMoney_illustration_UseBackgroundBlue_RGB.svg"
  />

  <SplitView
    eyebrow="workforce"
    title="working at randstad"
    description="See how our passion for people coupled with the power intelligent machines sets us apart."
    buttonLink="https://google.com/"
    buttonText="read stories"
    bgColor="primary"
    photos={[
      "https://s3-go-dta-orbit.s3-eu-west-1.amazonaws.com/mt/master/assets/image/components/banners/photo/photo-left.jpg",
      "https://s3-go-dta-orbit.s3-eu-west-1.amazonaws.com/mt/master/assets/image/components/banners/photo/photo-left-small.jpg",
      "https://s3-go-dta-orbit.s3-eu-west-1.amazonaws.com/mt/master/assets/image/components/banners/photo/photo-left.jpg",
    ]}
  />
</>
;
```
