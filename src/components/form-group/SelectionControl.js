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
    <div className={classes.join(" ")}>
      {label && (
        <div className="form-group__label">
          {label}
          {!required && (
            <span className="form-group__optional"> {optionalLabel || "optional"}</span>
          )}
        </div>
      )}
      {children ? (
        children.map(({ props: { id, name, ...props } }, i) => {
          const nameSanitized = (name || "").split(" ").join("-");
          const fieldId = id || `field--${nameSanitized}`;

          return (
            <div className="form-group__input" key={i}>
              <ChildComponent id={fieldId} name={name} capitalize={capitalize} {...props} />
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
    </div>
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
