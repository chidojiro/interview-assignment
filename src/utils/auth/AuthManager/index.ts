import axios, { AxiosInstance } from 'axios';
import AbstractAuthStorage from '../authStorage/AbstractAuthStorage';
import { refreshIdTokenResponse, GdsConfigOptions } from './types';

/**
 * A class responsible for refreshing IdToken
 */
class AuthManager<OptionsType> {
  public readonly authStorage: AbstractAuthStorage<OptionsType>;

  private idTokenPromise: Promise<string | undefined> | null = null;

  /**
   * Axios instance used to make refresh token requests
   */
  private axiosInstance: AxiosInstance;

  constructor(storage: AbstractAuthStorage<OptionsType>, gdsConfigOptions: GdsConfigOptions) {
    this.authStorage = storage;
    this.axiosInstance = axios.create({
      baseURL: gdsConfigOptions.baseUrl,
      params: {
        apikey: gdsConfigOptions.apiKey,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public async getValidatedIdToken() {
    if (!this.idTokenPromise) {
      this.idTokenPromise = new Promise<string | undefined>((resolve) => {
        setTimeout(() => {
          const refreshToken = this.authStorage.getRefreshToken();

          if (!refreshToken) {
            resolve(undefined);
            this.idTokenPromise = null;
            return;
          }

          const idToken = this.authStorage.getIdToken();

          if (typeof idToken === 'string' && !this.authStorage.willIdTokenExpireIn(idToken, 60 /* sec */)) {
            // We have valid IdToken, which will not going to expire too soon.
            resolve(idToken);
            this.idTokenPromise = null;
            return;
          }

          // Here we have RefreshToken, and IdToken is either missing, invalid or is about to expire.
          // Trying to refresh IdToken.
          this.refreshIdToken()
            .then((response) => {
              resolve(response?.idToken);
              this.idTokenPromise = null;
              return response?.idToken;
            })
            .catch(() => {
              resolve(undefined);
              this.idTokenPromise = null;
            });
        }, 0);
      });
    }

    return this.idTokenPromise;
  }

  public async refreshIdToken() {
    const refreshToken = this.authStorage.getRefreshToken();
    if (!refreshToken) {
      return Promise.reject();
    }

    const response = await this.axiosInstance.post<refreshIdTokenResponse>('/tokens/refresh', undefined, {
      params: {
        refreshToken,
      },
    });

    this.authStorage.setIdToken(response.data.idToken);

    return response.data;
  }
}

export default AuthManager;
