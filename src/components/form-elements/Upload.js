import React from "react";
import withFieldGroup from "./FieldGroup";

const Upload = ({type, placeholder, ...props}) => {
  const fieldProps = {
    ...props,
    type: 'file'
  };
  return <input {...fieldProps} />;
}

Upload.displayName = 'Upload'

export default withFieldGroup(Upload);