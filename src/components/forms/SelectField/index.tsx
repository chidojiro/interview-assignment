import React from 'react';

import withField from '../../../hoc/withField';
import useLibrary from '../../../hooks/useLibrary';
import FormGroup from '../FormGroup';
import Icon from '../../Icon';
import { SelectFieldProps } from './SelectField.types';

/**
 * An input field with a list of options that can be selected from predefined data. See [here](https://randstad.design/components/core/forms/drop-down/).
 *
 * ---
 * *Every other passed prop will be added to `<select>`. Like "data-attribute" or "aria-label"*
 *
 * **Wrapped with `FormGroup` component and support all of its props.**
 */
function SelectField({
  children, className, libs, _formGroupProps, ...props
}: SelectFieldProps) {
  const [ref] = useLibrary(libs);

  return (
    <FormGroup {..._formGroupProps}>
      <select
        className={className}
        data-rs-untouched=""
        data-scl=""
        ref={ref as React.RefObject<HTMLSelectElement>}
        {...props}
      >
        {children}
      </select>
      <Icon iconType="chevron-down" iconClassName="select-arrow icon" />
    </FormGroup>
  );
}

export default withField(SelectField);
