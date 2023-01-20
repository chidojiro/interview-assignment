import React from "react";

interface FieldErrorProps {
  children: string;
}

function FieldError({ children }: FieldErrorProps) {
  return <div className="form-group__feedback">{children}</div>;
}

export default FieldError;
