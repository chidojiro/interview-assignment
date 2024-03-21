import React, { useEffect, useRef } from 'react';
import useDrivePicker from 'react-google-drive-picker';
import { GoogleDriveUploadProps } from './types';
import handleGoogleDriveUpload from '../../../../utils/upload/googleDrive/handleGoogleDriveUpload';

function GoogleDriveUpload<T extends GoogleDriveUploadProps>({
  developerKey, clientId, inputRef, setFieldErrors,
  showUploadView = false,
  viewId = 'DOCS',
  multiselect,
  scopes,
  supportDrives,
  mimeTypes,
}: T) {
  const [openPicker, authResponse] = useDrivePicker();

  let mimes : string;
  const authToken = useRef('');
  if (mimeTypes && mimeTypes.length > 0) {
    mimes = mimeTypes.join(',');
  }

  useEffect(() => {
    authToken.current = authResponse?.access_token as string;
  }, [authResponse]);

  const handleOpenPicker = () => {
    openPicker({
      clientId,
      developerKey,
      viewId,
      showUploadView,
      supportDrives,
      multiselect,
      customScopes: scopes,
      viewMimeTypes: mimes,
      async callbackFunction(data) {
        try {
          await handleGoogleDriveUpload(data, authToken, inputRef);
        } catch (e) {
          // We need to log the error here...
          // eslint-disable-next-line no-console
          console.error('Google drive Error: ', e);
          if (setFieldErrors) {
            setFieldErrors('Google drive error');
          }
        }
      },
    });
  };

  return (

    <button
      type="button"
      className="upload google_picker button--clean"
      data-attr-dropzone-id="edit-choose-file"
      onClick={() => {
        handleOpenPicker();
      }}
    >
      <span className="upload__add">google drive</span>
    </button>

  );
}

export default GoogleDriveUpload;
