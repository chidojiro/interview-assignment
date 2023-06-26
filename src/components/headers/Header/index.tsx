import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { BgColor } from '../../../utils/getBackground';
import { Items } from '../../navigation/types';
import Logo from '../../navigation/Logo';
import MainMenu from '../../navigation/MainMenu';
import UtilityNavigation from '../../navigation/UtilityNavigation';
import LanguageSwitcher from '../../navigation/LanguageSwitcher';
import Submenu, { SubmenuItems } from '../../navigation/Submenu';
import NavigationModal from '../../navigation/NavigationModal';
import MobileNavigation from '../../navigation/MobileNavigation';
import TabBar from '../../navigation/TabBar';
import Breadcrumbs from '../Breadcrumbs';
import MyRandstad from '../../MyRandstad';
import {
  getMainMenu, findElement, Routes, getHeaderClass, generateUrl,
} from '../../../utils/headerUtils';
import LoginPopover from '../LoginPopover';
import getUserData, { PersistData } from '../../../utils/getUserData';
import HeaderSavedJobs from '../HeaderSavedJobs';
import useUserData from '../../../hooks/useUserData';
import { HeaderProps, Menu } from './Header.types';

function Header({
  brand,
  isMyRandstad = false,
  submenuLinks,
  savedJobsEnabled,
  routes,
  localization,
  popoverTranslations,
  currentUrl,
  RouterComponent,
  breadcrumbs,
  currentRoute,
  languageSwitcherItems,
  useToast = false,
  toastSettings,
}: HeaderProps) {
  // TO DO: currentUser.loginState state needed because tabBar needs an active link on logout
  const [currentUser, setCurrentUser] = useState({} as PersistData);
  const profileData = useUserData();

  useEffect(() => {
    const newUserData = getUserData();
    const { personalInfo: newPersonalInfo } = newUserData.currentUser || {};
    const { personalInfo: currentUserPersonalInfo } = currentUser.currentUser || {};

    if (currentUser.loginStatus !== newUserData.loginStatus
      || newPersonalInfo?.familyName !== currentUserPersonalInfo?.familyName
      || newPersonalInfo?.givenName !== currentUserPersonalInfo?.givenName) {
      setCurrentUser(newUserData);
    }
  }, [profileData]);

  const { locale, defaultLocale } = localization;
  const headerClass = getHeaderClass(brand);

  const homepageUrl = locale === defaultLocale ? '/' : `/${locale}/`;
  const languagePrefix = locale === defaultLocale ? '' : `/${locale}`;

  const savedJobsUrl = generateUrl(languagePrefix, locale as string, 'saved-jobs', submenuLinks);
  const myRandstadLogoutUrl = generateUrl(languagePrefix, locale as string, 'logout', submenuLinks);
  const myRandstadBaseUrl = generateUrl(languagePrefix, locale as string, 'dashboard', submenuLinks);

  const dashboard = findElement(submenuLinks[locale as string], 'id', 'dashboard');
  const myRandstadLabel = popoverTranslations && popoverTranslations.myRandstadTitle ? popoverTranslations.myRandstadTitle : '';
  const baseUrl = dashboard && dashboard.url ? dashboard.url : '';

  // Get (ordered) languages from the s3 file and filter these with routes.
  let menuLinks: Menu = {};
  if (routes && (routes as Routes)[locale as string]) {
    menuLinks = (routes as Routes)[locale as string];
  }
  const mainMenuItems = getMainMenu(menuLinks, baseUrl, currentUrl as string);
  const utilityMenuItems = menuLinks && menuLinks?.utility ? menuLinks.utility : [];
  const showMyRandstad = true;

  let subMenuItems = [];

  // Display separate second menu for the My Randstad.
  if (isMyRandstad) {
    subMenuItems = (submenuLinks as Routes)[locale as string].secondary;
  } else {
    // Filter active menu item from the list of the Main menu.
    // Filter method returns a new array with a single element, we need an element data.
    const subMenuObject = mainMenuItems.filter((menuItem: Items) => menuItem.isActive)[0];
    // If menu item has a not empty children array, get them for further output.
    if (subMenuObject?.children?.length) {
      subMenuItems = subMenuObject.children;
    }
  }

  // Set as active element whenever url matched route.
  const subMenu = subMenuItems?.map((item: SubmenuItems) => {
    if (item.url !== currentUrl) return item;
    return {
      ...item,
      isActive: true,
    };
  });

  let tabBarMenu = (submenuLinks as Routes)[locale as string].main;
  if (currentUser.loginStatus && isMyRandstad) {
    tabBarMenu = tabBarMenu.map((item: Routes) => {
      if (item.url !== currentUrl) return item;
      return {
        ...item,
        isActive: true,
      };
    });
  }

  return (
    <>
      <header
        className={classNames('header', {
          'my-randstad-logged-in': currentUser.loginStatus,
        }, headerClass)}
      >
        <nav
          className={classNames('navigation', {
            'my-environment': currentUser.loginStatus && isMyRandstad,
          })}
          role="navigation"
          id="block-main-navigation"
        >
          <div className="wrapper navigation__wrapper">
            <div className="navigation__top">
              <Logo homepageUrl={homepageUrl} />
              <MainMenu items={mainMenuItems} />
              <ul className="navigation__service navigation__service--minimal">
                {savedJobsEnabled ? (
                  <HeaderSavedJobs
                    gdsApiKey={savedJobsEnabled.gdsApiKey}
                    gdsApiUrl={savedJobsEnabled.gdsApiUrl}
                    buttonUrl={savedJobsUrl}
                    ariaLabel={savedJobsEnabled.ariaLabel}
                  />
                ) : null}
                <MyRandstad
                  label={myRandstadLabel}
                  show={showMyRandstad}
                  isAuth={currentUser.loginStatus}
                  userName={currentUser.currentUser?.personalInfo}
                />
                <li className="navigation__service-item hidden--from-l">
                  <button
                    type="button"
                    className="button--icon-only button--hamburger"
                    data-rs-navigation-menu-icon=""
                    data-rs-navigation-menu-labels=""
                    aria-label="open menu"
                  >
                    <span className="icon icon--hamburger" />
                  </button>
                </li>
              </ul>
              <div className="navigation__link-bar flex hidden--until-l">
                <UtilityNavigation items={utilityMenuItems} />
                <LanguageSwitcher items={languageSwitcherItems || []} extraClasses="l:ml-s" useToast={useToast} toastSettings={toastSettings} />
              </div>
              <div id="navigationPopup">
                <LoginPopover
                  isAuth={currentUser.loginStatus}
                  links={submenuLinks}
                  locale={locale}
                  languagePrefix={languagePrefix}
                  translations={popoverTranslations}
                  userName={currentUser.currentUser?.personalInfo}
                  logoutUrl={myRandstadLogoutUrl}
                  RouterComponent={RouterComponent}
                  currentRoute={currentRoute}
                />
              </div>
            </div>
            { !isMyRandstad
              ? (
                <Submenu items={subMenu} />
              ) : null}
            { isMyRandstad && !currentUser.loginStatus ? (
              <Submenu items={subMenu} RouterComponent={RouterComponent} />
            )
              : null}
          </div>
          {breadcrumbs?.breadcrumbsItems && breadcrumbs?.breadcrumbsMobileItem
            ? (
              <div className="navigation__bottom pb-none">
                <Breadcrumbs
                  bgColor={brand as BgColor['bgColor']}
                  items={breadcrumbs.breadcrumbsItems}
                  mobileItem={breadcrumbs.breadcrumbsMobileItem}
                />
              </div>
            ) : null }
        </nav>
        <NavigationModal>
          <nav className="navigation-accordion">
            <MobileNavigation
              items={mainMenuItems}
              myRandstadUrl={myRandstadBaseUrl}
              showMyRandstad={showMyRandstad}
              myRandstadLabel={myRandstadLabel}
              myRandstadMenu={tabBarMenu}
              languagePrefix={languagePrefix}
            />
            <LanguageSwitcher items={languageSwitcherItems || []} useToast={useToast} toastSettings={toastSettings} />
          </nav>
        </NavigationModal>
      </header>
      { isMyRandstad && currentUser.loginStatus ? (
        <div className="block bg-greyscale--grey-10 my-environment__sub-menu">
          <div className="wrapper">
            <TabBar items={tabBarMenu} currentUrl={currentUrl} RouterComponent={RouterComponent} />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Header;
