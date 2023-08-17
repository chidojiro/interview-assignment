import AuthManager from '../AuthManager';
import authStorage from '../authStorage';

const AuthManagers = new Map<string, AuthManager<unknown>>();

function getAuthManager(gdsBaseUrl: string, gdsApiKey: string) {
  const hash = `${gdsBaseUrl}?${gdsApiKey}`;
  let authManager = AuthManagers.get(hash);
  if (!authManager) {
    authManager = new AuthManager(authStorage, { apiKey: gdsApiKey, baseUrl: gdsBaseUrl });
    AuthManagers.set(hash, authManager);
  }

  return authManager;
}

export default getAuthManager;
