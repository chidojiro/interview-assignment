### Date Picker
For localisation inside applications, you can add translations and then pass them as string to this component.

Check the examples below to see how the localisation is done.

default is today (dd-mm-yyyy)
```jsx
import { DatePicker } from "@ffw/randstad-shared-components";

<DatePicker
  ariaLabel="Open date picker"
  altFormat="d-m-Y"
  dateFormat="Y-m-d"
  formGroupClass="form-group__input--button form-group--datepicker"
  name="datepicker-1"
  id="datepicker-1"
  required
  placeholder="dd-mm-yyyy"
  label="default is today (dd-mm-yyyy)"
/>;
```

min-max date (dd-mm-yyyy)
```jsx
import { DatePicker } from "@ffw/randstad-shared-components";

<DatePicker
  ariaLabel="Open date picker"
  altFormat="d-m-Y"
  dateFormat="Y-m-d"
  formGroupClass="form-group__input--button form-group--datepicker"
  name="datepicker-1"
  id="datepicker-1"
  required
  placeholder="dd-mm-yyyy"
  label="min-max date (dd-mm-yyyy)"
  minDate="2023-05-05"
  maxDate="2023-07-29"
/>;
```

disabled state
```jsx
import { DatePicker } from "@ffw/randstad-shared-components";

<DatePicker
  ariaLabel="Open date picker"
  altFormat="d-m-Y"
  dateFormat="Y-m-d"
  formGroupClass="form-group__input--button form-group--datepicker form-group--disabled"
  name="datepicker-1"
  id="datepicker-1"
  required
  placeholder="dd-mm-yyyy"
  label="disabled state"
  disabled
/>;
```

dutch localisation [option 1] (by custom props as per Orbit's example)
```jsx
import { DatePicker } from "@ffw/randstad-shared-components";

<DatePicker
  ariaLabel="Open date picker"
  altFormat="d-m-Y"
  dateFormat="Y-m-d"
  formGroupClass="form-group__input--button form-group--datepicker"
  name="datepicker-1"
  id="datepicker-1"
  required
  placeholder="dd-mm-yyyy"
  label="dutch localisation"
  longMonths="januari, februari, maart, april, mei, juni, juli, augustus, september, oktober, november, december"
  shortMonths="jan, feb, mrt, apr, mei, jun, jul, aug, sep, okt, nov, dec"
  shortWeeks="zo, ma, di, wo, do, vr, za"
/>;
```

french localisation [option 2] (by passing language prop and utilising localisation from the flatpickr)
```jsx
import { DatePicker } from "@ffw/randstad-shared-components";

<DatePicker
  ariaLabel="Open date picker"
  altFormat="d-m-Y"
  dateFormat="Y-m-d"
  formGroupClass="form-group__input--button form-group--datepicker"
  name="datepicker-1"
  id="datepicker-1"
  required
  placeholder="dd-mm-yyyy"
  label="french localisation"
  language="fr"
/>;
```

show weeknumbers
```jsx
import { DatePicker } from "@ffw/randstad-shared-components";

<DatePicker
  ariaLabel="Open date picker"
  altFormat="d-m-Y"
  dateFormat="Y-m-d"
  formGroupClass="form-group__input--button form-group--datepicker"
  name="datepicker-1"
  id="datepicker-1"
  required
  placeholder="dd-mm-yyyy"
  label="show weeknumbers"
  showWeekNumbers
/>;
```

first day is sunday
```jsx
import { DatePicker } from "@ffw/randstad-shared-components";

<DatePicker
  ariaLabel="Open date picker"
  altFormat="d-m-Y"
  dateFormat="Y-m-d"
  formGroupClass="form-group__input--button form-group--datepicker"
  name="datepicker-1"
  id="datepicker-1"
  required
  placeholder="dd-mm-yyyy"
  label="first day is sunday"
  firstWeekDay="sunday"
/>;
```