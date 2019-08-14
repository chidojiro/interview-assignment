import dynamic from "next/dynamic";

const components = {
  missingTemplate: dynamic(import("./system/MissingTemplate")),
  block: dynamic(import("../components/layout/Block")),
  breadcrumbs: dynamic(import("../components/layout/Breadcrumbs")),
  topNavigation: dynamic(import("../components/layout/TopNavigation")),
  input: dynamic(import("../components/form-elements/Input")),
  inputFilter: dynamic(import("../components/form-elements/InputFilter")),
  password: dynamic(import("../components/form-elements/Password")),
  textArea: dynamic(import("../components/form-elements/TextArea")),
  radioButtons: dynamic(import("../components/form-elements/RadioButtons")),
  checkboxes: dynamic(import("../components/form-elements/Checkboxes")),
  dropdown: dynamic(import("../components/form-elements/Dropdown")),
  upload: dynamic(import("../components/form-elements/Upload")),
  logo: dynamic(import("../svg/Logo"))
};

export const registry = {
  system: {
    "missing-template": components.missingTemplate
  },
  layout: {
    'block': components.block,
    'breadcrumbs': components.breadcrumbs,
    'top-navigation': components.topNavigation
  },
  form: {
    'input': components.input,
    'input-filter': components.inputFilter,
    'password': components.password,
    'textarea': components.textArea,
    'radio-buttons': components.radioButtons,
    'checkboxes': components.checkboxes,
    'dropdown': components.dropdown,
    'upload': components.upload
  },
  svg: {
    logo: components.logo
  }
};
