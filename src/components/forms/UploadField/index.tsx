import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import FormatFileSize from '../../../utils/formatFileSize';
import Icon from '../../common/Icon';
import withField, { WithFieldProps } from '../../../hoc/withField';
import FormGroup from '../FormGroup';
import {
  uploadTemporaryResume,
  checkIfUserHasFile,
  getUploadedFiles,
} from '../../../utils/resumeHandler';
import {
  UploadedFile,
  AlreadyUploadedFile,
  UpdateResumeStateProps,
} from '../../../utils/resumeHandler/resumeHandler.types';
import Preloader from '../../loaders/Preloader';

export type TranslationProps = {
  UploadSuccessful: string | React.ReactNode,
  SuccessfulSubText: string | React.ReactNode,
  AddFiles: string | React.ReactNode,
  OrDropHere: string | React.ReactNode,
  AlternativeText: string,
  DropFileHere: string | React.ReactNode,
  UserCvMaxSize: string,
  FilenamePattern: string,
  UploadFieldError: string,
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
  supportedMimeTypes: string;
  useGoogleDrive?: boolean,
  useDropbox?: boolean,
  touched?: boolean;
  /** @ignore Private props from HOC for easy setup. */
  _formGroupProps?: object;
  fileToken: (token: string) => void;
  translations: TranslationProps;
  setUploadedFilesToState?: (file: UpdateResumeStateProps) => void;
  setFieldErrors?: (errMessage: string) => void
}

function UploadField({
  multiselect,
  id,
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
  setUploadedFilesToState,
  setFieldErrors,
}: FileFieldProps) {
  const [updatedFiles, setUpdatedFiles] = useState<UploadedFile[]>([]);
  // State used to control if the field set to readonly or not.
  const [isFileUploaded, setIsFileUploaded] = useState<boolean>();
  const [isFilePreloaded, setIsFilePreloaded] = useState<boolean>();

  const maxSizeForCv = 1048576 * maxSizeInBytes;

  useEffect(() => {
    const getAlreadyUploadedFile = () => {
      if (files && Object.keys(files).length !== 0) {
        return checkIfUserHasFile(files, gdsApiKey, gdsApiUrl);
      }

      return false;
    };

    const checkForFile = async () => {
      const alreadyUploadedFile = await getAlreadyUploadedFile();

      if (alreadyUploadedFile) {
        setUpdatedFiles([alreadyUploadedFile]);
        setIsFileUploaded(true);
        setIsFilePreloaded(true);
      } else {
        setIsFileUploaded(false);
        setIsFilePreloaded(false);
      }
    };
    checkForFile();
  }, [files, gdsApiKey, gdsApiUrl]);

  let uploadedItems: JSX.Element[] = [];
  const generalErrors: JSX.Element[] = [];
  const mimeTypes = supportedMimeTypes.split(', ');

  const filesValidation = {
    size: yup.number()
      .max(maxSizeForCv as number, translations.UserCvMaxSize),
    mimeType: yup.string()
      .oneOf(mimeTypes, translations.FilenamePattern),
  };

  const onInputChange = async (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): Promise<void> => {
    const uploadedFile = await getUploadedFiles(event, filesValidation);
    if (uploadedFile && getUploadedFiles.length > 0) {
      setUpdatedFiles([uploadedFile[0]]);

      const resume = uploadedFile[0];
      if (!resume?.error && resume?.file) {
        if (!resume?.generalError) setIsFileUploaded(true);
        try {
          const uploadedFileToken = await uploadTemporaryResume(gdsApiKey, gdsApiUrl, formDataName, resume.file);
          fileToken(uploadedFileToken.token);

          if (setUploadedFilesToState) {
            setUploadedFilesToState({ filename: resume.name, contentLength: resume.file?.size });
          }
        } catch (e: unknown) {
          resume.error = (e as Error).message;
          setUpdatedFiles([resume]);
          setIsFileUploaded(true);
          if (setFieldErrors) {
            setFieldErrors(resume?.error);
          }
        }
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
    setUpdatedFiles([]);
    setIsFileUploaded(false);
    setIsFilePreloaded(false);
    fileToken('');
    if (setFieldErrors) {
      setFieldErrors('');
    }
  };

  updatedFiles.forEach((file, index) => {
    if (!file) {
      return;
    }

    // Check first if we have a file object with size - if not, fallback to the size prop.
    const size = (file?.file?.size || file?.file?.size === 0) ? file?.file?.size as number : file?.size;
    const successfulUpload = !(Object.hasOwn(file, 'error') && file.error);
    uploadedItems.push(
      <li
        className={`closable upload-list__item divider ${successfulUpload ? 'upload-list__item--success' : 'upload-list__item--error'}`}
        {...{ [`data-rs-file-upload-${index}`]: '' }}
        key={file.name}
      >
        <span className="upload-list__link" data-rs-closable-fadeout="">
          {file.name}
        </span>
        <span className="upload-list__info text--alternative" data-rs-closable-fadeout="">{successfulUpload ? FormatFileSize(size as number, translations.UploadFieldSizes) || 0 : translations.UploadFieldError}</span>
        {successfulUpload ? <Icon iconType="check" iconClassName="icon upload-list__success" /> : (
          <span className="tooltip tooltip--icon">
            {/* This element is interactive. */}
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
            <div className="tooltip__trigger" tabIndex={0}>
              <Icon iconType="info" iconClassName="icon" />
              <span className="tooltip__content ">
                <span className="tooltip__text">
                  {Object.hasOwn(file, 'error') && file.error ? file.error : null}
                </span>
                <span className="tooltip__pointer" />
              </span>
            </div>
          </span>
        )}
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
  });

  const formGroupClasses = `form-group--upload ${(isFileUploaded && !generalErrors.length) ? 'form-group--read-only' : ''} ${generalErrors.length ? 'form-group--error' : ''}`;
  return (
    <div>
      <FormGroup
        {..._formGroupProps}
        _withoutWrapper={_withoutWrapper}
        _configClasses={formGroupClasses}
      >
        <div>
          {isFilePreloaded === undefined && isFileUploaded === undefined && <Preloader />}
          {isFilePreloaded === false && (
            <div className="form-group__input">
              <input
                name={name}
                id={id}
                accept={supportedMimeTypes}
                disabled={isFileUploaded}
                multiple={multiselect}
                type="file"
                onChange={onInputChange}
                onClick={onInputClick}
              />
              <div className="upload" data-rs-upload="">
                <div className="upload__content">
                  {isFileUploaded === true
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
                  {isFileUploaded === false
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
          {generalErrors}
        </div>
      </FormGroup>
    </div>
  );
}

UploadField.defaultProps = {
  multiselect: false,
};

export default withField(UploadField);
