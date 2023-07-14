```jsx
import { Submenu } from "@ffw/randstad-shared-components";

const submenuItems=[
    {
        "id": "login",
        "title": "login",
        "url": "/my-randstad/login",
        "children": [],
        "isActive": true,
    },
    {
        "id": "register",
        "title": "register",
        "url": "/my-randstad/register",
        "children": [],
        "isActive": false,
    },
    {
        "id": "forgot-password",
        "title": "forgot password",
        "url": "/my-randstad/forgot-password",
        "children": [],
        "isActive": false,
    }
];

<div style={{backgroundColor: '#2175d9'}}>
    <Submenu items={submenuItems}/>
</div>;
```

