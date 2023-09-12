import React from 'react';
import { render } from '@testing-library/react';
import { HeaderProps } from 'src/components/headers/Header/Header.types';
import { LoginPopoverPropTypes } from '../../../components/headers/LoginPopover/LoginPopover.types';
import { MyRandstadProps } from '../../../components/navigation/MyRandstad/MyRandstad.types';
import { TabBarProps } from '../../../components/navigation/TabBar/TabBar.types';
import { LogoProps } from '../../../components/navigation/Logo/Logo.types';
import { UtilityNavigationProps } from '../../../components/navigation/UtilityNavigation/UtilityNavigation.types';
import Header from '../../../components/headers/Header';
import HeaderBrandsEnum from '../../../components/headers/Header/headerBrands.enum';
import * as utils from '../../../utils';

const mockGtmScriptInit = jest.spyOn(utils, 'gtmScriptInitializer');

jest.mock(
  '../../../components/navigation/Logo',
  () => function Logo({ homepageUrl }: LogoProps) {
    return (
      <div data-testid="logo-url">{homepageUrl}</div>
    );
  },
);
jest.mock(
  '../../../components/headers/LoginPopover',
  () => function LoginPopover({ translations }: LoginPopoverPropTypes) {
    return (
      <div data-testid="login-popover">
        <span data-testid="login-popover-title">{ translations?.myRandstadTitle }</span>
      </div>
    );
  },
);

jest.mock(
  '../../../components/headers/HeaderSavedJobs',
  () => jest.fn().mockImplementation(() => <div data-testid="saved-jobs" />),
);

jest.mock(
  '../../../components/navigation/MyRandstad',
  () => function MyRandstad({ label }: MyRandstadProps) {
    return (
      <div data-testid="my-randstad">
        <span data-testid="mrnd-label">{label}</span>
      </div>
    );
  },
);

jest.mock(
  '../../../components/navigation/UtilityNavigation',
  () => function UtilityNavigation({ items }: UtilityNavigationProps) {
    if (!items || !items.length) {
      return null;
    }

    return (
      <div data-testid="utility-navigation">
        {items?.map((menuItem) => (
          <li key={menuItem.title}>{menuItem.title}</li>
        ))}
      </div>
    );
  },
);

jest.mock(
  '../../../components/navigation/TabBar',
  () => function TabBar({ items }: TabBarProps) {
    return (
      <div data-testid="tab-bar">
        {items.map((item) => (
          <span
            key={item.title}
            className={`${item.isActive ? 'active' : ''}`}
            data-testid="tab-bar-item"
          >
            {item.title}
          </span>
        ))}
      </div>
    );
  },
);

const defaultProps = {
  brand: HeaderBrandsEnum.DarkBlue,
  isMyRandstad: false,
  routes: {
    en: {
      main: [
        {
          title: 'main menu item',
          url: '/parent-menu-url/',
          children: [
            {
              title: 'submenu item',
              url: '/sub-menu-url/',
            },
          ],
        },
        {
          title: 'second menu menu item',
          url: '/second-menu-url/',
          children: [
            {
              title: 'second submenu item',
              url: '/second-sub-menu-url/',
            },
          ],
        },
      ],
      utility: [
        {
          title: 'utility item',
          url: '/utility/url',
          children: [],
        },
        {
          title: 'utility item 1',
          url: '/utility/another-url',
          children: [],
        },
      ],
    },
  },
  submenuLinks: {
    en: {
      main: [
        {
          id: 'item',
          title: 'sub menu item',
          url: '/menu-item',
          icon: 'menuIcon',
          children: [],
        },
        {
          id: 'dashboard',
          title: 'my randstad',
          url: '/my-randstad/',
          icon: 'rand_icon',
          children: [],
        },
      ],
      popup: [
        {
          id: 'popup',
          title: 'popup',
          url: '/popup-url/',
        },
      ],
      secondary: [
        {
          id: 'my-rand-menu-id',
          title: 'my-rand-menu-title',
          url: '/my-rand-menu-url/',
        },
      ],
    },
  },
  localization: {
    locales: ['en', 'fr'],
    locale: 'en',
    defaultLocale: 'en',
  },
  popoverTranslations: {
    myRandstadTitle: 'myRandstadTitle',
    greeting: 'greeting',
    registerText: 'registerText',
    loginText: 'loginText',
    logoutText: 'logoutText',
    heading1: 'heading1',
    heading2: 'heading2',
    listText1: 'listText1',
    listText2: 'listText2',
    listText3: 'listText3',
  },
  currentUrl: '/',
};

const renderHeader = (props: HeaderProps) => render(<Header {...props} />);

