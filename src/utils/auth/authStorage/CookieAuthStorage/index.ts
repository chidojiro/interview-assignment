import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import type { CookieSerializeOptions } from 'cookie';
import jwtDecode, { InvalidTokenError } from 'jwt-decode';
import IAuthStorage from '../IAuthStorage';

const refreshTokenExpirationDays = process.env.NEXT_PUBLIC_REFRESH_TOKEN_EXPIRATION_DAYS as string;

interface CookieAuthStorageOptions {
  idTokenName: string;
  refreshTokenName: string;
}

class CookieAuthStorage implements IAuthStorage<CookieSerializeOptions> {
  private options: CookieAuthStorageOptions;

  constructor(options: CookieAuthStorageOptions) {
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

  // Helper method
  // eslint-disable-next-line class-methods-use-this
  public idTokenExpiresAt(idToken: string) {
    try {
      const decoded: { exp: number } = jwtDecode(idToken);
      return new Date(decoded.exp * 1000); // exp is in seconds
    } catch (ex) {
      if (ex instanceof InvalidTokenError) {
        // Unable to decode token, behave as if there is token, which expires now.
        return new Date();
      }

      throw ex;
    }
  }

  /**
   * The number of seconds until IdToken expire.
   *
   * Could be negative
   */
  public idTokenExpiresAfter(idToken: string) {
    const now = new Date();
    const expiresAt = this.idTokenExpiresAt(idToken);

    return expiresAt.getTime() - now.getTime();
  }

  public willIdTokenExpireIn(idToken: string, seconds: number) {
    return this.idTokenExpiresAfter(idToken) < seconds;
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
