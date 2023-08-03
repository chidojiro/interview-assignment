```jsx
import { Autosuggest } from "@ffw/randstad-shared-components";

<Autosuggest
  name="text-2"
  id="text-2"
  required
  placeholder="select your city ..."
  label="city"
  initialValue="Durham"
  items={[
    "Bath",
    "Birmingham",
    "Bradford",
    "Brighton & Hove",
    "Bristol",
    "Cambridge",
    "Canterbury",
    "Carlisle",
    "Derby",
    "Durham",
    "Ely",
    "Exeter",
  ]}
  onInputChange={(item) => console.log(item, "onChange")}
  onSelectItem={(item) => console.log(item, "onSelectItem")}
/>;
```

With skipped filter

```jsx
import { Autosuggest } from "@ffw/randstad-shared-components";

<Autosuggest
  name="text-2"
  id="text-2"
  required
  placeholder="select your city ..."
  label="city"
  config={{ skipFilter: true }}
  onInputChange={(item) => console.log(item)}
  items={[
    "Bath",
    "Birmingham",
    "Bradford",
    "Brighton & Hove",
    "Bristol",
    "Cambridge",
    "Canterbury",
    "Carlisle",
    "Derby",
    "Durham",
    "Ely",
    "Exeter",
  ]}
/>;
```

With allowed numeric values

```jsx
import { Autosuggest } from "@ffw/randstad-shared-components";
"",
  (
    <Autosuggest
      name="text-2"
      id="text-2"
      required
      placeholder="select your city ..."
      label="city"
      config={{ allowNumericValue: true }}
      onInputChange={(item) => console.log(item)}
      items={[
        "Bruxelles (1047)",
        "Bruxelles (1043)",
        "Bruxelles 1 (1000)",
        "Bruxelles 12 (1120)",
        "Bruxelles 13 (1130)",
        "Bruxelles 14 (1140)",
        "Bruxelles 15 (1150)",
        "Bruxelles 16 (1160)",
        "Bruxelles 17 (1170)",
        "Bruxelles 18 (1180)",
        "Bruxelles 19 (1190)",
        "Bruxelles 2 (1020)",
        "Bruxelles 20 (1200)",
        "Bruxelles 21 (1210)",
        "Bruxelles 3 (1030)",
        "Bruxelles 4 (1040)",
        "Bruxelles 5 (1050)",
        "Bruxelles 6 (1060)",
        "Bruxelles 7 (1070)",
        "Bruxelles 8 (1080)",
        "Bruxelles 9 (1090)",
      ]}
    />
  );
```

With strip items word list

```jsx
import { Autosuggest } from "@ffw/randstad-shared-components";
"",
  (
    <Autosuggest
      name="text-2"
      id="text-2"
      required
      placeholder="select your city ..."
      label="city"
      config={{ itemsStripWordList: ["Région:", "Département:"], allowNumericValue: true }}
      onInputChange={(item) => console.log(item)}
      items={[
        "Région: Auvergne-Rhône-Alpes",
        "Département: Ain (01)",
        "Département: Aisne (02)",
        "Département: Allier (03)",
        "Département: Alpes-Maritimes (06)",
        "Département: Alpes-de-Haute-Provence (04)",
        "Département: Aveyron (12)",
        "ABBEVILLE (80100)",
      ]}
    />
  );
```

With custom input
```jsx
import { Autosuggest } from "@ffw/randstad-shared-components";

<Autosuggest
  customInput
  name="text-2"
  id="text-2"
  required
  placeholder="select your city ..."
  label="city"
  items={[
    "Bath",
    "Birmingham",
    "Bradford",
    "Brighton & Hove",
    "Bristol",
    "Cambridge",
    "Canterbury",
    "Carlisle",
    "Derby",
    "Durham",
    "Ely",
    "Exeter",
  ]}
  onInputChange={(item) => console.log(item, "onChange")}
  onSelectItem={(item) => console.log(item, "onSelectItem")}
/>;
```

With custom input that has custom label and icon
```jsx
import { Autosuggest } from "@ffw/randstad-shared-components";

<Autosuggest
  customInput
  customInputLabel="My custom input:"
  customInputIcon="search"
  name="text-3"
  id="text-3"
  required
  placeholder="select your city ..."
  label="city"
  items={[
    "Bath",
    "Birmingham",
    "Bradford",
    "Brighton & Hove",
    "Bristol",
    "Cambridge",
    "Canterbury",
    "Carlisle",
    "Derby",
    "Durham",
    "Ely",
    "Exeter",
  ]}
  onInputChange={(item) => console.log(item, "onChange")}
  onSelectItem={(item) => console.log(item, "onSelectItem")}
/>;
```