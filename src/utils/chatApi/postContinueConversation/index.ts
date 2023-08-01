import ChatApi from '../index';
import { ContinueRequest, ContinueRequestType, ContinueResponse } from './types';

const postContinueConversation = async (
  chatId: string,
  chatApiKey: string,
  chatApiUrl: string,
  conversationId: string,
  responseId: string,
  request_type: ContinueRequestType,
  reply_text?: string,
  data?: string,
): Promise<ContinueResponse | undefined> => {
  const chatApi = new ChatApi(chatId, chatApiKey);

  try {
    const request: ContinueRequest = {
      reply_text,
      request_type,
      data,
    };
    const url = `${chatApiUrl}/${conversationId}/${responseId}`;
    const response = await chatApi.post(url, request);
    return response.data;
  } catch (error) {
    // We need to log the error.
    // eslint-disable-next-line no-console
    console.error('Error continue conversation ', error);
  }

  return undefined;
};

export default postContinueConversation;
