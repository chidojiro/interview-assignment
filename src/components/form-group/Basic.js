import React from "react";
import t from "prop-types";

/**
 * Basic form group markup.
 *
 * @ignore
 */
const Basic = ({
  wrapClass,
  label,
  id,
  required,
  optionalLabel,
  ChildComponent,
  componentProps,
  error,
  description,
  children,
}) => {
  /* eslint-disable no-unused-vars */
  const { required: _, ...props } = componentProps;
  /* eslint-enable no-unused-vars */
  return (
    <div className={wrapClass.join(" ")}>
      {label && (
        <label className="form-group__label" htmlFor={id}>
          {label}
          {!required && (
            <span className="form-group__optional"> {optionalLabel || "optional"}</span>
          )}
        </label>
      )}
      <div className="form-group__input">
        <ChildComponent required={required} {...props} />
      </div>
      {error && <div className="form-group__feedback">{error}</div>}
      {description && <div className="form-group__message">{description}</div>}
      {children}
    </div>
  );
};

Basic.propTypes = {
  wrapClass: t.array,
  label: t.string,
  id: t.string,
  required: t.bool,
  optionalLabel: t.string,
  ChildComponent: t.any,
  componentProps: t.object,
  error: t.string,
  description: t.string,
  children: t.any,
};

export default Basic;
