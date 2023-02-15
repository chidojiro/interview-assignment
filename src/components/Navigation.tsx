import React from "react";

import Toast from "./Toast";
import LanguageSwitcher, { LanguageSwitcherProps } from "./navigation/LanguageSwitcher";
import MobileNavigation, { MobileNavigationProps } from "./navigation/MobileNavigation";
import UtilityNavigation, { UtilityNavigationProps } from "./navigation/UtilityNavigation";
import Logo, { LogoProps } from "./navigation/Logo";
import Submenu from "./navigation/Submenu";
import MainMenu from "./navigation/MainMenu";
import MyRandstad, { MyRandstadProps } from "./navigation/MyRandstad";
import Modal from "./navigation/Modal";
import { Items, Theme } from "./navigation/types";

interface Navigation extends Theme {
  classes?: React.ComponentPropsWithoutRef<"header">
  config: {
    /** Text displayed on top for a11y */
    navigationHeadingText?: string,
    homepageUrl: LogoProps['homepageUrl']
  },
  mainMenu: Items[],
  showMyRandstad?: MyRandstadProps['show'],
  languages: LanguageSwitcherProps['items'],
  utilityMenu?: UtilityNavigationProps['items'],
  myRandstad: Omit<MyRandstadProps, 'show'> & {
    baseUrl?: MobileNavigationProps['myRandstadUrl']
  },
  afterLinks?: React.ReactNode
}

/**
 * The top-level navigation of the website and shown on each page. See [here](https://randstad.design/components/core/navigation/)
 *
 */
const Navigation = ({
  classes,
  mainMenu,
  showMyRandstad = true,
  languages,
  utilityMenu,
  theme = "default",
  myRandstad,
  config,
  afterLinks,
}: Navigation) => {
  const {
    baseUrl: myRandstadBaseUrl,
    label: myRandstadLabel,
    loginUrl: myRandstadLoginUrl,
  } = myRandstad || {};
  const { homepageUrl, navigationHeadingText } = config || {};

  return (
    // With current implementation on apps we cannot use getBackground() to set background. The background classes are passed with <Head></Head> and will not be optimal to separate classes.
    <header {...classes}>
      <nav
        className="navigation"
        role="navigation"
        aria-label={navigationHeadingText}
        id="block-main-navigation">
        <div className="wrapper navigation__wrapper">
          <div className="navigation__top">
            <Logo homepageUrl={homepageUrl} theme={theme} />
            <MainMenu items={mainMenu} />
            <ul className="navigation__service">
              {afterLinks}
              <MyRandstad
                loginUrl={myRandstadLoginUrl}
                label={myRandstadLabel}
                show={showMyRandstad}
              />
              <li className="navigation__service-item hidden--from-l">
                <button
                  className="button--icon-only button--hamburger"
                  data-rs-navigation-menu-icon=""
                  data-rs-navigation-menu-labels=""
                  aria-label="open menu">
                  <span className="icon icon--hamburger"></span>
                </button>
              </li>
            </ul>
            <div className="navigation__link-bar flex hidden--until-l">
              <UtilityNavigation items={utilityMenu} />
              <LanguageSwitcher items={languages} extraClasses="l:ml-s" />
            </div>
            <div id="navigationPopup"></div>
          </div>
          <Submenu items={mainMenu} />
        </div>
      </nav>
      <Modal>
        <nav className="navigation-accordion">
          <MobileNavigation
            items={mainMenu}
            myRandstadUrl={myRandstadBaseUrl}
            showMyRandstad={showMyRandstad}
          />
          <LanguageSwitcher items={languages} />
        </nav>
      </Modal>

      <Toast anchor="logged-out" id="logged-out">
        You are successfully logged out of your my randstad account
      </Toast>
      <Toast anchor="delete-account" id="delete-account">
        You have successfully deleted your account
      </Toast>
    </header>
  );
};

export default Navigation;
