Logged Out state of MyRandstad component

```jsx
import { MyRandstad } from "@ffw/randstad-shared-components";

<ul>
<MyRandstad
    label=''
    show={true}
    isAuth={false}
    userName={undefined}
/>
</ul>;
```
Logged Out state of MyRandstad component without label

```jsx
import { MyRandstad } from "@ffw/randstad-shared-components";

<ul>
<MyRandstad
    label=''
    show={true}
    isAuth={false}
    userName={undefined}
    hiddenLabel={true}
/>
</ul>;
```
Logged In state of MyRandstad component

```jsx
import { MyRandstad } from "@ffw/randstad-shared-components";

<ul>
<MyRandstad
    label='test'
    show={true}
    isAuth={true}
    userName={{
    "familyName": "Smith",
    "givenName": "John",
    "isEmployee": false
}}
/>
</ul>;
```