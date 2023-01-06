// import React from "react";
// import withFieldGroup, { FieldGroup } from "@hoc/withFormGroup";

/**
 * A field to enter data in a pre defined format. See [here](https://randstad.design/components/core/forms/input-field/)
 *
 */
// // Add unused props. Some of the props are comming from the withFieldGroup HOC.
// const InputField = ({ type = "text", ...props } : Input) => {
//   const fieldProps = {
//     type,
//     ...props,
//   };

//   return <input {...fieldProps} />;
// };

// export default withFieldGroup(InputField);

import React from "react";

interface BasicBase {
  label?: string
  optionalLabel?: string
  description?: string,
  afterContent?: React.ReactNode,
  error?: string,
  required?: boolean
}

interface ComponentProps {
  name: string,
  /** If not provided, will be generated from `name` */
  id?: string,
} 

interface Basic extends BasicBase {
  wrapClass: string[]
  htmlFor?: string,
  children: React.ReactNode,
}

interface FieldGroup extends BasicBase, ComponentProps {
  formGroupClass?: string,
  capitalize?: boolean,
  readOnly?: boolean,
}

function Basic({ wrapClass, label, htmlFor, required, optionalLabel, error, description, afterContent, children}: Basic) {
  return <div className={wrapClass.join(" ")}>
    {label && (
      <label className="form-group__label" htmlFor={htmlFor}>
        {label}
        {!required && (
          <span className="form-group__optional"> {optionalLabel || "optional"}</span>
        )}
      </label>
    )}
    <div className="form-group__input">
      {children}
    </div>
    {error && <div className="form-group__feedback">{error}</div>}
    {description && <div className="form-group__message">{description}</div>}
    {afterContent}
  </div>
}

function withFieldGroup<T extends {}>(ChildComponent: React.FunctionComponent<T>) {
  return ({
    label,
    name,
    id,
    required,
    readOnly,
    description,
    error,
    afterContent,
    optionalLabel,
    formGroupClass,
    capitalize,
    ...props
  }: FieldGroup) => {
    const wrapClass = ["form-group"];
    if (formGroupClass) wrapClass.push(formGroupClass);
    if (error) wrapClass.push("form-group--error");

    const nameSanitized = (name || "").split(" ").join("-");
    const fieldId = id || `field--${nameSanitized}`;

    let fieldLabel = label;

    if (label && capitalize) {
      fieldLabel = label.charAt(0).toUpperCase() + label.slice(1);
    }

    const componentProps = {
      name: nameSanitized,
      id: fieldId,
      ...props as T,
      // ...(readOnly ? { readOnly: "readonly" } : {}),
      // ...(readOnly ? { required: "required" } : {})
    };

    const formGroupProps = {
      wrapClass,
      label: fieldLabel,
      forHtml: fieldId,
      required,
      optionalLabel,
      error,
      description,
      afterContent,
      Component: ChildComponent,
      componentProps
    };


    return <Basic {...formGroupProps}>
      <ChildComponent {...componentProps} />
    </Basic>
  }
}

type InputField = FieldGroup & React.ComponentPropsWithoutRef<'input'>

const InputField = ({ type = "text", ...props }: InputField) => {
  return <input type={type} {...props} />
};

export default withFieldGroup(InputField)
