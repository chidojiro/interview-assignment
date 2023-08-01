import axios, { AxiosResponse } from 'axios';

class ChatApi {
  private axiosInstance = axios.create({});

  private readonly chatId: string;

  constructor(chatId: string, chatApiKey: string) {
    this.axiosInstance = axios.create({
      headers: {
        'x-api-key': chatApiKey,
        'Content-Type': 'application/json',
      },
    });
    this.chatId = chatId;
  }

  async post<D>(url: string, data?: D): Promise<AxiosResponse> {
    return this.axiosInstance.post(url, data);
  }
}

export default ChatApi;
