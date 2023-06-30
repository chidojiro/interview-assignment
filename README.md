# Shared Components Library

React UI library build on Orbit. Used for sharing components across Bluex applications.

Official guidelines for working with the library. [Confluence link](https://global-confluence.randstadservices.com/display/RXP/Component+Libraries)

Support documention for all available components. [Styleguide link](https://bluex-shared-components-docs-main.netlify.app/)

`main branch is used as a starting point for the RXP Shared components.`

`master branch is used for older version used in my randstad BE/YT.`

## What's inside the box

- [Orbit](https://randstad.design/)
- [react-styleguidist](https://react-styleguidist.js.org/)
- React
- Webpack
- classnames (library to manage classes)
- Jest & React testing library
- Typescript

## Getting started

The follow guide is the recommended setup for `Bluex` apps.

1. Add `shared components library` asw repo in `package.json` file and install it.

2. Create new folder inside `components` and name it `ui`.

3. Create new folder inside `ui` and name it `hoc`.

4. Inside `hoc` folder create `withUI.js` file and copy the example from `lib/src/hoc/withUI.example.js` (it can be added to webpack alias according the app). It will be used to prevent app crashing when component is missing. With this `hoc` can be set initail props.

5. Inside `hoc` folder create `withLib.js` file and copy the example from `lib/src/hoc/withLib.example.js` (it can be added to webpack alias according the app). It will help orbit js linking with `shared components library`.

6. Create new component (it can be added to webpack alias according the app).

7. Import the component from `@ffw/randstad-shared-components/build`

8. Wrap it with `withUI` and export it default.

9. Wrap componenet with `withLib` and pass all required orbit library as array of string/strings and export it default.  
   `Skip this step when component does not have any orbit js library/libraries.`

Example without default props

```jsx
import { InputField } from "@ffw/randstad-shared-components/build";
import UI from "@UI/hoc/UI"; // here webpack alias is used.

export default UI(InputField)();
```

Example with default props

_An excellent way to setup initial configuration without the need to be passed on each call. Like datepicker date format or `SPH` theme_

```jsx
import { Navigation } from "@ffw/randstad-shared-components/build";
import UI from "@UI/hoc/UI"; // here webpack alias is used.

export default UI(Navigation)({ theme: "sph" });
```

Example with Orbit js library

```jsx
import { Sortbar } from "@ffw/randstad-shared-components/build";
import UI from "@UI/hoc/UI"; // here webpack alias is used.
import WithLib from "@UI/hoc/WithLib"; // here webpack alias is used.

export default WithLib(["untouched"])(UI(Sortbar)());
```

## Creating & updating components

1.  Create the component in the src/components folder. The folder should include the following (may defer based on the case):  
      1.  index.tsx file for the main component's logic
      2.  <ComponentName>.types.d.ts file containing the types and interfaces used for the component.
      3.  <ComponentName>.md file to describe and make a styleguide for the component. Link the Orbit's component from the  **Randstad Design**  page inside the styleguide as reference.
      4.  The components usually fall into specific  **folder**  **groups**  -  **forms**,  **navigation**,  **headers**,  **footer**, etc. If you cannot find a specific group - you can create one for future use as well or you can put the new component inside the  **common**  group folder.
2.  Add  **unit tests**  inside the  **src/__tests__**  folder and follow the same folder structure that you follow for placing the component initially.
3.  If you update an already existing component - make sure to update the unit tests for it if needed. Make sure to build at least one application and there are no errors regarding the component. Align with other teams to test it out as well if a major change has been introduced or there are concerns regarding the running of the new changes introduced by you. When a component is introduced by a team - when this component gets updated from another team and the change is functional -  **cross-review**  is required by the same team that has developed it initially.
4.  **Classnames**  - it's preferable to use the classnames library for better readability and management of the classnames when there's logic behind them. For plain classnames which are always static - there's no need to use the library.
5.  **Hooks & Utilities**  - extract into hooks and utility functions all functionalities that complicate the main component and shouldn't rest inside it. The components should be clean and "dummy" as much as possible, without extra usage of logic, properties, etc.
    1.  **Exporting hooks and utilities**: The hooks and utilities are divided into two folders -  **hooks/**  and  **utils/.**  There is index.ts file for exporting them for usage outside of the library. If you use them only inside the react components library - it is not necessary to export them from there, just use the relative imports.
6.  **Reusability**  - develop reusable React components that are decoupled from specific application logic or dependencies, focusing on generic functionalities and clear interfaces to ensure broad usability across multiple applications.

### **Aliases that can be used inside the applications (add to tsconfig.json)**

``"@UI": ["node_modules/@ffw/randstad-shared-components"],``

``"@UIHooks": ["node_modules/@ffw/randstad-shared-components/src/hooks"],``  

``"@UIUtils": ["node_modules/@ffw/randstad-shared-components/src/utils"],``
### **Using the Styleguide**

1.  Run  **yarn docs:dev**  inside the main folder of the repository to see the Styleguide and demo of all components that have .md files and are described.

## Build orbit-randstad css

Go to `/src/assets` folder and run `gulp build` inside it.
## Contributors

Please check the guide for [contributors](https://gitlab.workingpropeople.com/randstad-bluex/git-df-prd-bluex-lib-react-components/-/blob/dev/CONTRIBUTORS.md):

- [Deployment](https://gitlab.workingpropeople.com/randstad-bluex/git-df-prd-bluex-lib-react-components/-/blob/dev/CONTRIBUTORS.md#deployment)
- [Working with Components](https://gitlab.workingpropeople.com/randstad-bluex/git-df-prd-bluex-lib-react-components/-/blob/dev/CONTRIBUTORS.md#working-with-components)
  - [Setup](https://gitlab.workingpropeople.com/randstad-bluex/git-df-prd-bluex-lib-react-components/-/blob/dev/CONTRIBUTORS.md#setup)
  - [Update/Extend components](https://gitlab.workingpropeople.com/randstad-bluex/git-df-prd-bluex-lib-react-components/-/blob/dev/CONTRIBUTORS.md#updateextend-components)
- [Working with documentation](https://gitlab.workingpropeople.com/randstad-bluex/git-df-prd-bluex-lib-react-components/-/blob/dev/CONTRIBUTORS.md#working-with-documentation)
  - [Local development](https://gitlab.workingpropeople.com/randstad-bluex/git-df-prd-bluex-lib-react-components/-/blob/dev/CONTRIBUTORS.md#local-development)
  - [Deploying the documentation](https://gitlab.workingpropeople.com/randstad-bluex/git-df-prd-bluex-lib-react-components/-/blob/dev/CONTRIBUTORS.md#deploying-the-documentation)
  - [Setup assets](https://gitlab.workingpropeople.com/randstad-bluex/git-df-prd-bluex-lib-react-components/-/blob/dev/CONTRIBUTORS.md#setup-assets)
- [Git flow](https://gitlab.workingpropeople.com/randstad-bluex/git-df-prd-bluex-lib-react-components/-/blob/dev/CONTRIBUTORS.md#git-flow)
- [Available commands](https://gitlab.workingpropeople.com/randstad-bluex/git-df-prd-bluex-lib-react-components/-/blob/dev/CONTRIBUTORS.md#available-commands)

