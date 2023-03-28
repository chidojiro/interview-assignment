import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import FormatFileSize from '../../hooks/formatFileSize';
import Icon from '../Icon';
import withField, { WithFieldProps } from '../../hoc/withField';
import FormGroup from '../form-group/FormGroup';
import {
  UploadedFile, AlreadyUploadedFile, uploadTemporaryResume, checkIfUserHasFile, getUploadedFiles,
} from '../../hooks/resumeHandler';

export type TranslationProps = {
  UploadSuccessful: string | React.ReactNode,
  SuccessfulSubText: string | React.ReactNode,
  AddFiles: string | React.ReactNode,
  OrDropHere: string | React.ReactNode,
  AlternativeText: string,
  DropFileHere: string | React.ReactNode,
  UserCvMaxSize: string,
  FilenamePattern: string,
  UploadFieldSizes: string[],
};

interface FileFieldProps extends WithFieldProps {
  gdsApiKey: string;
  gdsApiUrl: string;
  // Files are optional - for a field that should not check if there are any preloaded files - we should not set the files prop
  //  But if we want preloading - we should set the files prop with the appropriate user file.
  files?: AlreadyUploadedFile;
  formDataName: string;
  multiselect?: boolean;
  maxSizeInBytes: number;
  supportedMimeTypes?: string;
  useGoogleDrive?: boolean,
  useDropbox?: boolean,
  touched?: boolean;
  /** @ignore Private props from HOC for easy setup. */
  _formGroupProps?: object;
  fileToken: (token: string) => void;
  translations: TranslationProps;
}

function UploadField({
  multiselect,
  name,
  files,
  formDataName,
  supportedMimeTypes,
  _formGroupProps,
  maxSizeInBytes,
  fileToken,
  translations,
  gdsApiKey,
  gdsApiUrl,
  _withoutWrapper,
}: FileFieldProps) {
  const [updatedFiles, setUpdatedFiles] = useState<UploadedFile | null>(null);
  // State used to control if the field is set to readonly or not.
  const [isFileUploaded, setIsFileUploaded] = useState<boolean>(false);
  const [isFilePreloaded, setIsFilePreloaded] = useState<boolean>(false);

  const maxSizeForCv = 1048576 * maxSizeInBytes;

  useEffect(() => {
    const checkForFile = async () => {
      if (files && Object.keys(files).length !== 0) {
        const alreadyUploadedFile = await checkIfUserHasFile(files, gdsApiKey, gdsApiUrl);
        if (alreadyUploadedFile) {
          setUpdatedFiles(alreadyUploadedFile);
          setIsFileUploaded(true);
          setIsFilePreloaded(true);
        }
      }
    };
    checkForFile();
  }, [files, gdsApiKey, gdsApiUrl]);

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
      .max(maxSizeForCv as number, translations.UserCvMaxSize),
    mimeType: yup.string()
      .oneOf(mimeTypes, translations.FilenamePattern),
  };

  const onInputChange = async (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): Promise<void> => {
    const uploadedFile = await getUploadedFiles(event, filesValidation);
    if (uploadedFile) {
      setUpdatedFiles(uploadedFile[0]);

      const resume = uploadedFile[0] ?? undefined;
      if (!resume?.error && resume?.file) {
        setIsFileUploaded(true);
        const uploadedFileToken = await uploadTemporaryResume(gdsApiKey, gdsApiUrl, formDataName, resume.file);
        fileToken(uploadedFileToken.token);
      }
    }
  };

  // Needed function for uploading the same file to be validated again.
  const onInputClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const element = event.target as HTMLInputElement;
    element.value = '';
  };

  const removeFile = () => {
    uploadedItems = [];
    setUpdatedFiles(null);
    setIsFileUploaded(false);
    setIsFilePreloaded(false);
    fileToken('');
  };

  [updatedFiles].forEach((file, index) => {
    if (file === null) {
      return;
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
          className="closable upload-list__item upload-list__item--success"
          {...{ [`data-rs-file-upload-${index}`]: '' }}
          key={file.name}
        >
          <span className="upload-list__link" data-rs-closable-fadeout="">{file.name}</span>
          { file && file.file && file.file.size && <span className="upload-list__info text--alternative" data-rs-closable-fadeout="">{FormatFileSize(file?.file?.size as number, translations.UploadFieldSizes) || 0}</span> }
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

  const formGroupClasses = isFileUploaded ? 'form-group--upload form-group--read-only' : 'form-group--upload';
  return (
    <div>
      <FormGroup
        {..._formGroupProps}
        _withoutWrapper={_withoutWrapper}
        _configClasses={formGroupClasses}
      >
        <div>
          {!isFilePreloaded && (
            <div className="form-group__input">
              <input
                name={name}
                accept={supportedMimeTypes}
                disabled={isFileUploaded}
                multiple={multiselect}
                type="file"
                onChange={onInputChange}
                onClick={onInputClick}
              />
              <div className="upload" data-rs-upload="">
                <div className="upload__content">
                  {isFileUploaded
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
                  {!isFileUploaded
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
            </div>
          )}
          {uploadedItems && <ul className="upload-list">{uploadedItems}</ul>}
        </div>
      </FormGroup>
    </div>
  );
}

UploadField.defaultProps = {
  multiselect: false,
};

export default withField(UploadField);
