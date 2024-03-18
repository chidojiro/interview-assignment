import {RefObject} from "react";

export type ViewIdOptions = 'DOCS' | 'DOCS_IMAGES' | 'DOCS_IMAGES_AND_VIDEOS' | 'DOCS_VIDEOS' | 'DOCUMENTS' | 'DRAWINGS' | 'FOLDERS' | 'FORMS' | 'PDFS' | 'SPREADSHEETS' | 'PRESENTATIONS';

export interface GoogleDriveProps {
  clientId: string,
  developerKey: string,
  scopes: Array<string>,

  viewId?: ViewIdOptions,
  showUploadView?: boolean,
  supportDrives?: boolean,
}

export interface GoogleDriveUploadProps extends GoogleDriveProps {
  mimeTypes: Array<string>,
  inputRef: RefObject<HTMLInputElement>,
  setFieldErrors?: (errMessage: string) => void,
  multiselect?: boolean,

}

export type SimulatedEvent = {
  simulated: boolean,
}

