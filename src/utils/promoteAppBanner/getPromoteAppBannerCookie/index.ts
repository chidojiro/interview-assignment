import { getCookie } from 'cookies-next';

const getPromoteAppBannerCookie = () => getCookie('promoteAppBannerClosed');

export default getPromoteAppBannerCookie;
