import React from "react";
import withFieldGroup from "./FieldGroup";

const Upload = ({type, placeholder, icon, closeIcon, required, file, onClear, accept, uploadText, uploadTextAternative, isImageUpload, ...props}) => {
  const fileExtentions = accept ? accept : ".pdf, .doc, .docx, .rtf, .txt, .csv, .jpg";

  const fieldProps = {
    ...props,
    type: 'file',
    accept: fileExtentions
  };

  const hideUploads = file && isImageUpload

  return (
    <React.Fragment>
      {!hideUploads && <div className="upload" data-rs-upload="">
        <input {...fieldProps} />
        <div className="upload__content">
          <div className="upload__text">
            {icon && (
              <span className="icon icon--inline fill--dark-blue-50">
                {icon}
              </span>
            )}
            <span className="upload__add">{uploadText ? uploadText : 'add files'}</span>
            <span className="text--alternative hidden--until-l "> {uploadTextAternative ? uploadTextAternative : 'or drop files here'}</span>
          </div>
          <p className="text--alternative">{fileExtentions} / max. 8 mb</p>
        </div>
      </div>}
      {file && (
        <ul className="upload-list">
          <li className="closable upload-list__item " data-rs-file-upload-1="">
						<span className="upload-list__link"><a>{file.name}</a></span>
              {file.size && <span class="upload-list__info text--alternative">{(file.size / 1024).toFixed()} kb</span>}
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
