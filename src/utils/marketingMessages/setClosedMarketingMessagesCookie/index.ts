import { setCookie } from 'cookies-next';

const setClosedMarketingMessagesCookie = (ids: string[]) => {
  // Set cookie duration to 1 year.
  const promoteAppBannerCloseExpiresIn = 60 * 60 * 24 * 365;
  setCookie('closedMarketingMessages', JSON.stringify(ids), { expires: new Date(Date.now() + promoteAppBannerCloseExpiresIn * 1000) });
};

export default setClosedMarketingMessagesCookie;
