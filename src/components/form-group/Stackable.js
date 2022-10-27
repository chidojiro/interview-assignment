import React from "react";
import cn from "classnames";

import t from "prop-types";

/**
 * Stackable form group component.
 *
 * Groups form component with same name. It provides same functionality as FormGroup component. Like legend, errors, descriptions and etc. See example in form components.
 *
 * *It will autogenerate id for each form element, if not provided*
 *
 * ---
 * ### Cannot be used as a standalone component.
 */
const Stackable = ({
  children,
  name,
  error,
  description,
  label,
  className,
  capitalize,
  hideLabel = false,
}) => {
  if (!label) {
    console.error("Missing label for the legend. Fieldset tag requires a legend.");
  }

  let legend = label;

  if (label && capitalize) {
    legend = label.charAt(0).toUpperCase() + label.slice(1);
  }

  return (
    <fieldset
      className={cn("form-group", "form-group--selection-control", className, {
        "form-group--error": error,
      })}>
      <legend className={cn("form-group__label", { hidden: hideLabel })}>{legend}</legend>
      {React.Children.map(children, (child, i) => {
        return (
          <div className="form-group__input">
            {React.cloneElement(child, {
              withFormGroup: false,
              stackableIndex: i,
              ...(name ? { name } : {}),
            })}
          </div>
        );
      })}
      {error && <div className="form-group__feedback">{error}</div>}
      {description && <div className="form-group__message">{description}</div>}
    </fieldset>
  );
};

Stackable.propTypes = {
  name: t.string.isRequired,
  className: t.string,
  label: t.string.isRequired,
  error: t.string,
  description: t.string,
  /** @ignore */
  children: t.any,
  capitalize: t.bool,
  /** Visually will hide the label, but it will remain in the markup. For a11y reasons. */
  hideLabel: t.bool,
};

Stackable.defaultProps = {
  hideLabel: false,
};

export default Stackable;
