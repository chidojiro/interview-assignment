Language switcher with disabled toast

```jsx
import { LanguageSwitcher } from "@ffw/randstad-shared-components";

const items = [
    {
        "language": "en",
        "isActive": true,
        "url": "/my-randstad/personal-information"
    },
    {
        "language": "fr",
        "isActive": false,
        "url": "/fr/mon-randstad/informations-personnelles"
    }
];

 <LanguageSwitcher items={items} extraClasses="l:ml-s" useToast={false}/>;
```

Language switcher with enabled toast on click

```jsx
import { LanguageSwitcher } from "@ffw/randstad-shared-components";

const items = [
    {
        "language": "en",
        "isActive": true,
        "url": "/my-randstad/personal-information"
    },
    {
        "language": "fr",
        "isActive": false,
        "url": "/fr/mon-randstad/informations-personnelles"
    }
];

const toastSettings = {
    id: 'test',
    title: {'en': 'title','fr': 'title fr'},
    buttonSuccessText: {'en': 'success','fr': 'success fr'},
    buttonCloseText: {'en': 'close','fr': 'close fr'}
};

 <LanguageSwitcher items={items} extraClasses="l:ml-s" useToast={true} toastSettings={toastSettings} />;
```
