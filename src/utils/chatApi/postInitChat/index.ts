import { getCookie } from 'cookies-next';
import ChatApi from '../index';
import type { ChatInitRequest, ChatInitResponse } from './types';

async function postInitChat(
  chatId: string,
  chatApiKey: string,
  chatApiUrl: string,
  applicationId: string,
  chatTimezone: string,
  chatDateFormat: string,
  locale: string,
): Promise<ChatInitResponse | undefined> {
  const chatApi = new ChatApi(chatId, chatApiUrl, chatApiKey);
  const idToken = getCookie('IdToken') as string;
  const data: ChatInitRequest = {
    idToken,
    applicationId,
    language: locale,
    timezoneName: chatTimezone,
    dateFormat: chatDateFormat,
  };

  try {
    const response = await chatApi.post(`/init/${chatId}`, data);
    return response.data;
  } catch (error) {
    // Log the error.
    // eslint-disable-next-line no-console
    console.error(`Error error initializing chat : ${error}`);
  }

  return undefined;
}

export default postInitChat;
