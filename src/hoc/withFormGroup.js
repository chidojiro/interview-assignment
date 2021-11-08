import React from "react";
import t from "prop-types";

import BasicFormGroup from "@components/form-group/Basic";
import SelectionControlFormGroup from "@components/form-group/SelectionControl";

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
    capitalize,
    ...props
  }) => {
    const isSelectionControl = ChildComponent?.type === "checkbox";

    const wrapClass = ["form-group"];
    if (formGroupClass) wrapClass.push(formGroupClass);
    if (error) wrapClass.push("form-group--error");

    const nameSanitized = (name || "").split(" ").join("-");
    const fieldId = id || `field--${nameSanitized}`;

    let fieldLabel = label;

    if (label && capitalize) {
      fieldLabel = label.charAt(0).toUpperCase() + label.slice(1);
    }

    const componentProps = {
      name,
      id: fieldId,
      capitalize,
      ...props,
    };

    if (readOnly) componentProps["readOnly"] = "readonly";
    if (required) componentProps["required"] = "required";

    const formGroupProps = {
      wrapClass,
      label: fieldLabel,
      id: fieldId,
      required,
      capitalize,
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
    capitalize: t.bool,
    children: t.any,
    optionalLabel: t.string,
    formGroupClass: t.string,
  };

  return FieldGroup;
};

export default withFieldGroup;
