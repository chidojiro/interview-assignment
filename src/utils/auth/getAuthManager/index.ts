import { GdsConfigOptions } from '../AuthManager/types';
import AuthManager from '../AuthManager';
import authStorage from '../authStorage';

const AuthManagers = new Map<string, AuthManager<unknown>>();

function getAuthManager(gdsConfigOptions: GdsConfigOptions) {
  const hash = `${gdsConfigOptions.baseUrl}?${gdsConfigOptions.apiKey}`;
  let authManager = AuthManagers.get(hash);
  if (!authManager) {
    authManager = new AuthManager(authStorage, gdsConfigOptions);
    AuthManagers.set(hash, authManager);
  }

  return authManager;
}

export default getAuthManager;
