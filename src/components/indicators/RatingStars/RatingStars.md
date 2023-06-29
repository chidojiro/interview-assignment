Rating Stars with default state

```jsx
import { RatingStars } from "@ffw/randstad-shared-components";

const items =[
    {
      "id": "Fundamental awareness",
      "name": "Fundamental awareness"
    },
    {
      "id": "Novice",
      "name": "Novice"
    },
    {
      "id": "Intermediate",
      "name": "Intermediate"
    },
    {
      "id": "Advanced",
      "name": "Advanced"
    },
    {
      "id": "Expert",
      "name": "Expert"
    }
  ];

<div className="bg-variant-brand-primary">
    <RatingStars
      name="rating1"
      stars={items}
      label="Rating"
      value=""
    />
</div>
```
Rating Stars with prefilled value

```jsx
import { RatingStars } from "@ffw/randstad-shared-components";
import { useState } from 'react';

const items =[
  {
    "id": "Fundamental awareness",
    "name": "Fundamental awareness"
  },
  {
    "id": "Novice",
    "name": "Novice"
  },
  {
    "id": "Intermediate",
    "name": "Intermediate"
  },
  {
    "id": "Advanced",
    "name": "Advanced"
  },
  {
    "id": "Expert",
    "name": "Expert"
  }
]

const [value, setValue] = useState('Intermediate');

<div className="bg-variant-brand-tertiary">
    <RatingStars
      name="rating2"
      stars={items}
      label="Rating"
      value={value}
    />
</div>
```
