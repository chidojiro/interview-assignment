/// <reference path="./withField.d.ts" />
import React, { FunctionComponent } from "react";

// The any type will be revised. Added it as such until we integrate the rest of the components and can determine all the use cases.
const withField = <P extends object>(ChildComponent: typeof React.Component | object | any) => {
  const Component: FunctionComponent<WithFieldProps & P> = ({ id, name, ...props }) => {
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

    return <ChildComponent {...fieldProps} _formGroupProps={formGroupProps} />;
  };

  return Component;
};

export default withField;
