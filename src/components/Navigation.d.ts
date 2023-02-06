import React from 'react';
import { LanguageSwitcherProps } from './navigation/LanguageSwitcher';
import { MobileNavigationProps } from './navigation/MobileNavigation';
import { UtilityNavigationProps } from './navigation/UtilityNavigation';
import { LogoProps } from './navigation/Logo';
import { MyRandstadProps } from './navigation/MyRandstad';
import { Items, Theme } from './navigation/types';
interface Navigation extends Theme {
  classes?: React.ComponentPropsWithoutRef<'header'>;
  config: {
    /** Text displayed on top for a11y */
    navigationHeadingText?: string;
    homepageUrl: LogoProps['homepageUrl'];
  };
  mainMenu: Items[];
  showMyRandstad?: MyRandstadProps['show'];
  languages: LanguageSwitcherProps['items'];
  utilityMenu?: UtilityNavigationProps['items'];
  myRandstad: Omit<MyRandstadProps, 'show'> & {
    baseUrl?: MobileNavigationProps['myRandstadUrl'];
  };
  afterLinks?: React.ReactNode;
}
/**
 * The top-level navigation of the website and shown on each page. See [here](https://randstad.design/components/core/navigation/)
 *
 */
declare const Navigation: ({
  classes,
  mainMenu,
  showMyRandstad,
  languages,
  utilityMenu,
  theme,
  myRandstad,
  config,
  afterLinks,
}: Navigation) => JSX.Element;
export default Navigation;
