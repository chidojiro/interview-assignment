 ```jsx
import { Logo } from "@ffw/randstad-shared-components";

const mainMenuItems = [
    {
        "title": "job seeker",
        "url": "/homepage/",
        "children": [],
        "isActive": false
    },
    {
        "title": "employers",
        "url": "/employers/",
        "children": [],
        "isActive": false
    },
    {
        "title": "career resources",
        "url": "/career-resources/all-articles/",
        "children": [],
        "isActive": false
    },
    {
        "title": "salaries",
        "url": "/salaries",
        "children": [],
        "isActive": false
    },
    {
        "title": "locations",
        "url": "/locations/",
        "children": [],
        "isActive": false
    },
    {
        "title": "axy 13",
        "url": "/axy-13/",
        "children": [],
        "isActive": false
    },
    {
        "title": "axy",
        "url": "/axy-13/",
        "children": [],
        "isActive": false
    },
    {
        "title": "suh menu parent link",
        "url": "/suh-menu-parent-link/",
        "children": [
          {
            title: 'sub menu item 1',
            url: '/second-sub-menu-url/',
          },
          {
            title: 'sub menu item 2',
            url: '/second-sub-menu-url/',
          },
        ],
        "isActive": false
    }
];

<div style={{backgroundColor: '#2175d9'}}>
    <MainMenu items={mainMenuItems} />
</div>;
```