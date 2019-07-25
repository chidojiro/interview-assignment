import React from "react";
import PropTypes from "prop-types";
import withFieldGroup from "./FieldGroup";

const Dropdown = ({options, ...props}) => {
  const iconProps = {
    xlinkHref: "human-forward/assets/image/icons.svg#chevron-down"
  }
  return (
    <React.Fragment>
      <select className="untouched" data-rs-untouched="" {...props}>
        {options.map((opt,index) => <option key={index} value={opt.value}>{opt.label}</option>)}
      </select>
      <span className="select-arrow icon">
        <svg>
          <use {...iconProps} />
        </svg>
      </span>
    </React.Fragment>
  );
}

Dropdown.propTypes = {
  options: PropTypes.array,
}

Dropdown.displayName = 'Dropdown'

export default withFieldGroup(Dropdown);