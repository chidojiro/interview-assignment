import React from 'react';
import { render, waitFor } from '@testing-library/react';
import UploadField from '../../../components/forms/UploadField';

describe('UploadField component tests', () => {
  test('UploadField renders correctly with its props', async () => {
    const { container } = render(
      <UploadField
        name="resume"
        files={undefined}
        multiselect={false}
        maxSizeInBytes={8 * 1024 * 1024}
        supportedMimeTypes="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/rtf, text/plain, image/jpeg, image/jpg"
        fileToken={(fileToken) => fileToken}
        translations={{
          UploadSuccessful: 'upload successful',
          SuccessfulSubText: 'remove files to reactive upload',
          AddFiles: 'add files',
          OrDropHere: 'or drop files here',
          AlternativeText: '{allowedFiles} / max {maxFileSize} mb',
          DropFileHere: 'drop files here',
          UserCvMaxSize: 'we only allow files up to {n} mb, please try again',
          FilenamePattern: 'FilenamePattern',
          UploadFieldError: 'UploadFieldError',
          UploadFieldSizes: [
            'UploadField.Bytes',
            'UploadField.KB',
            'UploadField.MB',
            'UploadField.GB',
            'UploadField.TG',
            'UploadField.PG',
            'UploadField.EG',
            'UploadField.ZG',
            'UploadField.YG',
          ],
        }}
      />,
    );

    const preloader = container.querySelector('button.button--preloader');

    expect(preloader).toBeInTheDocument();

    await waitFor(() => {
      const uploadField = container.querySelector('.upload');
      const uploadAddFiles = container.querySelector('.upload__add');
      const orDropFilesHere = container.querySelector('.hidden--until-l');
      const uploadContent = container.querySelector('.upload__content');

      expect(uploadField).toBeInTheDocument();
      expect(uploadAddFiles).toBeInTheDocument();
      expect(uploadAddFiles).toHaveTextContent('add files');
      expect(orDropFilesHere).toBeInTheDocument();
      expect(orDropFilesHere).toHaveTextContent('or drop files here');
      expect(uploadContent).toBeInTheDocument();
      expect(uploadContent).toHaveTextContent('{allowedFiles} / max {maxFileSize} mb');
    });
  });
});
