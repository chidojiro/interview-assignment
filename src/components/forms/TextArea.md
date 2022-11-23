```jsx
import { TextArea } from "@ffw/randstad-shared-components";

<TextArea
  id="textarea-1"
  name="textarea-1"
  placeholder="This is the job I was looking for!"
  label="motivation"
  characterCounter={true}
/>;
```

Without auto resize

```jsx
import { TextArea } from "@ffw/randstad-shared-components";

<TextArea
  id="textarea-2"
  name="textarea-2"
  placeholder="This is the job I was looking for!"
  label="motivation"
  autoResize={false}
  maxlength={200}
  characterCounter={true}
/>;
```

Expanded

```jsx
import { TextArea } from "@ffw/randstad-shared-components";

<TextArea
  id="textarea-3"
  name="textarea-3"
  placeholder="This is the job I was looking for!"
  label="motivation"
  expanded={true}
/>;
```

Translate labels

```jsx
import { TextArea } from "@ffw/randstad-shared-components";

<TextArea
  id="textarea-4"
  name="textarea-4"
  placeholder="Dit is de baan die ik zocht!"
  label="motivatie"
  characterCounter={true}
  characterCounterLabels={{
    charactersLeft: "@characters karakters over",
  }}
/>;
```
