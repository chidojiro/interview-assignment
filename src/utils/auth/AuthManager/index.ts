import axios from 'axios';
import AuthStorage from '../authStorage/AbstractAuthStorage';
import willIdTokenExpireIn from '../authStorage/willIdTokenExpireIn';
import { refreshIdTokenResponse, GdsConfigOptions } from './types';

const createAuthManager = <OptionsType>(authStorage: AuthStorage<OptionsType>, gdsConfigOptions: GdsConfigOptions) => {
  const axiosInstance = axios.create({
    baseURL: gdsConfigOptions.baseUrl,
    params: {
      apikey: gdsConfigOptions.apiKey,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });

  let idTokenPromise: Promise<string | undefined> | null = null;

  return {
    get authStorage() {
      return authStorage;
    },

    async getValidatedIdToken() {
      if (!idTokenPromise) {
        idTokenPromise = new Promise<string | undefined>((resolve) => {
          setTimeout(() => {
            const idToken = authStorage.getIdToken();

            if (typeof idToken === 'string' && !willIdTokenExpireIn(idToken, 60 /* sec */)) {
              // We have valid IdToken, which will not going to expire too soon.
              resolve(idToken);
              idTokenPromise = null;
              return;
            }

            // IdToken is either missing, invalid or is about to expire.
            // Trying to refresh IdToken.
            this.refreshIdToken()
              .then((response) => {
                resolve(response?.idToken);
                idTokenPromise = null;
                return response?.idToken;
              })
              .catch(() => {
                resolve(undefined);
                idTokenPromise = null;
              });
          }, 0);
        });
      }

      return idTokenPromise;
    },

    async refreshIdToken() {
      const refreshToken = authStorage.getRefreshToken();
      if (!refreshToken) {
        return Promise.reject();
      }

      const response = await axiosInstance.post<refreshIdTokenResponse>('/tokens/refresh', undefined, {
        params: {
          refreshToken,
        },
      });

      authStorage.setIdToken(response.data.idToken);

      return response.data;
    },
  };
};

export default createAuthManager;
