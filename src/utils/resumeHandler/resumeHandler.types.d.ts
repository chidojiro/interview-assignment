import * as yup from 'yup';

export type TempDocument = {
  createdDate: string;
  expirationDate: string;
  token: string;
};

export type FieldError = {
  code: string;
  message: string;
  target: string;
};

export interface AlreadyUploadedFile {
  filename: string;
  url?: string;
  contentLength?: number;
}

export interface UploadedFile {
  name: string;
  id?: string;
  // Size is optional. The real size of an uploaded file is inside the file prop. The size prop contains the size of the prefilled user resume, which cannot become a file object.
  size?: number;
  error?: string;
  generalError?: string;
  file?: File;
}

export interface FilesValidation {
  size: yup.NumberSchema<number | undefined, yup.AnyObject, undefined, ''>;
  mimeType: yup.StringSchema<string | undefined, yup.AnyObject, undefined, ''>;
}

export interface UpdateResumeStateProps {
  filename: string;
  contentLength: number | undefined;
}

export type Data = {
  // Data describes a generic abstract structure of request, which can be anything.
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [id: string]: any;
};
