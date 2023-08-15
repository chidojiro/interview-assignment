import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import type { CookieSerializeOptions } from 'cookie';
import IAuthStorage from '../AbstractAuthStorage';

const refreshTokenExpirationDays = process.env.NEXT_PUBLIC_REFRESH_TOKEN_EXPIRATION_DAYS as string;

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

  public setIdToken(idToken: string, options: CookieSerializeOptions = {}) {
    const expires = this.idTokenExpiresAt(idToken);
    setCookie(this.options.idTokenName, idToken, { ...options, expires });
  }

  public getRefreshToken() {
    const value = getCookie(this.options.refreshTokenName);
    if (typeof value === 'string') {
      return value;
    }
    return undefined;
  }

  public setRefreshToken(refreshToken: string, expiresInSecs?: number) {
    if (expiresInSecs !== undefined) {
      const extraOptions: CookieSerializeOptions = {
        encode: String,
        // secure: true,
        sameSite: 'strict',
        // httpOnly: true,
        expires: new Date(Date.now() + expiresInSecs * 1000),
      };
      setCookie(this.options.refreshTokenName, refreshToken, {
        ...extraOptions,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * +refreshTokenExpirationDays),
      });
    } else {
      setCookie(this.options.refreshTokenName, refreshToken);
    }
  }

  public deleteTokens(): void {
    deleteCookie(this.options.idTokenName);
    deleteCookie(this.options.refreshTokenName);
  }
}

export default CookieAuthStorage;
