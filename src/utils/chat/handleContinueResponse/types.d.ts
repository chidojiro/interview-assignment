import { ConversationReply } from '../types';

export type ContinueResponse = {
  state: string;
  response_id: string;
  replies: Array<ConversationReply>;
  language: string;
  undo_available: string;
};
