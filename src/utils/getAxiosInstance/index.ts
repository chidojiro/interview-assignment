import axios, { AxiosInstance } from 'axios';
import getAuthManager from 'src/utils/auth/getAuthManager';

// A runtime cache of "GDS ready" axios instances.
//
// "GDS ready" is an axios instance which knows where to get IdToken from, how to send it with
// every request and also how to refresh the IdToken, if needed.
const AxiosInstances = new Map<string, AxiosInstance>();

/**
 * Get an already created axios instance or create (and initialize) a new one.
 */
function getAxiosInstance(gdsApiKey: string, gdsApiUrl: string) {
  const instanceKey = `${gdsApiUrl}?${gdsApiKey}`;
  let axiosInstance = AxiosInstances.get(instanceKey);

  if (!axiosInstance) {
    axiosInstance = axios.create({
      baseURL: gdsApiUrl,
      params: {
        apikey: gdsApiKey,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const authManager = getAuthManager(gdsApiKey, gdsApiUrl);

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
