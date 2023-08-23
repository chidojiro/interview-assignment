import jwtDecode, { InvalidTokenError } from 'jwt-decode';

/**
 * An abstraction representing authentication data storage
 */
abstract class AbstractAuthStorage<OptionsType> {
  public abstract getIdToken(): string | undefined;
  public abstract setIdToken(idToken: string, options?: OptionsType): void;
  public abstract getRefreshToken(): string | undefined;
  public abstract setRefreshToken(refreshToken: string, expiresInSecs?: number): void;
  public abstract deleteTokens(options?: OptionsType): void;

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
}

export default AbstractAuthStorage;
