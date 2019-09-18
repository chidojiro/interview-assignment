import React from "react";
import withFieldGroup from "./FieldGroup";

const Upload = ({type, placeholder, icon, required, ...props}) => {
  const fieldProps = {
    ...props,
    type: 'file'
  };
  return (
    <div className="upload" data-rs-upload="">
      <input {...fieldProps} />
      <div className="upload__content">
        <div className="upload__text">
          {icon && (
            <span className="icon icon--inline fill--dark-blue-50">
              {icon}
            </span>
          )}
          <span className="upload__add">add files</span>
          <span className="text--alternative hidden--until-l ">or drop files here</span>
        </div>
        <p className="text--alternative">.pdf, .docx, .jpg / max. 10 mb</p>
      </div>
      <div className="upload__content upload__content--drop">
        <span>drop files here</span>
      </div>
    </div>
  );
}

Upload.displayName = 'Upload'

export default withFieldGroup(Upload);