import React from "react";
import t from "prop-types";

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
    label: t.string.isRequired,
    name: t.string.isRequired,
    id: t.string,
    error: t.string,
    description: t.string,
    required: t.bool,
    readOnly: t.bool,
    children: t.any,
    optionalLabel: t.string,
    formGroupClass: t.string,
  };

  return FieldGroup;
};

export default withFieldGroup;
