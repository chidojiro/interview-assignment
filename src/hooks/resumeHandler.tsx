// d.
/* eslint-disable no-console */
import { AxiosResponse } from 'axios';
import talentAppApi from '../utils/talent-app-api';

type TempDocument = {
  createdDate: string,
  expirationDate: string,
  token: string,
};

type FieldError = {
  code: string,
  message: string,
  target: string,
};

export type Data = {
  // Data describes a generic abstract structure of request, which can be anything.
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [id: string]: any,
};

const uploadTemporaryResume = async (file: File): Promise<TempDocument> => {
  const formData = new FormData();
  formData.append('resumeDocument', file, file.name);

  const formatErrors = (errors: FieldError[]) => {
    const formattedErrors: { [string: string]: string } = {};
    errors.forEach((error: FieldError) => {
      formattedErrors.resumeDocument = error.message;
    });

    return formattedErrors;
  };

  return talentAppApi.post('/temp-resume-documents', formData)
    .then((response: AxiosResponse) => {
      const tempFileResponse = response.data;
      if (tempFileResponse?.error?.details) {
        tempFileResponse.errors = formatErrors(tempFileResponse.error.details);
      }

      return tempFileResponse;
    });
};

const getResumeUrl = async (): Promise<string | undefined> => {
  const response = await talentAppApi.get<Data, AxiosResponse<string>>('/me/resume/document', { responseType: 'arraybuffer' })
    .catch(() => undefined);
  if (response) {
    const bufferToBase64 = Buffer.from(response.data).toString('base64');
    const mimeType = response.headers['content-type'];

    if (bufferToBase64 && mimeType) {
      return `data:${mimeType};base64,${bufferToBase64}`;
    }
  }

  return undefined;
};

const getResumeFile = async (filename: string): Promise<File | undefined> => {
  if (!filename) {
    return undefined;
  }

  const fileUrl = await getResumeUrl();
  if (fileUrl) {
    const blob = await (await fetch(fileUrl)).blob();
    const mimeType = fileUrl.split(';')[0].split(':')[1] ?? '';

    return new File([blob], filename, { type: mimeType });
  }

  return undefined;
};

const deleteTempFile = async (
  tempResumeDocumentToken: string,
) => talentAppApi.delete(`/temp-resume-documents/${tempResumeDocumentToken}`)
  .then((response) => response.status === 200)
  .catch(() => false);

export { uploadTemporaryResume, deleteTempFile, getResumeFile };
