import React from "react";
// import withFieldGroup, { FieldGroup } from "@hoc/withFormGroup";

/**
 * A box which enables the user to select one or multiple options. See [here](https://randstad.design/components/core/forms/checkbox/)
 *
 */
// Add unused props. Some of the props are comming from the withFieldGroup HOC.
type Checkbox = FieldGroupSelectionControl<React.ComponentPropsWithoutRef<"input">>

const Checkbox = ({ id, label, ...props }: Checkbox) => {
  return (
    <label htmlFor={id} className="selection-control selection-control--checkbox">
      <span className="selection-control__input">
        <input type="checkbox" id={id} {...props} />
        <span className="icon selection-control__control" aria-hidden="true">
          <svg viewBox="0 0 16 16">
            <polyline points="2.1,8.5 6.2,12.4 13.9,5.1"></polyline>
          </svg>
        </span>
      </span>
      <span className="selection-control__label">{label}</span>
    </label>
  );
};

// export default withFieldGroup(Checkbox);

interface BasicBase {
  label?: string
  optionalLabel?: string
  description?: string,
  afterContent?: React.ReactNode,
  error?: string,
  required?: boolean
}

interface Basic extends BasicBase {
  wrapClass: string[]
  htmlFor?: string,
  children?: React.ReactNode,
}

interface Stackable {
  classes: string[],
  children?: React.ReactNode,
  label: string,
  capitalize?: boolean,
  error?: string,
  description?: string
}

type Item = {
  label: string,
  id: string,
  name: string
}

type FieldGroupSelectionControl<P> = BasicBase & P & {
  name: string,
  formGroupClass?: string,
  capitalize?: boolean,
  readOnly?: boolean,
  fieldLabel?: string,
  /** If not provided, will be generated from `name` */
  id?: string,
  children?: React.ReactElement<{ id: string, name: string, label: string }>
}

function Basic({ wrapClass, label, htmlFor, required, optionalLabel, error, description, afterContent, children }: Basic) {
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

// function Stackable({ classes, children, label, capitalize, error, description, items }: Stackable) {
//   return (
//     <fieldset className={classes.join(" ")}>
//       <legend className="form-group__label hidden">{label}</legend>
//       {items && Array.isArray(items) &&
//         items.map(({ props: { id, name, label, ...props } }, i) => {
//           const nameSanitized = (name || "").split(" ").join("-");
//           const fieldId = id || `field--${nameSanitized}`;
//           let childLabel = label;

//           if (label && capitalize) {
//             childLabel = label.charAt(0).toUpperCase() + label.slice(1);
//           }

//           return (
//             <div className="form-group__input" key={i}>
//               {/* <ChildComponent id={fieldId} name={name} label={childLabel} {...props} /> */}
//             </div>
//           );
//         })}
//       {error && <div className="form-group__feedback">{error}</div>}
//       {description && <div className="form-group__message">{description}</div>}
//     </fieldset>
//   )
// }

function withFieldGroupSelectionControl<T, P extends {}>(ChildComponent: React.FunctionComponent<T>) {
  return ({
    label: propLabel,
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
    fieldLabel,
    children,
    ...props
  }: FieldGroupSelectionControl<P>) => {
    const wrapClass = ["form-group", "form-group--selection-control"];
    if (formGroupClass) wrapClass.push(formGroupClass);
    if (error) wrapClass.push("form-group--error");

    const nameSanitized = (name || "").split(" ").join("-");
    const fieldId = id || `field--${nameSanitized}`;

    let label = propLabel;

    if (propLabel && capitalize) {
      label = propLabel.charAt(0).toUpperCase() + propLabel.slice(1);
    }

    const componentProps = {
      name,
      id: fieldId,
      label: fieldLabel,
      ...props as T,
      // ...(readOnly ? { readOnly: "readonly" } : {}),
      // ...(readOnly ? { required: "required" } : {})
    };

    const formGroupProps = {
      wrapClass,
      label,
      forHtml: fieldId,
      required,
      optionalLabel,
      error,
      description,
      afterContent,
    };

    // return (React.Children.map(children, (child) => {
    //   child?.props.id
    //   child?.props.name
    //   child?.props.label
    // }))

    return (children ? <fieldset className={wrapClass.join(" ")}>
      <legend className="form-group__label hidden">{label}</legend>
      {
        React.Children.map(children, ({props: { id, name, label, ...props }}) => {
          const nameSanitized = (name || "").split(" ").join("-");
          const fieldId = id || `field--${nameSanitized}`;
          let childLabel = label;

          if (label && capitalize) {
            childLabel = label.charAt(0).toUpperCase() + label.slice(1);
          }

          return (
            <div className="form-group__input" key={id}>
              <ChildComponent id={fieldId} name={name} label={childLabel} {...props} />
            </div>
          );
        })}
      {error && <div className="form-group__feedback">{error}</div>}
      {description && <div className="form-group__message">{description}</div>}
    </fieldset> : <Basic {...formGroupProps}>
      <ChildComponent {...componentProps} />
    </Basic>)
  }
}

{/* <Checkbox name="email-12" label="job specialism">
  <input name="engineer" id="name" />
  <input name="engineer" />
</Checkbox> */}

export default withFieldGroupSelectionControl(Checkbox)
