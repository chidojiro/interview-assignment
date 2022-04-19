import React from "react";
import PropTypes from "prop-types";

const Multiple = ({ classes, label, error, description, children, ChildComponent, capitalize }) => {
  if (!label) {
    console.warn("Missing label for the legend. Fieldset tag requires a legend.");
  }

  return (
    <fieldset className={classes.join(" ")}>
      <legend className="form-group__label hidden">{label}</legend>
      {children &&
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

Multiple.propTypes = {
  classes: PropTypes.array,
  label: PropTypes.string,
  error: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.array,
  ChildComponent: PropTypes.func.isRequired,
  capitalize: PropTypes.bool,
};

export default Multiple;
