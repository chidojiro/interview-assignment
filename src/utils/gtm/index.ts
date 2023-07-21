import { CustomWindow, DataLayerEventObjectType } from './types';

export function gtmDataLayerPushHandler(eventDataObject: DataLayerEventObjectType) {
  (window as unknown as CustomWindow).dataLayer = (window as unknown as CustomWindow).dataLayer || [];
  // Pushes { event_params: null }, as in documentation, before every event.
  (window as unknown as CustomWindow).dataLayer.push({ event_params: null });
  (window as unknown as CustomWindow).dataLayer.push(eventDataObject);
}

const scriptExists = (url: string) => {
  const scripts = document.getElementsByTagName('script');
  // .
  // eslint-disable-next-line no-plusplus
  for (let i = scripts.length; i--; ) {
    if (scripts[i].src === url) return true;
  }
  return false;
};

export const gtmScriptInitializer = (w: Window, d: Document, s: string, l: string, i: string) => {
  // reassignment comes from the original Google script.
  // eslint-disable-next-line no-param-reassign
  (w as unknown as CustomWindow).dataLayer = (window as unknown as CustomWindow).dataLayer || [];
  (w as unknown as CustomWindow).dataLayer.push({ 'gtm.start': new Date().getTime(), 'event': 'gtm.js' });
  // Comes from original Google script.
  // eslint-disable-next-line eqeqeq
  const dl = l != 'dataLayer' ? `&l=${l}` : '';
  const scr = `https://www.googletagmanager.com/gtm.js?id=${i}${dl}`;

  /* To avoid a lot of installations of Google Tag Manager detected warning */
  if (!scriptExists(scr)) {
    const f = d.getElementsByTagName(s)[0];
    const j: HTMLScriptElement = d.createElement('script');
    j.async = true;
    j.src = scr;
    f?.parentNode?.insertBefore(j, f);
  }
};
