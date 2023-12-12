/**
 * An abstraction representing authentication data storage
 */
interface AuthStorage<OptionsType> {
  getIdToken(): string | undefined;
  setIdToken(idToken: string, options?: OptionsType): void;
  getRefreshToken(): string | undefined;
  setRefreshToken(refreshToken: string, expiresInSecs?: number): void;
  deleteTokens(options?: OptionsType): void;
}

export default AuthStorage;
