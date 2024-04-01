import {RefObject} from "react";

export interface DropboxProps {
  enableDropbox: boolean,
  fileFormats: string,
  appKey: string,
}

export interface DropboxUploadProps extends DropboxProps {
  sizeLimit: number,
  inputRef: RefObject<HTMLInputElement>,
  setFieldErrors?: (errMessage: string) => void,
  multiselect?: boolean,
}

export type DropboxFile = {
  bytes: number,
  icon: string,
  id: string,
  isDir: boolean,
  link: string,
  linkType: string,
  name: string,
}
