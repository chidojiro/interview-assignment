import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import jwtDecode, { InvalidTokenError } from 'jwt-decode';
import authStorage from '../auth/authStorage';
import refreshIdToken from '../auth/refreshIdToken';

export type Data = {
  // Data describes a generic abstract structure of request, which can be anything.
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [id: string]: any;
};

/**
 * Retrieve the current non-expired IdToken (if any)
 */
function getIdToken() {
  const idToken = authStorage.getIdToken();
  if (typeof idToken !== 'string') {
    // No IdToken
    return undefined;
  }

  try {
    const decoded: { exp: number } = jwtDecode(idToken);

    const expiresAt = new Date(decoded.exp * 1000); // decoded.exp is in seconds
    const now = new Date();
    const expiresAfterSec = Math.round((expiresAt.getTime() - now.getTime()) / 1000);

    if (expiresAfterSec < 60) {
      // Consider this IdToken expired
      return undefined;
    }

    // Token exists and is not about to expire too soon.
    return idToken;
  } catch (ex) {
    if (ex instanceof InvalidTokenError) {
      // Unable to decode token, behave as if there is no one
      return undefined;
    }

    throw ex;
  }
}

let idTokenPromise: Promise<string | undefined> | null = null;

function getValidatedIdToken() {
  if (!idTokenPromise) {
    idTokenPromise = new Promise<string | undefined>((resolve, reject) => {
      const idToken = getIdToken();
      const refreshToken = authStorage.getRefreshToken();

      setTimeout(() => {
        if (typeof idToken === 'string' || !refreshToken) {
          resolve(idToken);
          idTokenPromise = null;
        } else {
          // Try to refresh the IdToken
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
        }
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
