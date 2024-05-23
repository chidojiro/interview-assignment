General Message
```jsx
import { Banner } from '@ffw/randstad-shared-components';

const Button = (props) => <a href="#?" {...props}>view more</a>;

<Banner title="coronavirus advice." button={<Button />} onClose={() => console.log('close')}>
  A safe and healthy work environment should always come as standard. Whilst coronavirus is still a relatively new illness, with daily developments, there are still steps employees and employers can take to help prevent the infection and spread of COVID-19.
</Banner>
```

Error Message
```jsx
import { Banner } from '@ffw/randstad-shared-components';

<Banner title="coronavirus advice." button={<a href="#?">view more</a>} type="error" onClose={() => console.log('close')}>
  A safe and healthy work environment should always come as standard. Whilst coronavirus is still a relatively new illness, with daily developments, there are still steps employees and employers can take to help prevent the infection and spread of COVID-19.
</Banner>
