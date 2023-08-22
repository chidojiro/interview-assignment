import axios, { AxiosInstance } from 'axios';
import getAuthManager from '../auth/getAuthManager';
import { GdsConfigOptions } from '../auth/AuthManager/types';

// A runtime cache of "GDS ready" axios instances.
//
// "GDS ready" is an axios instance which knows where to get IdToken from, how to send it with
// every request and also how to refresh the IdToken, if needed.
const AxiosInstances = new Map<string, AxiosInstance>();

/**
 * Get an already created axios instance or create (and initialize) a new one.
 */
function getAxiosInstance(gdsConfigOptions: GdsConfigOptions, shareIdTokenAcrossSubdomains: boolean) {
  // instanceKey is not an URL but an URL-like unique hash of this function's parameters.
  const instanceKey = `${gdsConfigOptions.baseUrl}?key=${gdsConfigOptions.apiKey}&auth=${
    shareIdTokenAcrossSubdomains ? 'shared' : 'private'
  }`;
  let axiosInstance = AxiosInstances.get(instanceKey);

  if (!axiosInstance) {
    axiosInstance = axios.create({
      baseURL: gdsConfigOptions.baseUrl,
      params: {
        apikey: gdsConfigOptions.apiKey,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const authManager = getAuthManager(gdsConfigOptions, shareIdTokenAcrossSubdomains);

    axiosInstance.interceptors.request.use(async (config) => {
      const result = config;
      const isClient = typeof window !== 'undefined';
      if (isClient) {
        const idToken = await authManager.getValidatedIdToken();
        if (typeof idToken === 'string') {
          result.headers = config.headers ?? {};
          result.headers.Authorization = `Bearer ${idToken}`;
        }
      }
      return result;
    });

    AxiosInstances.set(instanceKey, axiosInstance);
  }

  return axiosInstance;
}

export default getAxiosInstance;
