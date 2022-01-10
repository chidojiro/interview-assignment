import React from "react";
import Toast from "./Toast";
import LanguageSwitcher from "./navigation/LanguageSwitcher";
import MobileNavigationList from "./navigation/MobileNavigationList";
import UtilityNavigation from "./navigation/UtilityNavigation";
import Logo from "./navigation/Logo";
import Submenu from "./navigation/Submenu";

const Navigation = ({
  classes,
  navigationHeadingMessage,
  homepageUrl,
  mainMenuItems,
  myRandstad,
  myRandstadBaseUrl,
  myRandstadLabel,
  languageItems,
  utilityMenuItems,
  mainMenuHasChildren,
  modalBackground,
  myRandstadUrl,
  theme = "default",
}) => {
  const mainMenuHasChildren = this.state.mainMenuItems.some(
    (menuItem) => menuItem.isActive && menuItem.children && menuItem.children.length,
  );

  let modalBackground = "bg-variant-brand-tertiary";

  if (this.state.theme == "sph") {
    modalBackground = "bg-brand--light-grey";
  }

  return (
    <header {...classes}>
      <nav
        className="navigation"
        role="navigation"
        aria-labelledby="block-main-navigation-menu"
        id="block-main-navigation">
        <h4 id="block-main-navigation-menu" className="hidden--visually">
          {navigationHeadingMessage}
        </h4>
        <div className="wrapper navigation__wrapper">
          <div className="navigation__top">
            <Logo homepageUrl={homepageUrl} theme={theme} />
            <ul className="navigation__menu navigation__menu--main hidden--until-l">
              {mainMenuItems.map((menuItem, index) => {
                return (
                  <li
                    key={index}
                    className={
                      "navigation__menu-item" +
                      (menuItem.isActive ? " navigation__menu-item--active" : "")
                    }>
                    <a href={menuItem.url}>{menuItem.title}</a>
                  </li>
                );
              })}
            </ul>
            <ul className="navigation__service">
              {myRandstad && (
                <li className="navigation__service-item">
                  <a
                    href={myRandstadBaseUrl + "login/"}
                    className="navigation__service-link navigation__service-my-randstad hidden--from-l">
                    <span className="icon icon--inline">
                      <svg>
                        <use xlinkHref="/themes/custom/bluex/dist/assets/image/icons.svg#person"></use>
                      </svg>
                    </span>
                  </a>
                  <a
                    href={myRandstadBaseUrl + "login/"}
                    className="navigation__service-link navigation__service-my-randstad hidden--until-l">
                    <span className="icon icon--inline">
                      <svg>
                        <use xlinkHref="/themes/custom/bluex/dist/assets/image/icons.svg#person"></use>
                      </svg>
                    </span>
                    <span id="navigation__service-user-text" className="hidden--until-l">
                      {myRandstadLabel}
                    </span>
                  </a>
                </li>
              )}
              <li className="navigation__service-item hidden--from-l">
                <button
                  className="button--icon-only button--hamburger"
                  data-rs-navigation-menu-icon="">
                  <span className="icon icon--hamburger"></span>
                </button>
              </li>
            </ul>
            <div className="navigation__link-bar hidden--until-l">
              <LanguageSwitcher items={languageItems} />
            </div>
            <UtilityNavigation items={utilityMenuItems} />
            <div id="navigationPopup"></div>
          </div>
          <Submenu items={mainMenuItems} />
          <div className="navigation__bottom"></div>
        </div>
      </nav>
      <div className="modal modal--navigation hidden--from-l" data-rs-navigation="true">
        <div className={`modal__dialog ${modalBackground}`}>
          <div className="modal__header" data-rs-navigation-modal-header="true"></div>
          <div className="modal__main" data-rs-navigation-modal-main="true">
            <nav className="navigation-accordion">
              <MobileNavigationList items={mainMenuItems} myRandstadUrl={myRandstadUrl} />
              <LanguageSwitcher items={languageItems} />
            </nav>
          </div>
        </div>
      </div>

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
