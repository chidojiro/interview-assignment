import axios from 'axios';
import React from 'react';
import { DropboxFile } from '../../../../components/forms/UploadField/DropboxUpload/types';
import triggerDataTransfer from '../../triggerDataTransfer';

async function handleDropboxUpload(files: Array<DropboxFile>, inputRef: React.RefObject<HTMLInputElement>) {
  const filesToUpload: Array<File> = [];
  await Promise.all(files.map(async (file) => {
    const response = await axios.get(file.link, {
      responseType: 'arraybuffer',
      // We will always include the timestamp as a query param, as on Safari we have a bug where the request cached
      // and when we hit cache we are always getting 404.
      params: {
        t: new Date().getTime(),
      },
    });
    // We will get the mime-type from the response headers, as is not available from the dropbox file callback.
    filesToUpload.push(new File([response.data], file.name, { type: response.headers['content-type'].split(';')[0] }));
  }));

  triggerDataTransfer(filesToUpload, inputRef);
}

export default handleDropboxUpload;
