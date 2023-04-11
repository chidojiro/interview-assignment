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
    illustration="https://s3-go-dta-orbit.s3-eu-west-1.amazonaws.com/mt/master/assets/image/components/banners/TextBalloonPhone/TextBalloonPhone_illustration_UseBackgroundTurquoise_RGB.svg"
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
