import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Routes } from '../../../utils/headerUtils/headerUtils.types';
import { PersistData } from '../../../utils/getUserData/types';
import { SubmenuItems } from '../../navigation/Submenu/Submenu.types';
import { BgColor } from '../../../utils/getBackground/getBackground.types';
import { Items } from '../../navigation/navigation.types';
import { MenuItems } from '../../navigation/UtilityNavigation/UtilityNavigation.types';
import Logo from '../../navigation/Logo';
import MainMenu from '../../navigation/MainMenu';
import UtilityNavigation from '../../navigation/UtilityNavigation';
import LanguageSwitcher from '../../navigation/LanguageSwitcher';
import Submenu from '../../navigation/Submenu';
import NavigationModal from '../../overlays/NavigationModal';
import MobileNavigation from '../../navigation/MobileNavigation';
import TabBar from '../../navigation/TabBar';
import Breadcrumbs from '../Breadcrumbs';
import MyRandstad from '../../navigation/MyRandstad';
import {
  getMainMenu, findElement, getHeaderClass, generateUrl,
} from '../../../utils/headerUtils/headerUtils';
import LoginPopover from '../LoginPopover';
import getUserData from '../../../utils/getUserData';
import HeaderSavedJobs from '../HeaderSavedJobs';
import useUserData from '../../../hooks/useUserData';
import { HeaderProps, Menu } from './Header.types';
import { gtmScriptInitializer } from '../../../utils';

