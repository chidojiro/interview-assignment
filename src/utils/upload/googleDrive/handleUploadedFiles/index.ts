import { CallbackDoc } from 'react-google-drive-picker/dist/typeDefs';
import React from 'react';
import axios from 'axios';
import triggerDataTransfer from '../../triggerDataTransfer';

async function handleUploadedFiles(
  docs: CallbackDoc[],
  inputRef: React.RefObject<HTMLInputElement>,
  authToken: React.MutableRefObject<string>,
) {
  const filesForUpload: Array<File> = [];
  await Promise.all(docs.map(async (doc) => {
    const response = await axios.get(`https://www.googleapis.com/drive/v2/files/${doc.id}?alt=media`, {
      headers: {
        Authorization: `Bearer ${authToken.current}`,
      },
    });

    filesForUpload.push(new File([response.data], doc.name, { type: doc.mimeType }));
  }));

  triggerDataTransfer(filesForUpload, inputRef);
}

export default handleUploadedFiles;
