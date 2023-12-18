import jwtDecode, { InvalidTokenError } from 'jwt-decode';

function idTokenExpiresAt(idToken: string): Date {
  try {
    // Try to decode header first. This will throw an error if token header is not valid, which
    // in turn will force IdToken refresh.
    jwtDecode(idToken, { header: true });

    // Decode the token payload in order to get token's expiration time.
    // (this will NOT throw error even if token's header is not valid)
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
function idTokenExpiresAfter(idToken: string) {
  const now = new Date();
  const expiresAt = idTokenExpiresAt(idToken);

  return expiresAt.getTime() - now.getTime();
}

function willIdTokenExpireIn(idToken: string, seconds: number) {
  return idTokenExpiresAfter(idToken) < seconds;
}

export default willIdTokenExpireIn;
