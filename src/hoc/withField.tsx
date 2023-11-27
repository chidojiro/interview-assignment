import React from 'react';

export interface WithFieldProps {
  name: string;
  id?: string;
  formGroupClass?: string;
  required?: boolean;
  optionalLabel?: string;
  error?: string;
  description?: string;
  afterContent?: React.ReactNode;
  capitalize?: boolean;
  currency?: string;
  formGroupLabel?: string;
  label?: string;
  value?: string | number | string[];
  withFormGroup?: boolean;
  autoComplete?: string;
  _formGroupProps?: object;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement | HTMLSelectElement>) => void;
  _withoutWrapper?: boolean;
}

const withField = <T extends WithFieldProps = WithFieldProps>(ChildComponent: React.FC<T>) => {
  function Component(props: WithFieldProps | T) {
    const {
      id,
      name,
      formGroupClass,
      required,
      optionalLabel,
      error,
      description,
      afterContent,
      capitalize,
      currency,
      formGroupLabel,
      label,
      withFormGroup,
      autoComplete,
      ...rest
    } = props;

    const nameSanitized = (name || '').split(' ').join('-');
    const fieldId = id || `field--${nameSanitized}`;
    const labelValue = label || '';

    const fieldProps = {
      name,
      required,
      currency,
      id: fieldId,
      label: labelValue,
      autoComplete,
      ...rest,
    };

    const formGroupProps = {
      formGroupClass,
      label: formGroupLabel,
      id: fieldId,
      capitalize,
      required,
      optionalLabel,
      error,
      description,
      afterContent,
      withFormGroup,
    };
    return <ChildComponent {...(fieldProps as T)} _formGroupProps={formGroupProps} />;
  }

  return Component;
};

export default withField;
