import postContinueConversation from '../../../utils/chat/chatApi/postContinueConversation';
import type { ConversationMultiSelect, ConversationMultiSelectItem, ConversationQuickSuggest, ConversationReply } from '../../../utils';
import { ContinueRequestType } from '../../../utils';
import handleQuickSuggestRequest from '../../../utils/chat/handleQuickSuggestRequest';
import checkForMultiSelects from '../../../utils/chat/checkForMultiSelects';

function useHandleContinueConversation(
  replies: Array<ConversationReply> | undefined,
  setChatReplies: ((replies: React.SetStateAction<Array<ConversationReply>>) => void) | undefined,
  conversationData: { conversationId: string; responseId: string },
  setConversationData: (data: React.SetStateAction<{ conversationId: string; responseId: string }>) => void,
  replyLoading: boolean,
  setReplyLoading: (loading: React.SetStateAction<boolean>) => void,
  jobId: string | undefined,
  applicationId: string | undefined,
) {
  // Reducing cognitive complexity will break the logic.
  // eslint-disable-next-line sonarjs/cognitive-complexity
  const handleContinueConversation = (requestType: ContinueRequestType, data: unknown) => {
    setReplyLoading(true);

    let replyText = '';
    let dataPayload: string | undefined;

    if (requestType === ContinueRequestType.QUICK_SUGGEST) {
      const { dataRequest, textRequest } = handleQuickSuggestRequest(data);
      replyText = textRequest;
      dataPayload = dataRequest;
    } else if (requestType === ContinueRequestType.TEXT_REPLY) {
      replyText = data as string;
    } else {
      dataPayload = undefined;
      replyText = '';
    }

    /**
     * If the reply is text, we will show it in the chat.
     */
    if (requestType === ContinueRequestType.TEXT_REPLY && window && window.orbit && window.orbit.chatInstance) {
      window.orbit.chatInstance.userInputToSpeechBubble();
    }

    postContinueConversation(
      `${jobId}${applicationId}`,
      process.env.NEXT_PUBLIC_CHAT_API_KEY || '',
      process.env.NEXT_PUBLIC_CHAT_API_URL || '',
      conversationData.conversationId,
      conversationData.responseId,
      requestType,
      replyText,
      dataPayload,
    )
      .then((resp) => {
        if (resp) {
          if (resp.response_id) {
            setConversationData((old) => ({ ...old, responseId: resp.response_id }));
          }
          if (resp.replies) {
            checkForMultiSelects();
            if (setChatReplies) {
              setChatReplies((oldReplies) => [...oldReplies, ...resp.replies]);
            }
          }
        }
        setReplyLoading(false);
        return true;
      })
      .catch((error) => {
        // Need to log the error.
        // eslint-disable-next-line no-console
        console.error(`Error continue conversation ${error}`);
        setReplyLoading(false);
      });
  };

  const handleSendButton = (text: string) => {
    handleContinueConversation(ContinueRequestType.TEXT_REPLY, text);
  };

  const handleQuickSuggest = (item: ConversationQuickSuggest) => {
    handleContinueConversation(ContinueRequestType.QUICK_SUGGEST, item);
  };

  const handleMultiSelectSubmit = (data: ConversationMultiSelect, selected: Array<ConversationMultiSelectItem>) => {
    const combinedData = {
      ...data,
      items: selected,
    };
    handleContinueConversation(ContinueRequestType.QUICK_SUGGEST, combinedData);
  };

  return {
    handleSendButton,
    handleQuickSuggest,
    handleMultiSelectSubmit,
  };
}

export default useHandleContinueConversation;
