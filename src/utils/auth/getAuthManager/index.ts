import { GdsConfigOptions } from '../AuthManager/types';
import AuthManager from '../AuthManager';
import CookieAuthStorage from '../authStorage/CookieAuthStorage';

const AuthManagers = new Map<string, AuthManager<unknown>>();

function getAuthManager(gdsConfigOptions: GdsConfigOptions, shareIdTokenAcrossSubdomains: boolean) {
  const hash = `${gdsConfigOptions.baseUrl}?${gdsConfigOptions.apiKey}`;
  let authManager = AuthManagers.get(hash);
  if (!authManager) {
    const authStorage = new CookieAuthStorage({
      idTokenName: 'IdToken',
      refreshTokenName: 'RefreshToken',
      shareIdTokenAcrossSubdomains,
    });
    authManager = new AuthManager(authStorage, gdsConfigOptions);
    AuthManagers.set(hash, authManager);
  }

  return authManager;
}

export default getAuthManager;
