import { useState } from 'react';
import { ConversationReply } from '../../../utils';
import { ConversationData } from '../../../components/chat/Chat/Chat.types';
import { ChatInitResponse } from './types';

function useChatInitHandler() {
  const [replies, setReplies] = useState<Array<ConversationReply>>([]);
  const [replyLoading, setReplyLoading] = useState<boolean>(true);
  const [conversationData, setConversationData] = useState<ConversationData>({
    conversationId: '',
    responseId: '',
  });

  const handleInitResponse = (response: ChatInitResponse | undefined) => {
    if (!response) return;

    if (response.response_id && response.conversation_id) {
      setConversationData({
        responseId: response.response_id,
        conversationId: response.conversation_id,
      });

      if (response.replies) {
        setReplies(response.replies);
      }
    }
  };

  return {
    replies,
    setReplies,
    replyLoading,
    setReplyLoading,
    conversationData,
    setConversationData,
    handleInitResponse,
  };
}

export default useChatInitHandler;
