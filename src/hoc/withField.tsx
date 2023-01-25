/// <reference path="./withField.d.ts" />
import React from "react";

const withField = <T extends WithFieldProps = WithFieldProps>(ChildComponent: React.FC<T>) => {
  const Component = (props: WithFieldProps | T) => {
    const {
      id,
      name,
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

    const nameSanitized = (name || "").split(" ").join("-");
    const fieldId = id || `field--${nameSanitized}`;

    const fieldProps = {
      name,
      required,
      id: fieldId,
      label: label,
      ...rest,
    };

    const formGroupProps = {
      formGroupClass,
      label: formGroupLabel,
      id: fieldId,
      capitalize,
      required,
      optionalLabel,
      error,
      description,
      afterContent,
      withFormGroup,
    };
    return <ChildComponent {...(fieldProps as T)} _formGroupProps={formGroupProps} />;
  };

  return Component;
};

export default withField;
