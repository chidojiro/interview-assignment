import React from "react";
import PropTypes from "prop-types";
import widthSelectionGroup from "./SelectionGroup";
import RadioButton from "./RadioButton";

const RadioButtons = ({label, options, name, defaultValue, ...props}) => {
  return (
    <React.Fragment>
      {options && options.map((option, index) => {
        const optProps = {
          name,
          value: option.value,
          label: option.label,
          defaultChecked: defaultValue === option.value
        }
        return (
          <RadioButton key={index} {...props} {...optProps} />
        );
      })}
    </React.Fragment>
  );
}

RadioButtons.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string
}

export default widthSelectionGroup(RadioButtons);