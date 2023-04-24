import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { BgColor } from '../../utils/getBackground';
import Logo from '../navigation/Logo';
import MainMenu from '../navigation/MainMenu';
import UtilityNavigation from '../navigation/UtilityNavigation';
import LanguageSwitcher from '../navigation/LanguageSwitcher';
import Submenu from '../navigation/Submenu';
import NavigationModal from '../navigation/NavigationModal';
import MobileNavigation from '../navigation/MobileNavigation';
import TabBar from '../navigation/TabBar';
import Breadcrumbs from '../Breadcrumbs';
import MyRandstad from '../MyRandstad';
import {
  getMainMenu, findElement, LocalizationTypes, Routes, getHeaderClass,
} from './headerUtils';
import LoginPopover, { TranslationProps } from '../LoginPopover';
import getUserData from '../../utils/getUserData';
import HeaderBrandsEnum from './headerBrands.enum';
import HeaderSavedJobs from '../headers/HeaderSavedJobs/HeaderSavedJobs';

type HeaderBrands =
  | HeaderBrandsEnum.Primary
  | HeaderBrandsEnum.Quaternary
  | HeaderBrandsEnum.Quinary
  | HeaderBrandsEnum.Senary
  | HeaderBrandsEnum.Tertiary
  | HeaderBrandsEnum.DarkBlue
  | HeaderBrandsEnum.Blue
  | HeaderBrandsEnum.Turquoise
  | HeaderBrandsEnum.Red
  | HeaderBrandsEnum.Yellow
  | HeaderBrandsEnum.OffWhite
  | HeaderBrandsEnum.White;

type BreadcrumbsItems = {
  title: string;
  link: string;
  isActive?: boolean | undefined;
};

type BreadcrumbsType = {
  breadcrumbsItems: BreadcrumbsItems[];
  breadcrumbsMobileItem: BreadcrumbsItems;
};

type BreadcrumbsUndefinedType = {
  breadcrumbsItems?: undefined;
  breadcrumbsMobileItem?: undefined;
};

type LanguageSwitcherItems = {
  language: string,
  isActive?: boolean,
  url?: string
};

interface HeaderProps {
  brand: HeaderBrands;
  isMyRandstad: boolean;
  routes: Routes;
  submenuLinks: Routes;
  localization: LocalizationTypes;
  savedJobsEnabled?: {
    gdsApiKey: string, gdsApiUrl: string, ariaLabel: string,
  }
  popoverTranslations?: TranslationProps;
  currentUrl: string | undefined;
  RouterComponent?: React.FC<any>;
  breadcrumbs?: BreadcrumbsType | BreadcrumbsUndefinedType;
  currentRoute?: string | undefined;
  languageSwitcherItems?: LanguageSwitcherItems[];
  useToast?: boolean;
  toastSettings?: {
    id: string;
    title: Record<string, string>;
    buttonSuccessText: Record<string, string>;
    buttonCloseText: Record<string, string>;
  };
}

type Menu = {
  main?: [];
  utility?: [];
}

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
  toastSettings
}: HeaderProps) {
  const userData = getUserData();
  // TO DO: currentUser.loginState state is needed because tabBar needs an active link on logout
  const [currentUser, setCurrentUser] = useState(userData);

  useEffect(() => {
    const newUserData = getUserData();
    if (currentUser.loginStatus !== newUserData.loginStatus) setCurrentUser(newUserData);
  }, [localStorage.getItem('persist:root')]);

  const { locale, defaultLocale } = localization;
  const headerClass = getHeaderClass(brand);

  const homepageUrl = locale === defaultLocale ? '/' : `/${locale}/`;
  const languagePrefix = locale === defaultLocale ? '' : `/${locale}`;
  const dashboard = findElement(submenuLinks[locale as string], 'id', 'dashboard');
  const savedJobs = findElement(submenuLinks[locale as string], 'id', 'saved-jobs');
  const myRandstadLabel = popoverTranslations && popoverTranslations.myRandstadTitle ? popoverTranslations.myRandstadTitle : '';
  const baseUrl = dashboard && dashboard.url ? dashboard.url : '';
  const myRandstadBaseUrl = (languagePrefix + baseUrl)
    .replace(/^\/\/?/, '/');

  // Get (ordered) languages from the s3 file and filter these with routes.
  let menuLinks: Menu  = {}
  if (routes && (routes as Routes)[locale as string]) {
    menuLinks = (routes as Routes)[locale as string];
  }
  const mainMenuItems = getMainMenu(menuLinks, baseUrl, currentUrl as string);
  const utilityMenuItems = menuLinks && menuLinks?.utility ? menuLinks.utility : [];

  const logout = findElement(submenuLinks[locale as string], 'id', 'logout');
  const myRandstadLogoutUrl = logout && logout.url ? `${languagePrefix}${logout.url}` : '';
  const showMyRandstad = true;

  let subMenu = isMyRandstad ? (submenuLinks as Routes)[locale as string].secondary : routes?.[locale as string]?.main?.[0]?.children;
  subMenu = subMenu?.map((item: Routes) => {
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
                    buttonUrl={savedJobs?.url || ''}
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
                <LoginPopover isAuth={currentUser.loginStatus} links={submenuLinks} locale={locale} languagePrefix={languagePrefix} translations={popoverTranslations} userName={currentUser.currentUser?.personalInfo} logoutUrl={myRandstadLogoutUrl} RouterComponent={RouterComponent} currentRoute={currentRoute} />
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
            <LanguageSwitcher items={languageSwitcherItems || []} />
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
