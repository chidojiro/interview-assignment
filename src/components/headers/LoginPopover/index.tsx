import React, { useEffect, useRef } from 'react';
import { Popover } from '@ffw/randstad-local-orbit/js/components/popover';
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';
import {
  LinksType, LoginPopoverPropTypes, Routes, TranslationProps,
} from './LoginPopover.types';
import { loginPopoverEvent } from '../../../utils/gtmEvents';

function LoginPopover({
  isAuth,
  links,
  logoutUrl = '/',
  locale = 'en',
  languagePrefix,
  translations,
  userName,
  arrowVariant,
  RouterComponent,
  currentRoute,
}: LoginPopoverPropTypes) {
  const ref = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentRoute && overlayRef.current) {
      overlayRef.current.click();
    }
  }, [currentRoute]);

  let arrowType;

  switch (arrowVariant) {
    case 'left':
      arrowType = 'popover--arrow-left';
      break;
    case 'center':
      arrowType = 'popover--arrow-center';
      break;
    case 'right':
      arrowType = 'popover--arrow-right';
      break;
    default:
      arrowType = '';
  }

  const registerButton = links ? (links as Routes)[locale].popup[0] : {};
  const loginButton = links ? (links as Routes)[locale].popup[1] : {};
  let menuLinks = links ? (links as Routes)[locale].main : {};
  menuLinks = menuLinks.map((item: LinksType) => ({
    ...item,
    url: `${languagePrefix}${item.url}`,
  }));
  const {
    greeting,
    heading1,
    heading2,
    listText1,
    listText2,
    listText3,
    logoutText,
    loginText,
    registerText,
  } = translations as TranslationProps;

  /**
   * This is a fix that we make to remove the active class from the navigation item on mobile.
   * We attach it to Router links and not <a> because they reload the page anyway.
   * TODO: Handle it in Orbit if possible.
   */
  const removeActiveClass = () => {
    const popoverTrigger = document.querySelector('.navigation__service-my-randstad');
    if (popoverTrigger) {
      // Since the login-popover stays open after click, we dispatch a click on the backdrop/overlay.
      const overlay = document.querySelector('[data-rs-popover-overlay]');
      if (overlay) {
        (overlay as HTMLElement).click();
      }

      /**
       * When the user is logged in, clicking on the overlay triggers "toggle"
       * of the "active" class.
       * That's why the manual removal of the class is executed last.
       */
      popoverTrigger.classList.remove('active');
    }
  };

  /**
   * This logic initializes the login-popover component from orbit and attaches the DOMSubtreeModified listener.
   * We check for popover--active class and trigger the data tracking event based on it.
   */
  useEffect(() => {
    const trackEvent = (event: Event) => {
      if (
        event.target
        && event.target instanceof HTMLDivElement
        && event.target.dataset
        && event.target.dataset.rsPopover === 'login-popover'
        && !localStorage.getItem('userState')
      ) {
        if (!event.target.classList.contains('popover--active')) {
          loginPopoverEvent(false);
        } else {
          loginPopoverEvent(true);
        }
      }
    };

    if (ref.current?.hasAttribute('data-rs-popover') && !ref.current.hasAttribute('data-rendered')) {
      new Popover(ref.current);
      ref.current.dataset.rendered = 'rendered';
      document.addEventListener('DOMSubtreeModified', (event) => trackEvent(event));
    }

    return () => document.removeEventListener('DOMSubtreeModified', (event) => trackEvent(event));
  }, []);

  return (
    <>
      <div ref={ref} className={`popover bg-variant-brand-tertiary bluex-popover--mobile ${arrowType}`} data-rs-popover="login-popover" role="dialog" aria-hidden="true">
        <div className="popover__dialog">
          {!isAuth && (
            <LoggedOut
              callback={removeActiveClass}
              registerUrl={`${languagePrefix}${registerButton.url}`}
              registerText={registerText}
              loginUrl={`${languagePrefix}${loginButton.url}`}
              loginText={loginText}
              title={(
                <>
                  {heading1}
                  {' '}
                  <span className="text--emphasis">{heading2}</span>
                </>
              )}
              RouterComponent={RouterComponent}
            >
              <ul className="list--checks">
                <li>{listText1}</li>
                <li>{listText2}</li>
                <li>{listText3}</li>
              </ul>
            </LoggedOut>
          )}
          {isAuth && (
            <LoggedIn
              callback={removeActiveClass}
              menuLinks={menuLinks}
              logoutUrl={logoutUrl}
              logoutText={logoutText}
              title={greeting}
              userName={userName}
              RouterComponent={RouterComponent}
            />
          )}
        </div>
      </div>
      <div
        ref={overlayRef}
        className="modal__overlay modal__overlay--light"
        data-rs-popover-overlay=""
      />
    </>
  );
}

export default LoginPopover;
