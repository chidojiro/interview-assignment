import { PickerCallback } from 'react-google-drive-picker/dist/typeDefs';
import React from 'react';
import handleUploadedFiles from '../handleUploadedFiles';

async function handleGoogleDriveUpload(data: PickerCallback, authToken: React.MutableRefObject<string>, inputRef: React.RefObject<HTMLInputElement>) {
  switch (data.action) {
    case 'close':
      // We need to update the auth token in case of close...
      // eslint-disable-next-line no-param-reassign
      authToken.current = '';
      break;
    case 'picked':
      if (authToken) {
        await handleUploadedFiles(data.docs, inputRef, authToken);
      }
      break;
    default:
  }
}

export default handleGoogleDriveUpload;