describe('Header', () => {
  describe('Logo', () => {
    it('should contain the url without localization', () => {
      const { getByTestId } = renderHeader(defaultProps);
      expect(getByTestId('logo-url')).toHaveTextContent('/');
    });

    it('should contain the url with localization', () => {
      const { getByTestId } = renderHeader({ ...defaultProps, ...{ localization: { locales: ['en', 'fr'], locale: 'en', defaultLocale: 'fr' } } });
      expect(getByTestId('logo-url')).toHaveTextContent('/en/');
    });
  });

  describe('Utility navigation', () => {
    it('should be rendered along with the top menu', () => {
      const { getAllByText } = renderHeader(defaultProps);
      expect(getAllByText(/^utility item/)).toHaveLength(2);
    });

    it('should not be rendered if top menu data is not provided', () => {
      const { queryAllByText } = renderHeader({ ...defaultProps, ...{ routes: {} } });
      expect(queryAllByText(/^utility item/)).toHaveLength(0);
    });
  });

  describe('First level menu', () => {
    test('should render menu item as active', () => {
      const { getByText } = renderHeader({ ...defaultProps, ...{ currentUrl: '/parent-menu-url/' } });

      expect(getByText('main menu item', { selector: '.navigation__menu-item a' }).parentElement).toHaveClass('navigation__menu-item--active');
    });
  });

  describe('Second level menu', () => {
    it('should render menu item as active', () => {
      const { getByText } = renderHeader({ ...defaultProps, ...{ currentUrl: '/sub-menu-url/' } });

      expect(getByText('submenu item', { selector: '.navigation__menu-item' })).toHaveClass('navigation__menu-item--active');
    });

    it('should render My randstad menu as second level menu', () => {
      const { getByText } = renderHeader({ ...defaultProps, ...{ isMyRandstad: true } });
      expect(getByText('my-rand-menu-title')).toBeInTheDocument();
    });
  });

  describe('Saved Jobs', () => {
    it('should be rendered', () => {
      const savedJobs = {
        gdsApiKey: 'gdsApiKey',
        gdsApiUrl: 'gdsApiUrl',
        shareIdTokenAcrossSubdomains: false,
        ariaLabel: 'ariaLabel',
      };

      const { getByTestId } = renderHeader({ ...defaultProps, savedJobsEnabled: { ...savedJobs } });
      expect(getByTestId('saved-jobs')).toBeInTheDocument();
    });

    it('should not be rendered if submenuLinks not provided', () => {
      const { queryByTestId } = renderHeader({ ...defaultProps, ...{ submenuLinks: null } });
      expect(queryByTestId('saved-jobs')).toBeNull();
    });
  });

  describe('My Randstad', () => {
    it('should be rendered for the anonymous users', () => {
      const { getByTestId } = renderHeader(defaultProps);
      expect(getByTestId('my-randstad')).toBeInTheDocument();
    });

    it('should not be rendered if submenuLinks not provided', () => {
      const { queryByTestId } = renderHeader({ ...defaultProps, ...{ submenuLinks: null } });
      expect(queryByTestId('my-randstad')).toBeNull();
    });

    it('should display label from translations myRandstadTitle', () => {
      const { getByTestId } = renderHeader(defaultProps);
      expect(getByTestId('mrnd-label')).toHaveTextContent('myRandstadTitle');
    });

    it('should not display label from translations myRandstadTitle', () => {
      defaultProps.popoverTranslations.myRandstadTitle = '';
      const { getByTestId } = renderHeader(defaultProps);
      expect(getByTestId('mrnd-label')).not.toHaveTextContent('myRandstadTitle');
    });

    it('should render TabBar menu with active element', () => {
      // Create a mock for localStorage
      const localStorageMock = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
        length: 0,
        key: jest.fn(),
      };

      // Replace the actual localStorage with the mock implementation
      Object.defineProperty(window, 'localStorage', {
        value: localStorageMock,
      });

      localStorageMock.getItem.mockReturnValue(JSON.stringify({
        currentUser: {
          personalInfo: {
            familyName: 'User family name',
            givenName: 'User given name',
          },
        },
        loginStatus: true,
      }));

      const { getByText, rerender } = renderHeader({ ...{ ...defaultProps, ...{ currentUrl: '/menu-item', isMyRandstad: true } } });

      expect(getByText('sub menu item', { selector: 'span' })).toBeInTheDocument();
      expect(getByText('sub menu item', { selector: 'span' })).toHaveClass('active');

      rerender(<Header {...{ ...defaultProps, ...{ currentUrl: '/url', isMyRandstad: true } }} />);

      expect(getByText('sub menu item', { selector: 'span' })).not.toHaveClass('active');

      // Restore the original localStorage
      Object.defineProperty(window, 'localStorage', {
        value: window.localStorage,
        writable: true,
      });
    });
  });

  describe('Breadcrumbs', () => {
    it('should not be rendered if not provided', () => {
      const { queryByText } = renderHeader(defaultProps);
      expect(queryByText('breadcrumb title')).toBeNull();
    });

    it('should be rendered after navigation', () => {
      const breadcrumbsObj = {
        breadcrumbsItems: [
          { title: 'home', link: '/' },
          { title: 'breadcrumb title', link: '/breadcrumb-url/', active: true },
        ],
        breadcrumbsMobileItem: { title: 'home', link: '/' },
      };

      const { getByText } = renderHeader({ ...defaultProps, breadcrumbs: { ...breadcrumbsObj } });

      expect(getByText('breadcrumb title')).toBeInTheDocument();
    });
  });

  describe('GTM', () => {
    it('should not add script tag if gtmID not provided', () => {
      renderHeader(defaultProps);
      expect(mockGtmScriptInit).not.toHaveBeenCalled();
    });

    it('should add GTM script', () => {
      const gtmId = 'GTM-ID';
      const coreEvent = {};
      renderHeader({ ...defaultProps, ...{ gtmId } });
      expect(mockGtmScriptInit).toHaveBeenCalledWith(window, document, 'script', 'dataLayer', gtmId, coreEvent);
    });
  });

  describe('CoreEvent', () => {
    it('should add Core event dataLayer', () => {
      const gtmId = 'GTM-ID';
      const coreEventId = {
        user: {
          account_id: 'test_id'
        },
        page: {
          type: 'test_type'
        }
      };
      renderHeader({ ...defaultProps, ...{ gtmId }, ...{ coreEventId } });
      expect(mockGtmScriptInit).toHaveBeenCalledWith(window, document, 'script', 'dataLayer', gtmId, coreEventId);
    });
  });
});
