import React, { useEffect, useRef } from 'react';
import useOrbitComponent from '../../hooks/useOrbitComponent';
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';
import { LinksType, UserNameProps } from './types';

export type TranslationProps = {
  myRandstadTitle: string | React.ReactNode;
  greeting: string | React.ReactNode;
  registerText: string | React.ReactNode;
  loginText: string | React.ReactNode;
  logoutText: string | React.ReactNode;
  heading1: string | React.ReactNode;
  heading2: string | React.ReactNode;
  listText1: string | React.ReactNode;
  listText2: string | React.ReactNode;
  listText3: string | React.ReactNode;
};

type Routes = {
  [key: string]: any;
};

type PopoverArrowVariants = 'left' | 'center' | 'right';

interface LoginPopover {
  isAuth?: boolean;
  links?: object;
  locale?: string | undefined;
  languagePrefix: string;
  translations?: TranslationProps | undefined;
  userName?: UserNameProps;
  arrowVariant?: PopoverArrowVariants;
  logoutUrl?: string;
  currentRoute?: string | undefined;
  RouterComponent?: React.FC<any>;
}

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
}: LoginPopover) {
  const [ref] = useOrbitComponent('popover');
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
      popoverTrigger.classList.remove('active');
      // Since the login-popover stays open after click, we dispatch a click on the backdrop/overlay.
      const overlay = document.querySelector('[data-rs-popover-overlay]');
      if (overlay) {
        (overlay as HTMLElement).click();
      }
    }
  };

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
                  {heading1} <span className="text--emphasis">{heading2}</span>
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
      <div ref={overlayRef} className="modal__overlay modal__overlay--light" data-rs-popover-overlay=""></div>
    </>
  );
}

export default LoginPopover;
