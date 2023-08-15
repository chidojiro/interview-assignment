import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import authStorage from '../auth/authStorage';
import refreshIdToken from '../auth/refreshIdToken';

export type Data = {
  // Data describes a generic abstract structure of request, which can be anything.
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [id: string]: any;
};

let idTokenPromise: Promise<string | undefined> | null = null;

function getValidatedIdToken() {
  if (!idTokenPromise) {
    idTokenPromise = new Promise<string | undefined>((resolve, reject) => {
      setTimeout(() => {
        const refreshToken = authStorage.getRefreshToken();

        if (!refreshToken) {
          resolve(undefined);
          idTokenPromise = null;
          return;
        }

        const idToken = authStorage.getIdToken();

        if (typeof idToken === 'string' && !authStorage.willIdTokenExpireIn(idToken, 60 /* sec */)) {
          // We have valid IdToken, which will not going to expire too soon.
          resolve(idToken);
          idTokenPromise = null;
          return;
        }

        // Here we have RefreshToken, and IdToken is either missing, invalid or is about to expire.
        // Trying to refresh IdToken.
        refreshIdToken()
          .then((response) => {
            resolve(response?.idToken);
            idTokenPromise = null;
            return response?.idToken;
          })
          .catch((ex) => {
            reject(ex);
            idTokenPromise = null;
          });
      }, 0);
    });
  }

  return idTokenPromise;
}

/**
 * Wraps around Axios and provides options of app-specific context to requests.
 */
export class TalentAppApi {
  private readonly axiosInstance: AxiosInstance;

  constructor(gdsApiKey: string, gdsApiUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: gdsApiUrl,
      params: {
        apikey: gdsApiKey,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.axiosInstance.interceptors.request.use(async (config) => {
      const result = config;
      const isClient = typeof window !== 'undefined';
      if (isClient) {
        const idToken = await getValidatedIdToken();
        if (typeof idToken === 'string') {
          result.headers = config.headers ?? {};
          result.headers.Authorization = `Bearer ${idToken}`;
        }
      }
      return result;
    });
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
