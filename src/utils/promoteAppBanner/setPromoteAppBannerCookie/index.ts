import { setCookie } from 'cookies-next';

const setPromoteAppBannerCookie = () => {
  // Set cookie duration to 1 year.
  const promoteAppBannerCloseExpiresIn = 60 * 60 * 24 * 365;
  setCookie('promoteAppBannerClosed', true, { expires: new Date(Date.now() + promoteAppBannerCloseExpiresIn * 1000) });
};

export default setPromoteAppBannerCookie;
