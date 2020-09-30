import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import withFieldGroup from "./FieldGroup";

const TextArea = ({name, counter, maxLength, autoResize, placeholder, required, orbitLib, ...props}) => {
  const ref = useRef();

  useEffect(()=> {
    if (!ref.current || !orbitLib) return;

    new orbitLib.AutoResize(ref.current)
  }, [])

  const fieldProps = {
    name: name,
    placeholder: placeholder && placeholder.toLowerCase(),
    "data-rs-auto-resize": autoResize,
    ...props
  };

  if (counter && maxLength) {
    fieldProps['data-rs-character-counter-maxlength'] = maxLength;
    fieldProps['data-rs-character-counter'] = `${name}-counter`;
  }

  return (
    <React.Fragment>
      <textarea {...fieldProps} ref={ref}/>
      {counter && maxLength && (
        <span className="form-group__characters" data-rs-character-counter-output={`${name}-counter`}></span>
      )}
    </React.Fragment>
  );
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  counter: PropTypes.bool,
  autoResize: PropTypes.bool,
  placeholder: PropTypes.string
}

TextArea.displayName = 'TextArea'

export default withFieldGroup(TextArea);