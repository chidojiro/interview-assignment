import AbstractAuthStorage from '../authStorage/AbstractAuthStorage';
import { refreshIdTokenResponse, GdsConfigOptions } from './types';

/**
 * A class responsible for refreshing IdToken
 */
class AuthManager<OptionsType> {
  public readonly authStorage: AbstractAuthStorage<OptionsType>;

  private idTokenPromise: Promise<string | undefined> | null = null;

  private gdsConfigOptions: GdsConfigOptions;

  constructor(storage: AbstractAuthStorage<OptionsType>, gdsConfigOptions: GdsConfigOptions) {
    this.authStorage = storage;
    this.gdsConfigOptions = { ...gdsConfigOptions };
  }

  public async getValidatedIdToken() {
    if (!this.idTokenPromise) {
      this.idTokenPromise = new Promise<string | undefined>((resolve, reject) => {
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
            .catch((ex) => {
              reject(ex);
              this.idTokenPromise = null;
            });
        }, 0);
      });
    }

    return this.idTokenPromise;
  }

  private async refreshIdToken(): Promise<refreshIdTokenResponse> {
    const refreshToken = this.authStorage.getRefreshToken();
    if (!refreshToken) {
      return Promise.reject();
    }

    const params = new URLSearchParams([
      ['apikey', this.gdsConfigOptions.apiKey],
      ['refreshToken', refreshToken],
    ]);

    const response = await fetch(`${this.gdsConfigOptions.baseUrl}/tokens/refresh?${params}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const refreshResponse = await response.json();

    this.authStorage.setIdToken(refreshResponse.idToken);

    return refreshResponse;
  }
}

export default AuthManager;
