import React from 'react';
import { SimulatedEvent } from './types';

/**
 * In order for us to reuse the logic for the upload field, and make it so that the upload field handles the gds upload
 * on it own - we need to use a 'hack' in order for us to simulate a drag-and-drop behaviour.
 *
 * Basically the problem is that there is no way to directly say to the file upload filed, programmatically, to use a specific file.
 * So we will first get the file/s from GoogleDrive/Dropbox and then pass it to the DataTransfer object.
 * The DataTransfer object is then used to 'prepare' the files for the file input. Then we will take the passed files and reassign them to the file upload field.
 * After this, we will trigger an 'onchange' event for input field, to trigger the gds upload logic...
 *
 * @param filesToUpload
 *   The files to attach to the dataTransfer.
 * @param inputRef
 *   The ref to the upload field.
 */
function triggerDataTransfer(filesToUpload: Array<File>, inputRef: React.RefObject<HTMLInputElement>) {
  const dataTransfer = new DataTransfer();
  filesToUpload.forEach((file) => {
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

export default triggerDataTransfer;
