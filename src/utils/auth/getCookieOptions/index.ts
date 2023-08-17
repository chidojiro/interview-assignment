import type { CookieSerializeOptions } from 'cookie';

export default function getCookieOptions(cookiesExtraOptions: CookieSerializeOptions = {}) {
  let cookieOptions: CookieSerializeOptions = cookiesExtraOptions ? { ...cookiesExtraOptions } : {};

  // @FIXME: Usage of process.env here is a problem with pending resolution!
  if (process.env.NEXT_PUBLIC_ID_TOKEN_ALLOW_SUBDOMAINS === 'true' && typeof window !== 'undefined') {
    const appHostname = window.location.hostname;
    const parts = appHostname.split('.');
    if (parts.length > 1) {
      const topLevelDomain = `.${parts.slice(-2).join('.')}`;
      cookieOptions = {
        ...cookieOptions,
        domain: topLevelDomain,
      };
    }
  }

  return cookieOptions;
}
