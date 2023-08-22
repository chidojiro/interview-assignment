import type { CookieSerializeOptions } from 'cookie';

export default function getCookieOptions(shareIdTokenAcrossSubdomains: boolean, cookiesExtraOptions: CookieSerializeOptions = {}) {
  let cookieOptions: CookieSerializeOptions = cookiesExtraOptions ? { ...cookiesExtraOptions } : {};

  if (shareIdTokenAcrossSubdomains && typeof window !== 'undefined') {
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
