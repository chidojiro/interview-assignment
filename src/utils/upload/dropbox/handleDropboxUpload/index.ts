import axios from 'axios';
import React from 'react';
import { DropboxFile } from '../../../../components/forms/UploadField/DropboxUpload/types';
import triggerDataTransfer from '../../triggerDataTransfer';

async function handleDropboxUpload(files: Array<DropboxFile>, inputRef: React.RefObject<HTMLInputElement>) {
  const filesToUpload: Array<File> = [];
  await Promise.all(files.map(async (file) => {
    const response = await axios.get(file.link);
    // We will get the mime-type from the response headers, as is not available from the dropbox file callback.
    filesToUpload.push(new File([response.data], file.name, { type: response.headers['content-type'] }));
  }));

  triggerDataTransfer(filesToUpload, inputRef);
}

export default handleDropboxUpload;
