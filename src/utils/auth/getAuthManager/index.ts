import axios from 'axios';
import { GdsConfigOptions } from '../AuthManager/types';
import createCookieAuthStorage from '../authStorage/CookieAuthStorage';
import createAuthManager from '../AuthManager';

const AuthManagers = new Map<string, ReturnType<typeof createAuthManager<unknown>>>();

function getAuthManager(gdsConfigOptions: GdsConfigOptions, shareIdTokenAcrossSubdomains: boolean) {
  const hash = `${gdsConfigOptions.baseUrl}?${gdsConfigOptions.apiKey}`;
  let authManager = AuthManagers.get(hash);
  if (!authManager) {
    const authStorage = createCookieAuthStorage({
      idTokenName: 'IdToken',
      refreshTokenName: 'RefreshToken',
      shareIdTokenAcrossSubdomains,
    });
    const axiosInstance = axios.create({
      baseURL: gdsConfigOptions.baseUrl,
      params: {
        apikey: gdsConfigOptions.apiKey,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    authManager = createAuthManager(authStorage, axiosInstance);
    AuthManagers.set(hash, authManager);
  }

  return authManager;
}

export default getAuthManager;
