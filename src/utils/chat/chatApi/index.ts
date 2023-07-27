import axios, { AxiosResponse } from 'axios';
import { getCookie } from 'cookies-next';

export type Data = {
  // Data describes a generic abstract structure of request, which can be anything.
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [id: string]: any;
};

export type ContinueRequest = {
  request_type: string;
  reply_text?: string;
  data?: string;
};

export class ChatApi {
  axiosInstance = axios.create({});

  private readonly chatApiUrl: string;

  private readonly chatId: string;

  constructor(chatId: string, chatApiKey: string, chatApiUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: chatApiUrl,
    });
    this.chatApiUrl = chatApiUrl;
    this.chatId = chatId;
  }

  authorizationCookieName = 'IdToken';

  async initChat<T = Data, R = AxiosResponse<T>>(
    chatApiKey: string,
    applicationId: string,
    chatTimezone: string,
    chatDateFormat: string,
    locale: string,
  ): Promise<R> {
    const url = `${this.chatApiUrl}${this.chatId}`;
    const idToken = getCookie(this.authorizationCookieName);
    const data: Data = {
      idToken,
      applicationId,
      language: locale,
      timezoneName: chatTimezone,
      dateFormat: chatDateFormat,
    };
    const headers = {
      'Content-Type': 'application/json',
      'x-api-key': chatApiKey,
    };

    return this.axiosInstance.post(url, data, { headers });
  }

  async continueConversation<T = Data, R = AxiosResponse<T>>(
    apiKey: string,
    conversationId: string,
    responseId: string,
    request: ContinueRequest,
  ): Promise<R> {
    const url = `${this.chatApiUrl}${conversationId}/${responseId}`;
    const headers = {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    };
    return this.axiosInstance.post(url, request, { headers });
  }
}

export default ChatApi;
