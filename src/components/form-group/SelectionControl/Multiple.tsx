import React from "react";
import { FieldGroupBase } from "@hoc/withFormGroup";

interface SelectionControl extends FieldGroupBase {
  classes: string[],
  // TODO: Remove any and implement Generic type.
  ChildComponent: any,
}

const Multiple = ({ classes, label, error, description, children, ChildComponent, capitalize }: SelectionControl) => {
  if (!label) {
    console.warn("Missing label for the legend. Fieldset tag requires a legend.");
  }

  return (
    <fieldset className={classes.join(" ")}>
      <legend className="form-group__label hidden">{label}</legend>
      {children && Array.isArray(children) &&
        children.map(({ props: { id, name, label, ...props } }, i) => {
          const nameSanitized = (name || "").split(" ").join("-");
          const fieldId = id || `field--${nameSanitized}`;
          let childLabel = label;

          if (label && capitalize) {
            childLabel = label.charAt(0).toUpperCase() + label.slice(1);
          }

          return (
            <div className="form-group__input" key={i}>
              <ChildComponent id={fieldId} name={name} label={childLabel} {...props} />
            </div>
          );
        })}
      {error && <div className="form-group__feedback">{error}</div>}
      {description && <div className="form-group__message">{description}</div>}
    </fieldset>
  );
};

export default Multiple;
