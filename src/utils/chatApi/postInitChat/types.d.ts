import { ConversationReply, ConversationSupportedLanguage } from '../types';

export type ChatInitRequest = {
  idToken: string;
  applicationId: string;
  language: string;
  timezoneName: string;
  dateFormat: string;
};

export type ChatInitResponse = {
  conversation_id: string;
  response_id: string;
  replies: Array<ConversationReply>;
  conversation_status: string;
  language: string;
  languages_supported: Array<ConversationSupportedLanguage>;
  transcript: [];
  undo_available: boolean;
};
