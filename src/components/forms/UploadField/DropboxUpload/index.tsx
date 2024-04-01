import React from 'react';
import DropboxChooser from 'react-dropbox-chooser';
import { DropboxFile, DropboxUploadProps } from './types';

function DropboxUpload<T extends DropboxUploadProps>({
  appKey,
  multiselect,
  fileFormats,
  sizeLimit,
} : T) {
  return (
    <DropboxChooser
      appKey={appKey}
      sizeLimit={sizeLimit}
      success={(files: Array<DropboxFile>) => {

      }}
      multiselect={multiselect}
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
