import React from "react";
import withFieldGroup from "./FieldGroup";

const Upload = ({type, placeholder, ...props}) => {
  const fieldProps = {
    ...props,
    type: 'file'
  };
  return (
    <div class="upload" data-rs-upload="">
      <input {...fieldProps} />
      <div class="upload__content">
        <div class="upload__text">
          <span class="icon icon--inline fill--dark-blue-50">
            <svg>
              <use xlinkHref="human-forward/assets/image/icons.svg#attachment" />
            </svg>
          </span>
          <span class="upload__add">add files</span>
          <span class="text--alternative hidden--until-l ">or drop files here</span>
        </div>
        <p class="text--alternative">.pdf, .docx, .jpg / max. 10 mb</p>
      </div>
      <div class="upload__content upload__content--drop">
        <span>drop files here</span>
      </div>
    </div>
  );
}

Upload.displayName = 'Upload'

export default withFieldGroup(Upload);