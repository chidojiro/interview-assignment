import axios, { AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from 'axios';
import { getCookie } from 'cookies-next';

const ApiKey = process.env.NEXT_PUBLIC_DOMAIN_SERVICES_API_PUBLIC_KEY as string;
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DOMAIN_SERVICES_API_BASE_URL,
  params: {
    apikey: ApiKey,
  },
});

export type Data = {
  // Data describes a generic abstract structure of request, which can be anything.
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [id: string]: any;
};

/**
 * Wraps around Axios and provides options of app-specific context to requests.
 */
export class TalentAppApi {
  authorizationCookieName = 'IdToken';

  isAuthorization = () => getCookie(this.authorizationCookieName);

  defaultHeaders = () => ({
    'Authorization': `Bearer ${getCookie(this.authorizationCookieName)}`,
    'Content-Type': 'application/json',
  });

  async post<T = Data, R = AxiosResponse<T>, D = Data>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return axiosInstance.post(url, data, TalentAppApi.mergeDefaultHeaders(this.defaultHeaders(), config));
  }

  async get<T = Data, R = AxiosResponse<T>, D = Data>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    return axiosInstance.get(url, TalentAppApi.mergeDefaultHeaders(this.defaultHeaders(), config));
  }

  async delete<T = Data, R = AxiosResponse<T>, D = Data>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    return axiosInstance.delete(url, TalentAppApi.mergeDefaultHeaders(this.defaultHeaders(), config));
  }

  async put<T = Data, R = AxiosResponse<T>, D = Data>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return axiosInstance.put(url, data, TalentAppApi.mergeDefaultHeaders(this.defaultHeaders(), config));
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

const instance = new TalentAppApi();

export default instance;
