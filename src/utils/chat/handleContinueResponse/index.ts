import { ContinueRequestType, ConversationReply } from '../types';
import checkForMultiSelects from '../checkForMultiSelects';
import { ContinueResponse } from './types';

function handleContinueResponse(
  requestType: ContinueRequestType,
  response: ContinueResponse,
  setReplies: (replies: React.SetStateAction<Array<ConversationReply>>) => void,
) {
  if (response && response.replies) {
    setReplies((oldReplies) => [...oldReplies, ...response.replies]);
  }

  checkForMultiSelects();
}

export default handleContinueResponse;
