import React from "react";
import PropTypes from "prop-types";

const withFieldGroup = (ChildComponent) => {
  const FieldGroup = ({
    label,
    name,
    id,
    required,
    readOnly,
    description,
    error,
    children,
    optionalLabel,
    formGroupClass,
    ...props
  }) => {
    const wrapClass = ["form-group"];
    if (formGroupClass) wrapClass.push(formGroupClass);
    if (error) wrapClass.push("form-group--error");

    const defaultId = ["field"];
    defaultId.push(name);

    const componentProps = {
      name,
      id: id || defaultId.join("--"),
      ...props,
    };

    if (readOnly) componentProps["readOnly"] = "readonly";
    if (required) componentProps["required"] = "required";

    return (
      <div className={wrapClass.join(" ")}>
        {label && (
          <label className="form-group__label" htmlFor={id || defaultId.join("--")}>
            {label}
            {!required && (
              <span className="form-group__optional"> {optionalLabel || "optional"}</span>
            )}
          </label>
        )}
        <div className="form-group__input">
          <ChildComponent {...componentProps} />
        </div>
        {error && <div className="form-group__feedback">{error}</div>}
        {description && <div className="form-group__message">{description}</div>}
        {children}
      </div>
    );
  };

  FieldGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    error: PropTypes.string,
    description: PropTypes.string,
    required: PropTypes.bool,
    readOnly: PropTypes.bool,
    children: PropTypes.any,
    optionalLabel: PropTypes.string,
    formGroupClass: PropTypes.string,
  };

  return FieldGroup;
};

export default withFieldGroup;
