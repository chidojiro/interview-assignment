import { AxiosResponse } from 'axios';
import { TalentAppApi } from './talentAppApi';

type TempDocument = {
  createdDate: string;
  expirationDate: string;
  token: string;
};

type FieldError = {
  code: string;
  message: string;
  target: string;
};

export type Data = {
  // Data describes a generic abstract structure of request, which can be anything.
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [id: string]: any;
};

const uploadTemporaryResume = async (gdsApiKey: string, gdsApiUrl: string, formDataName: string, file: File): Promise<TempDocument> => {
  const talentApi = new TalentAppApi(gdsApiKey, gdsApiUrl);
  const formData = new FormData();
  formData.append(formDataName, file, file.name);

  const formatErrors = (errors: FieldError[]) => {
    const formattedErrors: { [string: string]: string } = {};
    errors.forEach((error: FieldError) => {
      formattedErrors.formDataName = error.message;
    });

    return formattedErrors;
  };

  return talentApi.post('/temp-resume-documents', formData).then((response: AxiosResponse) => {
    const tempFileResponse = response.data;
    if (tempFileResponse?.error?.details) {
      tempFileResponse.errors = formatErrors(tempFileResponse.error.details);
    }

    return tempFileResponse;
  });
};

const getResumeUrl = async (gdsApiKey: string, gdsApiUrl: string): Promise<string | undefined> => {
  const talentApi = new TalentAppApi(gdsApiKey, gdsApiUrl);
  const response = await talentApi.get<Data, AxiosResponse<string>>('/me/resume/document', { responseType: 'arraybuffer' }).catch((err) => {
    // Needed logging for error.
    // eslint-disable-next-line no-console
    console.error('GetResumeUrl Error: ', err);
    return undefined;
  });
  if (response) {
    const bufferToBase64 = Buffer.from(response.data).toString('base64');
    const mimeType = response.headers['content-type'];

    if (bufferToBase64 && mimeType) {
      return `data:${mimeType};base64,${bufferToBase64}`;
    }
  }

  return undefined;
};

const getResumeFile = async (gdsApiKey: string, gdsApiUrl: string, filename: string): Promise<File | undefined> => {
  if (!filename) {
    return undefined;
  }

  const fileUrl = await getResumeUrl(gdsApiKey, gdsApiUrl);
  if (fileUrl) {
    const blob = await (await fetch(fileUrl)).blob();
    const mimeType = fileUrl.split(';')[0].split(':')[1] ?? '';

    return new File([blob], filename, { type: mimeType });
  }

  return undefined;
};

const deleteTempFile = async (tempResumeDocumentToken: string, gdsApiKey: string, gdsApiUrl: string) => {
  const talentApi = new TalentAppApi(gdsApiKey, gdsApiUrl);
  talentApi
    .delete(`/temp-resume-documents/${tempResumeDocumentToken}`)
    .then((response) => response.status === 200)
    .catch((err) => {
      // Needed error logging.
      // eslint-disable-next-line no-console
      console.error('Deleting temporary file error: ', err);
      return false;
    });
};

export { uploadTemporaryResume, deleteTempFile, getResumeFile };
