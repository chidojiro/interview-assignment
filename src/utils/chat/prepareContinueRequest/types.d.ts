import { ContinueRequestType } from '../types';

export type ContinueRequest = {
  request_type: ContinueRequestType;
  idToken: string;
  reply_text?: string;
  data?: string | string[];
};
