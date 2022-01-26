```jsx
import { Navigation } from "@ffw/randstad-shared-components";

<Navigation
  classes={{ className: "bg-variant-brand-primary" }}
  mainMenu={[
    {
      title: "Home",
      url: "#",
      isActive: true,
      children: [
        {
          title: "search",
          url: "#"
        }
      ]
    },
    {
      title: "About us",
      url: "#",
    },
    {
      title: "Contacts",
      url: "#",
    },
  ]}
  showMyRandstad={true}
  config={{
    homepageUrl: "http://localhost:6060",
    navigationHeadingText: "simle navigation",
  }}
  myRandstad={{
    baseUrl: "http://localhost:6060",
  }}
/>;
```
