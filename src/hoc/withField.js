import React from "react";
import t from "prop-types";

const withField = (ChildComponent) => {
  const Component = ({ id, name, ...props }) => {
    /* eslint-disable react/prop-types */
    const {
      formGroupClass,
      required,
      optionalLabel,
      error,
      description,
      afterContent,
      capitalize,
      formGroupLabel,
      label,
      withFormGroup,
      ...rest
    } = props;
    /* eslint-enable react/prop-types */

    const nameSanitized = (name || "").split(" ").join("-");
    const fieldId = id || `field--${nameSanitized}`;

    const fieldProps = {
      name,
      required,
      id: fieldId,
      label,
      ...rest,
    };

    const formGroupProps = {
      formGroupClass,
      label,
      formGroupLabel,
      id: fieldId,
      capitalize,
      required,
      optionalLabel,
      error,
      description,
      afterContent,
      withFormGroup,
    };

    return <ChildComponent {...fieldProps} _formGroupProps={formGroupProps} />;
  };

  Component.propTypes = {
    name: t.string.isRequired,
    id: t.string,
  };

  return Component;
};

export default withField;
