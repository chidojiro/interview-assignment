import { CallbackDoc } from '@fyelci/react-google-drive-picker/dist/typeDefs';
import React from 'react';
import axios from 'axios';
import { SimulatedEvent } from '../../../../components/forms/UploadField/GoogleDriveUpload/types';

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

  /**
   * In order for us to reuse the logic for the upload field, and make it so that the upload field handles the gds upload
   * on it own - we need to use a 'hack' in order for us to simulate a drag-and-drop behaviour.
   *
   * Basically the problem is that there is no way to directly say to the file upload filed, programmatically, to use a specific file.
   * So we will first get the file/s from GoogleDrive and then pass it to the DataTransfer object.
   * The DataTransfer object is then used to 'prepare' the files for the file input. Then we will take the passed files and reassign them to the file upload field.
   * After this, we will trigger an 'onchange' event for input field, to trigger the gds upload logic...
   *
   */
  const dataTransfer = new DataTransfer();
  filesForUpload.forEach((file) => {
    dataTransfer.items.add(file);
  });

  if (inputRef.current) {
    // We need the reassign here, as we actually need to use the dataTransfer files.
    // eslint-disable-next-line no-param-reassign
    inputRef.current.files = dataTransfer.files;

    const event = new Event('change', { bubbles: true });
    (event as unknown as SimulatedEvent).simulated = true;
    inputRef.current.dispatchEvent(event);
  }
}

export default handleUploadedFiles;
