import React from "react";
import t from "prop-types";
import withFieldGroup from "@hoc/withFormGroup";
import useLibrary from "@hooks/useLibrary";

const SelectField = ({ id, children, libs, ...props }) => {
  const [ref] = useLibrary(libs);

  return (
    <>
      <select id={id} className="untouched" data-rs-untouched="" ref={ref} {...props}>
        {children}
      </select>
      <span className="select-arrow icon">
        <svg>
          <use xlinkHref="/themes/custom/bluex/dist/assets/image/icons.svg#chevron-down"></use>
        </svg>
      </span>
    </>
  );
};

SelectField.type = "input";

SelectField.propTypes = {
  // Comming from withFieldGroup HOC
  /** Every other passed props will be added to `<input>`. Like "data-attribute" and "aria-label" */
  label: t.string,
  /** If not provided, will be generated from `name` */
  id: t.string,
  error: t.string,
  description: t.string,
  required: t.oneOfType([t.bool, t.string]),
  disabled: t.bool,
  capitalize: t.bool,
  children: t.any,
  optionalLabel: t.string,
  formGroupClass: t.string,
  /** Used to pass js Orbit library responsible for functionality. Note: This should passed on component setup so you don't have to pass it every time. */
  libs: t.object,
};

export default withFieldGroup(SelectField);
