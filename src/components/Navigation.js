import React from "react";
import t from "prop-types";

import Toast from "./Toast";
import LanguageSwitcher from "./navigation/LanguageSwitcher";
import MobileNavigation from "./navigation/MobileNavigation";
import UtilityNavigation from "./navigation/UtilityNavigation";
import Logo from "./navigation/Logo";
import Submenu from "./navigation/Submenu";
import MainMenu from "./navigation/MainMenu";
import MyRandstad from "./navigation/MyRandstad";
import Modal from "./navigation/Modal";

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
  myRandstad = {},
  config = {},
  afterLinks,
}) => {
  const { baseUrl: myRandstadBaseUrl, label: myRandstadLabel } = myRandstad;
  const { homepageUrl, navigationHeadingText } = config;

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
                baseUrl={myRandstadBaseUrl}
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
            <div className="navigation__link-bar hidden--until-l">
              <LanguageSwitcher items={languages} />
            </div>
            <UtilityNavigation items={utilityMenu} />
            <div id="navigationPopup"></div>
          </div>
          <Submenu items={mainMenu} />
        </div>
      </nav>
      <Modal theme={theme}>
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

Navigation.propTypes = {
  classes: t.object,
  mainMenu: t.arrayOf(
    t.shape({
      title: t.string.isRequired,
      url: t.string.isRequired,
      isActive: t.bool,
      children: t.arrayOf(
        t.shape({
          title: t.string.isRequired,
          url: t.string.isRequired,
        }),
      ),
    }),
  ),
  showMyRandstad: t.bool,
  languages: t.arrayOf(
    t.shape({
      language: t.string.isRequired,
      url: t.string.isRequired,
      isActive: t.bool,
    }),
  ),
  utilityMenu: t.arrayOf(
    t.shape({
      title: t.string.isRequired,
      url: t.string.isRequired,
      children: t.arrayOf(
        t.shape({
          title: t.string,
          url: t.string,
        }),
      ),
    }),
  ),
  /** Select proper logo and style for the navigation */
  theme: t.oneOf(["default", "sph"]),
  myRandstad: t.shape({
    baseUrl: t.string.isRequired,
    label: t.string,
  }),
  config: t.shape({
    homepageUrl: t.string.isRequired,
    /** Text displayed on top for a11y */
    navigationHeadingText: t.string.isRequired,
  }),
  afterLinks: t.any,
};

Navigation.defaultProps = {
  theme: "default",
  myRandstad: {},
  config: {},
  showMyRandstad: true,
};

export default Navigation;
