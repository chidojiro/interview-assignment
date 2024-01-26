Steps
```jsx
import { Steps } from "@ffw/randstad-shared-components";

const exampleSteps = [
  {
    "id": 1,
    "name": "step1",
    "translation": "Step 1",
  },
  {
    "id": 2,
    "name": "step2",
    "translation": "Step 2",
    "completed": true,
  },
  {
    "id": 3,
    "name": "step3",
    "translation": "Step 3",
    "active": true,
  },
  {
    "id": 4,
    "name": "step4",
    "translation": "Step 4",
  },
  {
    "id": 5,
    "name": "step5",
    "translation": "Step 5",
  },
];

const handleChange = () => {
  console.log('Handled change');
}

<div className="bg-variant-white">
<Steps steps={exampleSteps} handleChangeStep={async () => {}} /></div>;
```