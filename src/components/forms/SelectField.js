import React from "react";
import t from "prop-types";
import cn from "classnames";

import withField from "@hoc/withField";
import useLibrary from "@hooks/useLibrary";
import FormGroup from "@components/form-group/FormGroup";

/**
 * An input field with a list of options that can be selected from predefined data. See [here](https://randstad.design/components/core/forms/drop-down/).
 *
 * ---
 * *Every other passed prop will be added to `<select>`. Like "data-attribute" or "aria-label"*
 *
 * **Wrapped with `FormGroup` component and support all of its props.**
 */
const SelectField = ({ children, className, libs, _formGroupProps, ...props }) => {
  const [ref] = useLibrary(libs);

  return (
    <FormGroup {..._formGroupProps}>
      <select
        className={cn("untouched", className)}
        data-rs-untouched=""
        data-scl=""
        ref={ref}
        {...props}>
        {children}
      </select>
      <span className="select-arrow icon">
        <svg>
          <use xlinkHref="/themes/custom/bluex/dist/assets/image/icons.svg#chevron-down"></use>
        </svg>
      </span>
    </FormGroup>
  );
};

SelectField.propTypes = {
  /** Rendered Select Options */
  children: t.any,
  /** @ignore Part of input HTML props. */
  className: t.string,
  name: t.string.isRequired,
  /** Used to pass js Orbit library responsible for functionality. Note: This should passed on component setup so you don't have to pass it every time. */
  libs: t.array,
  /** @ignore Private props from HOC for easy setup. */
  _formGroupProps: t.object,
};

export default withField(SelectField);
