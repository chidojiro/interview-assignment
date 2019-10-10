import React from "react";
import PropTypes from "prop-types";
import withFieldGroup from "./FieldGroup";

const Dropdown = ({options, icon, required, onChange, defaultValue, ...props}) => {
  const iconProps = {
    xlinkHref: "human-forward/assets/image/icons.svg#chevron-down"
  }

  const updateValue = event => {
    if (event.target.value === '_none' || event.target.value === null || event.target.value === '') {
      if (!event.target.classList.contains('untouched')) {
        event.target.classList.add('untouched');
      }
    } else if (event.target.classList.contains('untouched')) {
      event.target.classList.remove('untouched');
    }
    onChange(event);
  }

  return (
    <React.Fragment>
      <select className={(!defaultValue || defaultValue === '_none' || defaultValue === null || defaultValue === '') && 'untouched'} data-rs-untouched="" onChange={updateValue} defaultValue={defaultValue} {...props}>
        {options.map((opt,index) => <option key={index} value={opt.value}>{opt.label}</option>)}
      </select>
      {icon && (
        <span className="select-arrow icon">
          {icon}
        </span>
      )}
    </React.Fragment>
  );
}

Dropdown.propTypes = {
  options: PropTypes.array,
}

Dropdown.displayName = 'Dropdown'

export default withFieldGroup(Dropdown);