import axios, { AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from 'axios';
import { getCookie } from 'cookies-next';

export type Data = {
  // Data describes a generic abstract structure of request, which can be anything.
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [id: string]: any;
};

/**
 * Wraps around Axios and provides options of app-specific context to requests.
 */
export class TalentAppApi {
  axiosInstance = axios.create({});

  constructor(gdsApiKey: string, gdsApiUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: gdsApiUrl,
      params: {
        apikey: gdsApiKey,
      },
    });
  }

  authorizationCookieName = 'IdToken';

  isAuthorization = () => getCookie(this.authorizationCookieName);

  defaultHeaders = () => ({
    'Authorization': `Bearer ${getCookie(this.authorizationCookieName)}`,
    'Content-Type': 'application/json',
  });

  async post<T = Data, R = AxiosResponse<T>, D = Data>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.axiosInstance.post(url, data, TalentAppApi.mergeDefaultHeaders(this.defaultHeaders(), config));
  }

  async get<T = Data, R = AxiosResponse<T>, D = Data>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.axiosInstance.get(url, TalentAppApi.mergeDefaultHeaders(this.defaultHeaders(), config));
  }

  async delete<T = Data, R = AxiosResponse<T>, D = Data>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.axiosInstance.delete(url, TalentAppApi.mergeDefaultHeaders(this.defaultHeaders(), config));
  }

  async put<T = Data, R = AxiosResponse<T>, D = Data>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.axiosInstance.put(url, data, TalentAppApi.mergeDefaultHeaders(this.defaultHeaders(), config));
  }

  static mergeDefaultHeaders(headers: AxiosRequestHeaders, config?: AxiosRequestConfig) {
    let allConfigs;
    if (config) {
      allConfigs = config;
      if (config.headers) {
        allConfigs.headers = { ...headers, ...config.headers };
      } else {
        allConfigs.headers = headers;
      }
    } else {
      allConfigs = { headers };
    }

    return allConfigs;
  }
}

export default TalentAppApi;
