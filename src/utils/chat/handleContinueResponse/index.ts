import { ContinueResponse } from '../../../components/chat/Chat/Chat.types';
import { ContinueRequestType, ConversationReply } from '../types';

function handleContinueResponse(
  requestType: ContinueRequestType,
  response: ContinueResponse,
  setReplies: (replies: React.SetStateAction<Array<ConversationReply>>) => void,
) {
  if (response && response.replies) {
    setReplies((oldReplies) => [...oldReplies, ...response.replies]);
  }
}

export default handleContinueResponse;
