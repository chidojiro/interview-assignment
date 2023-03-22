import React, { useState } from 'react';
import * as yup from 'yup';
import Icon from '../Icon';
import withField, { WithFieldProps } from '../../hoc/withField';
import FormGroup from '../form-group/FormGroup';
import { uploadTemporaryResume } from '../../hooks/resumeHandler';

export interface UploadedFile {
  name: string,
  id?: string,
  error?: string,
  file?: File
}

export type TranslationProps = {
  UploadSuccessful: string | React.ReactNode,
  SuccessfulSubText: string | React.ReactNode,
  AddFiles: string | React.ReactNode,
  OrDropHere: string | React.ReactNode,
  AlternativeText: string,
  DropFileHere: string | React.ReactNode,
  UserCvMaxSize: string,
  FilenamePattern: string,
};

interface FileFieldProps extends WithFieldProps {
  files: UploadedFile[];
  multiselect?: boolean;
  maxSizeInBytes?: number;
  supportedMimeTypes?: string;
  useGoogleDrive?: boolean,
  useDropbox?: boolean,
  touched?: boolean;
  preloadAlreadyExistingFile?: boolean,
  /** @ignore Private props from HOC for easy setup. */
  _formGroupProps?: object;
  fileToken: (token: string) => void;
  translations: TranslationProps;
}

function UploadField({
  multiselect,
  name,
  supportedMimeTypes,
  _formGroupProps,
  fileToken,
  translations,
}: FileFieldProps) { 
  console.log('input');
  
  const [updatedFiles, setUpdatedFiles] = useState<UploadedFile | null>(null);
  // State used to control if the field is set to readonly or not.
  const [fileUploaded, setFileUploaded] = useState<boolean>(false);
  let uploadedItems: JSX.Element[] = [];
  const mimeTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/rtf',
    'text/plain',
    'image/jpeg',
    'image/jpg',
  ];

  const filesValidation = {
    size: yup.number()
      .max(8 * 1024 * 1024, translations.UserCvMaxSize),
    mimeType: yup.string()
      .oneOf(mimeTypes, translations.FilenamePattern),
  };

  const onInputChange = async (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): Promise<void> => {
    const processFile = async (file: File) => {
      const uploadedFile: UploadedFile = { name: file.name, file, error: '' };
      await filesValidation.size.validate(file.size).catch((e) => {
        uploadedFile.error += e.message;
      });
      await filesValidation.mimeType.validate(file.type).catch((e) => {
        uploadedFile.error += e.message;
      });

      return uploadedFile;
    };
    

    let uploadedFile: UploadedFile[] = [];
    const { target } = event;
    if ((target as HTMLInputElement).files) {
      const filesPromises = [];
      for (const file of Array.from((target as HTMLInputElement).files as ArrayLike<File>)) {
        filesPromises.push(processFile(file));
      }
      uploadedFile = await Promise.all(filesPromises);
    }
    setUpdatedFiles(uploadedFile[0]);

    const resume = uploadedFile[0] ?? undefined;

    if (!resume?.error && resume?.file) {
      setFileUploaded(true);
      const uploadedFileToken = await uploadTemporaryResume(resume.file);
      fileToken(uploadedFileToken.token);
    }
  };

  const onInputClick = ( event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const element = event.target as HTMLInputElement
    element.value = ''
}

  const removeFile = () => {
    uploadedItems = [];
    setUpdatedFiles(null);
    setFileUploaded(false);
    fileToken('');
  };

  const checkIfUserHasFile = () => {
    
  };

  [updatedFiles].forEach((file, index) => {
    if (file === null) {
      return;
    }
    function renderSize() {
      return process.env.REACT_APP_HIDE_SIZE_MB && process.env.REACT_APP_HIDE_SIZE_MB === 'true'
        ? ''
        : <span className="upload-list__info text--alternative" data-rs-closable-fadeout="">{file?.file?.size || 0}</span>;
    }

    if (Object.hasOwn(file, 'error') && file.error) {
      // Render errors.
      uploadedItems.push(
        <li
          className="closable upload-list__item upload-list__item--error"
          {...{ [`data-rs-file-upload-${index}`]: '' }}
          key={file.name}
        >
          <span className="upload-list__link" data-rs-closable-fadeout="">
            {Object.hasOwn(file, 'error') && file.error ? file.error : null}
          </span>
        </li>,
      );
    } else {
      uploadedItems.push(
        <li
          className={`closable upload-list__item upload-list__item--success}`}
          {...{ [`data-rs-file-upload-${index}`]: '' }}
          key={file.name}
        >
          <span className="upload-list__link" data-rs-closable-fadeout="">{file.name}</span>
          {renderSize()}
          <Icon iconType="check" iconClassName="icon upload-list__success" />
          <button
            className="button--icon-only upload-list__remove"
            data-rs-closable={`data-rs-file-upload-${index}`}
            onClick={() => removeFile()}
            aria-label="Close"
            type="button"
          >
            <Icon iconType="close-16" iconClassName="icon icon--inline icon--s" />
          </button>
        </li>,
      );
    }
  });

  const formGroupClasses = fileUploaded ? 'form-group--upload form-group--read-only' : 'form-group--upload';

  return (
    <div>
      <FormGroup
        {..._formGroupProps}
        _configClasses={formGroupClasses}
      >
        <input
          name={name}
          accept={supportedMimeTypes}
          disabled={fileUploaded}
          multiple={multiselect}
          type="file"
          onChange={onInputChange}
          onClick={onInputClick}
        />
        <div className="upload" data-rs-upload="">
          <div className="upload__content">
            {fileUploaded
            && (
              <>
                <div className="upload__text">
                  <span className="text--alternative">
                    {translations.UploadSuccessful}
                  </span>
                </div>
                <p className="text--alternative">
                  {translations.SuccessfulSubText}
                </p>
              </>
            )}
            {!fileUploaded
            && (
              <>
                <div className="upload__text">
                  <span className="icon icon--inline">
                    <Icon iconType="attachment" />
                  </span>
                  <span className="upload__add">
                    {translations.AddFiles}
                  </span>
                  <span className="hidden--until-l">
                    {' '}
                    {translations.OrDropHere}
                  </span>
                </div>
                <p>
                  {translations.AlternativeText}
                </p>
              </>
            )}
          </div>
          <div className="upload__content upload__content--drop">
            <span>
              {' '}
              {translations.DropFileHere}
            </span>
          </div>
        </div>
      </FormGroup>
      <div>
        { uploadedItems }
      </div>
    </div>
  );
}

UploadField.defaultProps = {
  maxSizeInBytes: 8 * 1024 * 1024,
  disabled: false,
  multiselect: false,
};

export default withField(UploadField);
