import React from "react";
import withFieldGroup from "./FieldGroup";

const Upload = ({type, placeholder, icon, closeIcon, required, file, onClear, ...props}) => {
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
          <p className="text--alternative">.pdf, .doc, .docx, .rtf, .txt, .csv, .jpg / max. 8 mb</p>
        </div>
        <div className="upload__content upload__content--drop">
          <span>drop files here</span>
        </div>
      </div>
      {file && (
        <ul className="upload-list">
          <li className="closable upload-list__item " data-rs-file-upload-1="">
						<span className="upload-list__link">{file.name}</span>
						<span className="upload-list__info text--alternative" data-rs-closable-fadeout="" />
						<button className="button--icon-only upload-list__remove" onClick={onClear}>
							<span className="icon icon--inline icon--s">
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