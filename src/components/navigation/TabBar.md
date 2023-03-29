```jsx
import { TabBar } from "@ffw/randstad-shared-components";

<TabBar url="/my-randstad/" items={[
  {
    "title": "overview",
    "url": "/my-randstad/",
    "icon": "dashboard",
    "isActive": true,
  },
  {
    "title": "my applications",
    "url": "/my-randstad/my-applications/",
    "icon": "briefcase",
    "isActive": false,
  },
  {
    "title": "job preferences",
    "url": "/my-randstad/job-preferences/",
    "icon": "filter",
    "isActive": false,
  },
  {
    "title": "personal information",
    "url": "/my-randstad/personal-information/",
    "icon": "account-circle",
    "isActive": false,
  },
  {
    "title": "settings",
    "url": "/my-randstad/my-account/",
    "icon": "settings",
    "isActive": false,
  }
]} />;
```
