import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import type { CookieSerializeOptions } from 'cookie';
import AuthStorage from '../AbstractAuthStorage';
import getCookieOptions from '../../getCookieOptions';

interface CookieAuthStorageOptions {
  idTokenName: string;
  refreshTokenName: string;
  shareIdTokenAcrossSubdomains: boolean;
}

const createCookieAuthStorage: (options: CookieAuthStorageOptions) => AuthStorage<CookieSerializeOptions> = (options) => ({
  getIdToken() {
    const value = getCookie(options.idTokenName);
    if (typeof value === 'string') {
      return value;
    }
    return undefined;
  },

  setIdToken(idToken: string, additionalOptions?: CookieSerializeOptions) {
    const idTokenOptions = getCookieOptions(options.shareIdTokenAcrossSubdomains, additionalOptions);
    setCookie(options.idTokenName, idToken, idTokenOptions);
  },

  getRefreshToken() {
    const value = getCookie(options.refreshTokenName);
    if (typeof value === 'string') {
      return value;
    }
    return undefined;
  },

  setRefreshToken(refreshToken: string, expiresInSecs?: number) {
    const refreshTokenOptions: CookieSerializeOptions = {
      encode: String,
      // secure: true,
      sameSite: 'strict',
      // httpOnly: true,
    };

    if (expiresInSecs !== undefined) {
      refreshTokenOptions.expires = new Date(Date.now() + expiresInSecs * 1000);
    }

    setCookie(options.refreshTokenName, refreshToken, refreshTokenOptions);
  },

  deleteTokens(): void {
    const idTokenCookieOptions = getCookieOptions(options.shareIdTokenAcrossSubdomains);
    deleteCookie(options.idTokenName, idTokenCookieOptions);
    deleteCookie(options.refreshTokenName);
  },
});

export default createCookieAuthStorage;
