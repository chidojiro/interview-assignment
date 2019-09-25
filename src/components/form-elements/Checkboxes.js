import React from "react";
import PropTypes from "prop-types";
import widthSelectionGroup from "./SelectionGroup";
import CheckboxBase from "./CheckboxBase";

const Checkboxes = ({label, id, options, name, defaultValue, required, ...props}) => {
  return (
    <React.Fragment>
      {options && options.map((option, index) => {
        const optProps = {
          name: option.name || `${name}[${index}]`,
          id: option.name || `${id || name}-${index}`,
          value: option.value,
          label: option.label,
          defaultChecked: defaultValue === option.value,
          error: option.error
        }
        return (
          <CheckboxBase key={index} {...props} {...optProps} />
        );
      })}
    </React.Fragment>
  );
}

Checkboxes.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  defaultValue: PropTypes.string
}

export default widthSelectionGroup(Checkboxes);