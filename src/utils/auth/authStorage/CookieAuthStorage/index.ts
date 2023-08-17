import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import type { CookieSerializeOptions } from 'cookie';
import IAuthStorage from '../AbstractAuthStorage';
import getCookieOptions from '../../getCookieOptions';

interface CookieAuthStorageOptions {
  idTokenName: string;
  refreshTokenName: string;
}

class CookieAuthStorage extends IAuthStorage<CookieSerializeOptions> {
  private options: CookieAuthStorageOptions;

  constructor(options: CookieAuthStorageOptions) {
    super();
    this.options = {
      ...options,
    };
  }

  public getIdToken() {
    const value = getCookie(this.options.idTokenName);
    if (typeof value === 'string') {
      return value;
    }
    return undefined;
  }

  public setIdToken(idToken: string) {
    const expires = this.idTokenExpiresAt(idToken);
    const idTokenOptions = getCookieOptions({ expires });
    setCookie(this.options.idTokenName, idToken, idTokenOptions);
  }

  public getRefreshToken() {
    const value = getCookie(this.options.refreshTokenName);
    if (typeof value === 'string') {
      return value;
    }
    return undefined;
  }

  public setRefreshToken(refreshToken: string, expiresInSecs?: number) {
    let refreshTokenOptions: CookieSerializeOptions | undefined;

    if (expiresInSecs !== undefined) {
      refreshTokenOptions = {
        encode: String,
        // secure: true,
        sameSite: 'strict',
        // httpOnly: true,
        expires: new Date(Date.now() + expiresInSecs * 1000),
      };
    }
    setCookie(this.options.refreshTokenName, refreshToken, refreshTokenOptions);
  }

  public deleteTokens(): void {
    const idTokenCookieOptions = getCookieOptions();
    deleteCookie(this.options.idTokenName, idTokenCookieOptions);
    deleteCookie(this.options.refreshTokenName);
  }
}

export default CookieAuthStorage;
