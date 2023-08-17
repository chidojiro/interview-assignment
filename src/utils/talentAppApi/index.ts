import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import getAxiosInstance from '../getAxiosInstance';

export type Data = {
  // Data describes a generic abstract structure of request, which can be anything.
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [id: string]: any;
};

/**
 * Wraps around Axios and provides options of app-specific context to requests.
 */
export class TalentAppApi {
  private readonly axiosInstance: AxiosInstance;

  constructor(gdsApiKey: string, gdsApiUrl: string) {
    this.axiosInstance = getAxiosInstance({ apiKey: gdsApiKey, baseUrl: gdsApiUrl });
  }

  async post<T = Data, R = AxiosResponse<T>, D = Data>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.axiosInstance.post(url, data, config);
  }

  async get<T = Data, R = AxiosResponse<T>, D = Data>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.axiosInstance.get(url, config);
  }

  async delete<T = Data, R = AxiosResponse<T>, D = Data>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.axiosInstance.delete(url, config);
  }

  async put<T = Data, R = AxiosResponse<T>, D = Data>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.axiosInstance.put(url, data, config);
  }
}

export default TalentAppApi;
