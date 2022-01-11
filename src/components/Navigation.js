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

const Navigation = ({
  classes,
  mainMenu,
  showMyRandstad = true,
  languages,
  utilityMenu,
  theme = "default",
  myRandstad = {},
  config = {},
}) => {
  const { baseUrl: myRandstadBaseUrl, label: myRandstadLabel } = myRandstad;
  const { homepageUrl, navigationHeadingText } = config;

  return (
    // With current implementation on apps we cannot use getBackground() to set background. The background classes are passed with <Head></Head> and will not be optimal to separate classes.
    <header {...classes}>
      <nav
        className="navigation"
        role="navigation"
        aria-labelledby="block-main-navigation-menu"
        id="block-main-navigation">
        <h4 id="block-main-navigation-menu" className="hidden--visually">
          {navigationHeadingText}
        </h4>
        <div className="wrapper navigation__wrapper">
          <div className="navigation__top">
            <Logo homepageUrl={homepageUrl} theme={theme} />
            <MainMenu items={mainMenu} />
            <ul className="navigation__service">
              <MyRandstad
                baseUrl={myRandstadBaseUrl}
                label={myRandstadLabel}
                show={showMyRandstad}
              />
              <li className="navigation__service-item hidden--from-l">
                <button
                  className="button--icon-only button--hamburger"
                  data-rs-navigation-menu-icon="">
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
          <div className="navigation__bottom"></div>
        </div>
      </nav>
      <Modal theme={theme}>
        <nav className="navigation-accordion">
          <MobileNavigation items={mainMenu} myRandstadUrl={myRandstadBaseUrl} />
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
      text: t.string.isRequired,
      url: t.string.isRequired,
      isActive: t.bool,
    }),
  ),
  showMyRandstad: t.bool,
  languages: t.arrayOf(
    t.shape({
      language: t.string,
      url: t.string,
      isActive: t.bool,
    }),
  ),
  utilityMenu: t.arrayOf(
    t.shape({
      title: t.string,
      url: t.string,
      children: t.arrayOf(
        t.shape({
          title: t.string,
          url: t.string,
        }),
      ),
    }),
  ),
  theme: t.oneOf(["default", "sph"]),
  myRandstad: t.shape({
    baseUrl: t.string,
    label: t.string,
  }),
  config: t.shape({
    homepageUrl: t.string,
    navigationHeadingText: t.string,
  }),
};

Navigation.defaultProps = {
  theme: "default",
  myRandstad: {},
  config: {},
  showMyRandstad: true,
};

export default Navigation;
