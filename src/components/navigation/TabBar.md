```jsx
import { TabBar } from "@ffw/randstad-shared-components";

<TabBar items={[
  {
    "title": "overview",
    "href": "/my-randstad/",
    "icon": "dashboard",
    "isActive": "true"
  },
  {
    "title": "my applications",
    "href": "/my-randstad/my-applications/",
    "icon": "briefcase",
    "isActive": "false"
  },
  {
    "title": "job preferences",
    "href": "/my-randstad/job-preferences/",
    "icon": "filter",
    "isActive": "false"
  },
  {
    "title": "personal information",
    "href": "/my-randstad/personal-information/",
    "icon": "account-circle",
    "isActive": "false"
  },
  {
    "title": "settings",
    "href": "/my-randstad/my-account/",
    "icon": "settings",
    "isActive": "false"
  }
]} />;
```
