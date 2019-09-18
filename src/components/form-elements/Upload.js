import React from "react";
import withFieldGroup from "./FieldGroup";

const Upload = ({type, placeholder, icon, closeIcon, required, file, ...props}) => {
  const fieldProps = {
    ...props,
    type: 'file'
  };
  return (
    <React.Fragment>
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
            <span className="text--alternative hidden--until-l "> or drop files here</span>
          </div>
          <p className="text--alternative">.pdf, .doc, .docx, .rtf, .txt, .csv, .jpg / max. 3 mb</p>
        </div>
        <div className="upload__content upload__content--drop">
          <span>drop files here</span>
        </div>
      </div>
      {file && (
        <ul className="upload-list">
          <li class="closable upload-list__item " data-rs-file-upload-1="">
						<a href="#" class="upload-list__link" data-rs-closable-fadeout="">{file.name}</a>
						<span class="upload-list__info text--alternative" data-rs-closable-fadeout="">{file.size}</span>
						<button class="button--icon-only upload-list__remove" data-rs-closable="data-rs-file-upload-1">
							<span class="icon icon--inline icon--s">
								{closeIcon}
							</span>
						</button>
					</li>
        </ul>
      )}
    </React.Fragment>
  );
}

Upload.displayName = 'Upload'

export default withFieldGroup(Upload);