import React from "react";
import t from "prop-types";

import FormGroup from "@components/form-group/FormGroup";

const withField = (ChildComponent) => {
  const Component = ({ id, name, withFormGroup = true, ...props }) => {
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
      ...rest
    } = props;
    /* eslint-enable react/prop-types */

    const nameSanitized = (name || "").split(" ").join("-");
    const fieldId = id || `field--${nameSanitized}`;

    const isSelectionControl = ChildComponent.isSelectionControl;
    const isPassword = ChildComponent.isPassword;
    const withoutFormGroupMarkup = ChildComponent.withoutFormGroupMarkup;

    const fieldProps = {
      name,
      required,
      id: fieldId,
      ...rest,
    };

    const formGroupProps = {
      formGroupClass,
      formGroupLabel,
      id: fieldId,
      capitalize,
      required,
      optionalLabel,
      error,
      description,
      afterContent,
      isSelectionControl,
      isPassword,
      withoutFormGroupMarkup,
    };

    if (withFormGroup) {
      return (
        <FormGroup {...formGroupProps}>
          <ChildComponent {...fieldProps} />
        </FormGroup>
      );
    }

    return <ChildComponent {...fieldProps} />;
  };

  Component.propTypes = {
    name: t.string.isRequired,
    id: t.string,
    /** Wrap component with FormGroup functionality. See FormGroup for more information on props support */
    withFormGroup: t.bool,
  };

  return Component;
};

export default withField;
