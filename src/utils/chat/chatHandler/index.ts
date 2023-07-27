import { AxiosResponse } from 'axios';
import { ChatApi } from '../chatApi';

export type Data = {
  // Data describes a generic abstract structure of request, which can be anything.
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [id: string]: any;
};

export interface ChatConversation {
  [id: string]: any;
}

const initChat = async (
  chatId: string,
  chatApiKey: string,
  chatApiUrl: string,
  applicationId: string,
  chatTimezone: string,
  chatDateFormat: string,
  locale: string,
): Promise<ChatConversation | undefined> => {
  const chatApi = new ChatApi(chatId, chatApiKey, chatApiUrl);

  const response = await chatApi
    .initChat<Data, AxiosResponse<ChatConversation>>(chatApiKey, applicationId, chatTimezone, chatDateFormat, locale)
    .catch((err) => {
      // Needed logging for error.
      // eslint-disable-next-line no-console
      console.error('ChatInit Error: ', err);
      return undefined;
    });

  if (response && response.status === 200) {
    return response?.data;
  }

  return undefined;
};

const continueConversation = async (
  chatId: string,
  chatApiKey: string,
  chatApiUrl: string,
  conversationId: string,
  responseId: string,
  request_type: string,
  reply_text?: string,
  data?: string,
) => {
  const chatApi = new ChatApi(chatId, chatApiKey, chatApiUrl);

  try {
    const response = await chatApi.continueConversation<Data, AxiosResponse<ChatConversation>>(chatApiKey, conversationId, responseId, {
      request_type,
      reply_text,
      data,
    });

    return response.data;
  } catch (error) {
    // We need to log the error.
    // eslint-disable-next-line no-console
    console.error('Error continue conversation ', error);
  }

  return undefined;
};

export { initChat, continueConversation };
