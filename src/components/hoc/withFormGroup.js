import React from "react";
import t from "prop-types";

import BasicFormGroup from "../form-group/Basic";
import SelectionControlFormGroup from "../form-group/SelectionControl";

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
    const isSelectionControl = ChildComponent?.type === "checkbox";

    const wrapClass = ["form-group"];
    if (formGroupClass) wrapClass.push(formGroupClass);
    if (error) wrapClass.push("form-group--error");

    const nameSanitized = (name || "").split(" ").join("-");
    const fieldId = id || `field--${nameSanitized}`;

    const componentProps = {
      name,
      id: fieldId,
      ...props,
    };

    if (readOnly) componentProps["readOnly"] = "readonly";
    if (required) componentProps["required"] = "required";

    const formGroupProps = {
      wrapClass,
      label,
      id: fieldId,
      required,
      optionalLabel,
      ChildComponent,
      componentProps,
      error,
      description,
      children,
    };

    return isSelectionControl ? (
      <SelectionControlFormGroup {...formGroupProps} />
    ) : (
      <BasicFormGroup {...formGroupProps} />
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