function Header({
  brand,
  isMyRandstad,
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
  gtmSettings,
  theme,
}: HeaderProps) {
  // TO DO: currentUser.loginState state needed because tabBar needs an active link on logout
  const [currentUser, setCurrentUser] = useState({} as PersistData);
  const [access, setAccess] = useState('');
  const profileData = useUserData();
  useEffect(() => {
    const newUserData = getUserData();
    const { personalInfo: newPersonalInfo } = newUserData.currentUser || {};
    const { personalInfo: currentUserPersonalInfo } = currentUser.currentUser || {};

    if (currentUser.loginStatus !== newUserData.loginStatus
        || newPersonalInfo?.familyName !== currentUserPersonalInfo?.familyName
        || newPersonalInfo?.preferredName !== currentUserPersonalInfo?.preferredName
        || newPersonalInfo?.givenName !== currentUserPersonalInfo?.givenName) {
      setCurrentUser(newUserData);
    }

    // Find the currentRoute's access, in order for us to figure out which header to show.
    // We have a backup based on the loginStatus, as we won't always have access for the route through all the apps.
    if (submenuLinks && localization.locale && currentUrl) {
      setAccess(submenuLinks[localization.locale]?.clientRoutes.find((f: Routes) => f.url === currentUrl)?.access ?? '');
    }
  }, [profileData]);

  const isLoginEnabled = submenuLinks !== null && Object.keys(submenuLinks).length > 0;
  useEffect(() => {
    if (gtmSettings) {
      gtmScriptInitializer(
        window,
        document,
        'script',
        'dataLayer',
        gtmSettings,
        localization.locale || '',
        isLoginEnabled,
      );
    }
    // Ensure we initialize gtm once.
    // eslint-disable-next-line
  }, []);

  /**
   * Return an isActive prop to the menu item whenever current URL are equal.
   *
   * @param {SubmenuItems | Routes} item
   *  Menu item.
   *
   * @return {Object}
   *  Menu item, or menu item with isActive prop.
   *
   */
  const getActiveMenuItem = (item: SubmenuItems | Routes) => {
    if (item.url !== currentUrl) return item;
    return {
      ...item,
      isActive: true,
    };
  };

  const { locale, defaultLocale } = localization;
  const headerClass = getHeaderClass(brand);

  let homepageUrl = `/${locale}/`;
  let languagePrefix = `/${locale}`;
  let subMenu = null;
  let subMenuItems = [];
  let tabBarMenu = [];
  let utilityMenuItems: MenuItems[] = [];
  let dashboard = null;
  let myRandstadLabel = null;

  let savedJobsUrl = '';
  let myRandstadLogoutUrl = '';
  let myRandstadBaseUrl = '';

  let menuLinks: Menu = {};

  if (locale === defaultLocale) {
    homepageUrl = '/';
    languagePrefix = '';
  }

  // Update My Randstad and Saved Jobs components with data from the submenuLinks
  if (submenuLinks) {
    dashboard = findElement(submenuLinks[locale as string], 'id', 'dashboard');
    // Get tabBar menu the submenuLinks main.menu
    tabBarMenu = (submenuLinks as Routes)[locale as string].main;

    // Generate proper URLs.
    savedJobsUrl = generateUrl(languagePrefix, locale as string, 'saved-jobs', submenuLinks);
    myRandstadLogoutUrl = generateUrl(languagePrefix, locale as string, 'logout', submenuLinks);
    myRandstadBaseUrl = generateUrl(languagePrefix, locale as string, 'dashboard', submenuLinks);
  }

  // Use translation for the 'my randstad' button title, if available.
  if (popoverTranslations?.myRandstadTitle) {
    myRandstadLabel = popoverTranslations.myRandstadTitle;
  }

  // Get (ordered) languages from the s3 file and filter these with routes.
  if ((routes as Routes)?.[locale as string]) {
    menuLinks = (routes as Routes)[locale as string];
  }

  // Set utility menu from the menuLinks if available.
  if (menuLinks && menuLinks?.utility) {
    utilityMenuItems = menuLinks.utility;
  }

  const baseUrl = dashboard?.url ?? '';

  const mainMenuItems = getMainMenu(menuLinks, baseUrl, currentUrl as string);

  // Do not display MyRandstad in the mobile navigation without submenuLinks.
  const showMyRandstad = !!submenuLinks;

  // Display separate second menu for the My Randstad.
  if (isMyRandstad) {
    subMenuItems = (submenuLinks as Routes)?.[locale as string].secondary;
    if (access ? access === 'private' : currentUser.loginStatus) {
      tabBarMenu = tabBarMenu.map(getActiveMenuItem);
    }
  } else {
    // Filter active menu item from the list of the Main menu.
    // Filter method returns a new array with a single element, we need an element data.
    const subMenuObject = mainMenuItems.filter((menuItem: Items) => menuItem.isActive)[0];
    // If menu item has a not empty children array, get them for further output.
    if (subMenuObject?.children?.length) {
      subMenuItems = subMenuObject.children;
    }
  }

  // Set as an active element whenever the subMenu item URL is equal to the page route.
  // Whenever no sub-menu items are available, set the variable to null,
  // to prevent empty list rendering in the Submenu component.
  if (subMenuItems.length > 0) {
    subMenu = subMenuItems.map(getActiveMenuItem);
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
            'my-environment': isMyRandstad && (access ? access === 'private' || (access === 'public' && currentUser.loginStatus) : currentUser.loginStatus),
          })}
          role="navigation"
          id="block-main-navigation"
        >
          <div className="wrapper navigation__wrapper">
            <div className="navigation__top">
              <Logo homepageUrl={homepageUrl} theme={theme} />
              <MainMenu items={mainMenuItems} />
              <ul className="navigation__service navigation__service--minimal">
                {submenuLinks && savedJobsEnabled && (
                  <HeaderSavedJobs
                    gdsApiKey={savedJobsEnabled.gdsApiKey}
                    gdsApiUrl={savedJobsEnabled.gdsApiUrl}
                    shareIdTokenAcrossSubdomains={savedJobsEnabled.shareIdTokenAcrossSubdomains}
                    buttonUrl={savedJobsUrl}
                    ariaLabel={savedJobsEnabled.ariaLabel}
                  />
                )}
                {submenuLinks && (
                  <MyRandstad
                    label={myRandstadLabel}
                    show={showMyRandstad}
                    isAuth={currentUser.loginStatus}
                    userName={currentUser.currentUser?.personalInfo}
                  />
                )}
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
              { submenuLinks && (
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
              )}
            </div>
            { !isMyRandstad && subMenu && (
              <Submenu items={subMenu} />
            )}
            {/* If we are in my randstad environment and the access is public, we will show the subMenu if we not logged in.
                This actually handles the saved-jobs page in my randstad. */
            }
            { (isMyRandstad && (access ? (access === 'public' && !currentUser.loginStatus) || access === 'anonymous' : !currentUser.loginStatus)) && (
              <Submenu items={subMenu} RouterComponent={RouterComponent} languagePrefix={languagePrefix} />
            )}
          </div>
          {breadcrumbs?.breadcrumbsItems && breadcrumbs?.breadcrumbsMobileItem
            && (
              <div className="navigation__bottom pb-none">
                <Breadcrumbs
                  bgColor={brand as BgColor['bgColor']}
                  items={breadcrumbs.breadcrumbsItems}
                  mobileItem={breadcrumbs.breadcrumbsMobileItem}
                />
              </div>
            )}
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
      {/* If we are in my randstad environment and the access is public, we will show the tabBar if we logged in.
        This actually handles the saved-jobs page in my randstad. */}
      { (isMyRandstad && (access ? access === 'private' || (access === 'public' && currentUser.loginStatus) : currentUser.loginStatus)) && (
        <div className="block bg-greyscale--grey-10 my-environment__sub-menu">
          <div className="wrapper">
            <TabBar languagePrefix={languagePrefix} items={tabBarMenu} currentUrl={currentUrl} RouterComponent={RouterComponent} />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
