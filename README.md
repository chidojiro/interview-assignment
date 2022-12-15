# Shared Components Library

React UI library build on Orbit. Used for sharing components across Bluex applications.

Support documention for all available components. [Documentation link](https://bluex-shared-components-library-docs.netlify.app/)

`master branch is used for older version used in my randstad BE/YT.`

## What's inside the box

- [Orbit](https://randstad.design/)
- [react-styleguidist](https://react-styleguidist.js.org/)
- React
- Webpack

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

Maintainers.

<table>
  <tbody>
    <tr>   
      <td align="center">
        <a href="https://gitlab.workingpropeople.com/plamen.savov" rel="nofollow">
          <img src="https://gitlab.workingpropeople.com/uploads/-/system/user/avatar/307/avatar.png?width=90" alt="" style="max-width:100%;" width="100px;">
          <br>
          <sub><b>Plamen Savov</b></sub>
        </a>
      </td>    
      <td align="center">
        <a href="https://gitlab.workingpropeople.com/amikhutkin" rel="nofollow">
          <img src="https://gitlab.workingpropeople.com/uploads/-/system/user/avatar/300/avatar.png?width=400" alt="" style="max-width:100%;" width="100px;">
          <br>
          <sub><b>Аlexander Мikhutkin</b></sub>
        </a>
      </td>    
    </tr>
  </tbody>
</table>
