import { getCookie } from 'cookies-next';
import { ContinueRequestType } from '../types';
import handleQuickSuggestRequest from '../handleQuickSuggestRequest';
import { ContinueRequest } from './types';

function prepareContinueRequest(data: unknown, requestType: ContinueRequestType): ContinueRequest {
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

  return {
    reply_text: replyText,
    request_type: requestType,
    data: dataPayload,
    idToken: getCookie('IdToken') as string,
  };
}

export default prepareContinueRequest;
