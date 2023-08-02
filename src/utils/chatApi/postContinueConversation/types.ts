import type { ConversationReply } from '../types';

export type ContinueRequest = {
  request_type: ContinueRequestType;
  reply_text?: string;
  data?: string;
};

export enum ContinueRequestType {
  TEXT_REPLY = 'TEXT_REPLY',
  QUICK_SUGGEST = 'QUICK_SUGGEST',
}

export type ContinueResponse = {
  state: string;
  response_id: string;
  replies: Array<ConversationReply>;
  language: string;
  undo_available: boolean;
};
