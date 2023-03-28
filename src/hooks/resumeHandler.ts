import { AxiosResponse } from 'axios';
import * as yup from 'yup';
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

export interface AlreadyUploadedFile {
  filename: string;
  url: string;
}

export interface UploadedFile {
  name: string;
  id?: string;
  error?: string;
  generalError?: string;
  file?: File;
}

export interface FilesValidation {
  size: yup.NumberSchema<number | undefined, yup.AnyObject, undefined, ''>;
  mimeType: yup.StringSchema<string | undefined, yup.AnyObject, undefined, ''>;
}

export type Data = {
  // Data describes a generic abstract structure of request, which can be anything.
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [id: string]: any;
};

const validateFile = async (filesValidation: FilesValidation, file: File) => {
  const uploadedFile: UploadedFile = { name: file.name, file, error: '' };
  await filesValidation.size.validate(file.size).catch((e) => {
    uploadedFile.generalError += e.message;
  });
  await filesValidation.mimeType.validate(file.type).catch((e) => {
    uploadedFile.error += e.message;
  });

  return uploadedFile;
};

const getUploadedFiles = async (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, filesValidation: FilesValidation) => {
  let uploadedFile: UploadedFile[] = [];
  const { target } = event;
  if ((target as HTMLInputElement).files) {
    const filesPromises = [];
    for (const file of Array.from((target as HTMLInputElement).files as ArrayLike<File>)) {
      filesPromises.push(validateFile(filesValidation, file));
    }
    uploadedFile = await Promise.all(filesPromises);
    return uploadedFile;
  }
  return null;
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

const getResumeFilename = async (gdsApiKey: string, gdsApiUrl: string): Promise<AlreadyUploadedFile | undefined> => {
  const talentApi = new TalentAppApi(gdsApiKey, gdsApiUrl);

  const response = await talentApi.get<Data, AxiosResponse<AlreadyUploadedFile>>('/me/resume').catch((err) => {
    // Needed logging for error.
    // eslint-disable-next-line no-console
    console.error('GetResumeFilename Error: ', err);
    return undefined;
  });
  if (response) {
    return response?.data;
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

// Function that checks if the current logged in user has an already uplaoded file.
const checkIfUserHasFile = async (files: AlreadyUploadedFile, gdsApiKey: string, gdsApiUrl: string) => {
  if (!files) {
    return null;
  }
  const returnedFile = await getResumeFilename(gdsApiKey, gdsApiUrl);
  if (returnedFile) {
    const file: UploadedFile = {
      // TODO: Add support for size in the future when GDS starts returning it.
      name: returnedFile.filename as string,
    };
    return file;
  }
  return null;
};

export { uploadTemporaryResume, deleteTempFile, getResumeFile, getResumeFilename, checkIfUserHasFile, getUploadedFiles };
