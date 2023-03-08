```jsx
import { MyEnvironmentLayout, Section } from "@ffw/randstad-shared-components";

function handleAddItem() {
  console.log('Handle add item');
}

function handleAddSectionItem() {
  console.log('Handle add section item');
}

function handleEdit() {
  console.log('edit item');
}
<MyEnvironmentLayout title="personal information" label="add contact details" handleAddItem={handleAddItem} description="Complete your personal information and keep it up to date to benefit from personalized job matches.">
  <Section title="contact details" handleEdit={handleEdit} handleAddItem={handleAddSectionItem} label="add section item" divider={true}>
    <div className="my-environment-item__list my-environment-item__list-details mt-s l:mt-xs">
      <div className="my-environment-item__list-title text--alternative">e-mail address:</div>
      <div className="my-environment-item__list-content mt-xxs l:mt-none">MyEmailAddress@gmail.com</div>
    </div>
  </Section>
</MyEnvironmentLayout>;
```
