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
  formGroupLabel?: string;
  label?: string;
  value?: string | number;
  withFormGroup?: boolean;
  _formGroupProps?: object;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | string) => void;
  _withoutWrapper?: boolean;
  // Autosuggest specific props.
  items?: string[];
  onSelectItem?: (item: string) => void;
  noResultsText?: string;
  initialValue?: string;
  config?: object;
  placeholder?: string,
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
      formGroupLabel,
      label,
      withFormGroup,
      ...rest
    } = props;

    const nameSanitized = (name || '').split(' ').join('-');
    const fieldId = id || `field--${nameSanitized}`;
    const labelValue = label || '';

    const fieldProps = {
      name,
      required,
      id: fieldId,
      label: labelValue,
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
