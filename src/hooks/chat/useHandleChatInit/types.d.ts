import { ConversationReply } from '../../../utils';

export type ChatInitResponse = {
  response_id: string | undefined;
  conversation_id: string | undefined;
  replies: Array<ConversationReply> | undefined;
};
