import React from 'react';
import DropboxChooser from 'react-dropbox-chooser';
import { DropboxFile, DropboxUploadProps } from './types';
import handleDropboxUpload from '../../../../utils/upload/dropbox/handleDropboxUpload';

function DropboxUpload<T extends DropboxUploadProps>({
  appKey,
  multiselect,
  fileFormats,
  sizeLimit,
  setFieldErrors,
  inputRef,
  disabled,
} : T) {
  return (
    <DropboxChooser
      appKey={appKey}
      disabled={disabled}
      sizeLimit={sizeLimit}
      success={async (files: Array<DropboxFile>) => {
        try {
          await handleDropboxUpload(files, inputRef);
        } catch (e) {
          // We want to log an error here, in case the dropbox upload fails.
          // eslint-disable-next-line no-console
          console.error('Dropbox file upload', files);
          if (setFieldErrors) {
            setFieldErrors('Dropbox error');
          }
        }
      }}
      multiselect={multiselect}
      linkType="direct"
      extensions={fileFormats.split(', ')}
    >
      <button
        type="button"
        className="upload dropbox_chooser button--clean"
      >
        <span className="upload__add">dropbox</span>
      </button>
    </DropboxChooser>
  );
}

export default DropboxUpload;
