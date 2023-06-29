import React from 'react';
import { FieldErrorProps } from './FieldError.types';

function FieldError({ children }: FieldErrorProps) {
  return <div className="form-group__feedback">{children}</div>;
}

export default FieldError;
