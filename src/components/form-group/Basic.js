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
  afterContent,
}) => {
  return (
    <div className={wrapClass.join(" ")}>
      {label && (
        <label className="form-group__label" htmlFor={id}>
          {label}
          {!required ? (
            <span className="form-group__optional"> {optionalLabel || "optional"}</span>
          ) : (
            <sup className="form-group__required">*</sup>
          )}
        </label>
      )}
      <div className="form-group__input">
        <ChildComponent {...componentProps} />
      </div>
      {error && <div className="form-group__feedback">{error}</div>}
      {description && <div className="form-group__message">{description}</div>}
      {afterContent}
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
  afterContent: t.any,
};

export default Basic;
