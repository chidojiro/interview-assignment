import React from "react";
import t from "prop-types";

/**
 * Select from group markup.
 *
 * @private
 */
const SelectionControl = ({
  wrapClass,
  label,
  required,
  capitalize,
  optionalLabel,
  ChildComponent,
  componentProps,
  error,
  description,
  children,
}) => {
  const classes = [...wrapClass];
  classes.push("form-group--selection-control");

  const { fieldLabel, ...props } = componentProps;

  return (
    <fieldset className={classes.join(" ")}>
      {label && (
        <legend className="form-group__label">
          {label}
          {!required && (
            <span className="form-group__optional"> {optionalLabel || "optional"}</span>
          )}
        </legend>
      )}
      {children ? (
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
        })
      ) : (
        <div className="form-group__input">
          <ChildComponent label={fieldLabel} {...props} />
        </div>
      )}
      {error && <div className="form-group__feedback">{error}</div>}
      {description && <div className="form-group__message">{description}</div>}
    </fieldset>
  );
};

SelectionControl.propTypes = {
  wrapClass: t.array,
  label: t.string,
  id: t.string,
  required: t.bool,
  capitalize: t.bool,
  optionalLabel: t.string,
  ChildComponent: t.any,
  componentProps: t.object,
  error: t.string,
  description: t.string,
  children: t.any,
};

export default SelectionControl;
