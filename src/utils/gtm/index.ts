import type {
  CustomWindow, DataLayerEventObjectType, CoreDataLayerEventObjectType, DataLayerUserObject,
} from './types';
import getUserData from '../getUserData';

export function gtmDataLayerPushHandler(eventDataObject: DataLayerEventObjectType) {
  (window as unknown as CustomWindow).dataLayer = (window as unknown as CustomWindow).dataLayer || [];
  // Pushes { event_params: null }, as in documentation, before each event.
  (window as unknown as CustomWindow).dataLayer.push({ event_params: null });
  (window as unknown as CustomWindow).dataLayer.push(eventDataObject);
}

const scriptExists = (url: string) => {
  const scripts = document.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i += 1) {
    if (scripts[i].src === url) return true;
  }
  return false;
};

const getCoreEventObject = (coreEvent: { country: string, type: string, language: string }, isLoginEnabled: boolean): CoreDataLayerEventObjectType => {
  const user = getUserData();
  let userEventObject: DataLayerUserObject;
  if (isLoginEnabled) {
    userEventObject = {
      login_status: user.loginStatus ? 'member' : 'guest',
      account_id: user.currentUser?.id || '',
      type: '',
      employee_number: '',
      ip_address: '',
      signup_date: user.currentUser?.createdDate || '',
      cms_user_id: '',
      no_of_applications: '',
    };
  } else {
    userEventObject = { ip_address: '', cms_user_id: '', no_of_applications: '' };
  }

  return {
    page: {
      environment: process.env.NEXT_PUBLIC_ENVIRONMENT || '',
      ...coreEvent,
    },
    user: userEventObject,
  };
};

export const gtmScriptInitializer = (
  w: Window,
  d: Document,
  s: string,
  l: string,
  gtm: { id: string, type: string, country: string },
  language: string,
  isLoginEnabled: boolean,
) => {
  if (!(w as unknown as CustomWindow).dataLayer) {
    (window as unknown as CustomWindow).dataLayer = [];
  }
  // Comes from original Google script.
  // eslint-disable-next-line eqeqeq
  const dl = l != 'dataLayer' ? `&l=${l}` : '';
  const src = `https://www.googletagmanager.com/gtm.js?id=${gtm.id}${dl}`;
  /* To avoid a lot of installations of Google Tag Manager detected warning */
  if (!scriptExists(src)) {
    (w as unknown as CustomWindow).dataLayer.unshift(getCoreEventObject({ country: gtm.country, type: gtm.type, language }, isLoginEnabled));
    (w as unknown as CustomWindow).dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    const f = d.getElementsByTagName(s)[0];
    const j: HTMLScriptElement = d.createElement('script');
    j.setAttribute('async', 'true');
    j.setAttribute('src', src);
    if (f) {
      f?.parentNode?.insertBefore(j, f);
    } else {
      d.head.appendChild(j);
    }
  }
};
