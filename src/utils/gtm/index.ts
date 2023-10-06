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

const getCoreEventObject = (coreEvent: { country: string, type: string, language: string, env?: string }, isLoginEnabled: boolean): CoreDataLayerEventObjectType => {
  let environment = 'dev';
  if (coreEvent.env) {
    if (coreEvent.env.startsWith('prd')) {
      environment = 'prod';
    } else if (coreEvent.env.startsWith('tst')) {
      environment = 'QA';
    }
  }
  const getCookie = (name: string): string => {
    const parts = `; ${document.cookie}`.split(`; ${name}=`);
    return (parts.pop() || '').split(';').shift() || '';
  };
  let userEventObject: DataLayerUserObject = {
    ip_address: getCookie('ip_address'),
    cms_user_id: getCookie('cms_user_id'),
    no_of_applications: '',
  };

  if (isLoginEnabled) {
    const user = getUserData();
    let formattedDate = '';
    if (user.currentUser?.createdDate) {
      try {
        [formattedDate] = (new Date(user.currentUser.createdDate)).toISOString().split('T');
      } catch (e) {
        formattedDate = '';
      }
    }
    userEventObject = {
      ...userEventObject,
      login_status: user.loginStatus ? 'member' : 'guest',
      account_id: user.currentUser?.id || '',
      type: user.currentUser?.personalInfo?.isEmployee ? 'employee' : '',
      employee_number: '',
      signup_date: formattedDate,
      no_of_applications: '',
    };
  }

  return {
    page: {
      environment: environment.toUpperCase(),
      country: coreEvent.country.toUpperCase(),
      type: coreEvent.type,
      language: coreEvent.language,
    },
    user: userEventObject,
  };
};

export const gtmScriptInitializer = (
  w: Window,
  d: Document,
  s: string,
  l: string,
  gtm: { id: string, type: string, country: string, env?: string },
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
    const coreEventSettings = {
      country: gtm.country,
      type: gtm.type,
      language,
      env: gtm.env,
    };
    (w as unknown as CustomWindow).dataLayer.unshift(getCoreEventObject(coreEventSettings, isLoginEnabled));
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
