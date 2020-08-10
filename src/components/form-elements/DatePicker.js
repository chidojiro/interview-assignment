import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import withFieldGroup from "./FieldGroup";

const DatePicker = ({orbitLib, lang="", iconPath, onChange, name, defaultValue, required, ...props}) => {
  const ref = useRef();
  const fieldProps = {
    type: "text",
    "data-rs-flat-datepicker-input": "",
    "data-rs-flat-datepicker-default-date": "",
    "data-rs-flat-datepicker-alt-format": "Y-m-d",
    "data-rs-flat-datepicker-date-format": "Y-m-d",
    "data-rs-flat-datepicker-default-date": defaultValue,
    name,
    ...props,
  };

  useEffect(()=> {
    if (!ref.current && !orbitLib) return;

    new orbitLib.FlatDatePicker(ref.current)

    // Handle change event. Flat picker use different field to write the value
    window.addEventListener('onFlatDatePickerChange', () => {
      if (!ref.current) return;

      const target = ref.current.querySelector('input.input');
      // Target name should be same as data-rs-flat-datepicker-input input name to allow on change event.
      target.name = name;
      onChange({
        target: target
      })
    })
  }, [])

  return (
    <div ref={ref} data-rs-flat-datepicker="">
      <button className="button--clean" type="button"></button>
      <input
        placeholder="select date..."
        tabIndex="-1"
        className="flatpickr"
        data-rs-flat-datepicker-language={lang}
        {...fieldProps}
      />
      <span className="button--icon-only button--form-group-style">
        <span className="icon">
          <svg>
            <use xlinkHref={`${iconPath}#calendar`}></use>
          </svg>
        </span>
      </span>
    </div>
  );
}

DatePicker.propTypes = {
  orbitLib: PropTypes.object,
  iconPath: PropTypes.string,
}

DatePicker.displayName = 'Flat-DatePicker'

export default withFieldGroup(DatePicker);