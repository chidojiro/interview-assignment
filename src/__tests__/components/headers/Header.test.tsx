import React from 'react';
import { render } from '@testing-library/react';
import { HeaderProps } from 'src/components/headers/Header/Header.types';
import { TabBarProps } from '../../../components/navigation/TabBar/TabBar.types';
import Header from '../../../components/headers/Header';
import HeaderBrandsEnum from '../../../components/headers/Header/headerBrands.enum';
import * as utils from '../../../utils';

const mockGtmScriptInit = jest.spyOn(utils, 'gtmScriptInitializer');

jest.mock(
  '../../../components/navigation/TabBar',
  () => function TabBar({ items }: TabBarProps) {
    return (
      <div data-testid="tab-bar">
        {items.map((item) => (
          <a
            key={item.title}
            href={item.url}
            className={`tab-bar__item ${item.isActive ? 'active' : ''}`}
            data-testid="tab-bar-item"
          >
            {item.title}
          </a>
        ))}
      </div>
    );
  },
);

const myRandstad = 'my randstad';

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
          title: myRandstad,
          url: '/my-randstad/',
          icon: 'rand_icon',
          children: [],
        },
      ],
      popup: [
        {
          id: 'register',
          title: 'register',
          url: '/register-url/',
          children: [],
        },
        {
          id: 'login',
          title: 'login',
          url: '/login-url/',
          children: [],
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
    registerText: 'register',
    loginText: 'login',
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
      const { getByText } = renderHeader(defaultProps);
      expect(getByText('randstad', { selector: 'title' }).closest('a')).toHaveAttribute('href', '/');
    });

    it('should contain the url with localization', () => {
      const { getByText } = renderHeader({ ...defaultProps, ...{ localization: { locales: ['en', 'fr'], locale: 'en', defaultLocale: 'fr' } } });
      expect(getByText('randstad', { selector: 'title' }).closest('a')).toHaveAttribute('href', '/en/');
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
    it('should render menu item as active', () => {
      const { getByText } = renderHeader({ ...defaultProps, ...{ currentUrl: '/parent-menu-url/' } });

      expect(getByText('main menu item', { selector: '.navigation__menu-item a' }).parentElement).toHaveClass('navigation__menu-item--active');
    });
  });

  describe('Second level menu', () => {
    it('should render menu item as active', () => {
      const { getAllByText } = renderHeader({ ...defaultProps, ...{ currentUrl: '/sub-menu-url/' } });

      const submenuItems = getAllByText('submenu item', { selector: '.navigation__menu-item a' }).map((subItem) => subItem.parentElement);
      const activeItem = submenuItems.filter((submenuItem) => submenuItem?.classList.contains('navigation__menu-item--active'));
      expect(activeItem[0]).toBeInTheDocument();
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
        ariaLabel: 'saved-jobs',
      };

      const { getByLabelText } = renderHeader({ ...defaultProps, savedJobsEnabled: { ...savedJobs } });
      expect(getByLabelText('saved-jobs')).toBeInTheDocument();
    });

    it('should not be rendered if submenuLinks not provided', () => {
      const { queryByLabelText } = renderHeader({ ...defaultProps, ...{ submenuLinks: null } });
      expect(queryByLabelText('saved-jobs')).toBeNull();
    });
  });

  describe('My Randstad', () => {
    it('should be rendered for the anonymous users', () => {
      const { getByText } = renderHeader(defaultProps);
      expect(getByText(myRandstad)).toBeInTheDocument();
    });

    it('should not be rendered if submenuLinks not provided', () => {
      const { queryByText } = renderHeader({ ...defaultProps, ...{ submenuLinks: null } });
      expect(queryByText(myRandstad)).toBeNull();
    });

    it('should not be a part of mobile menu when subMenu not provided', () => {
      const { queryByText } = renderHeader({ ...defaultProps, ...{ submenuLinks: null } });
      expect(queryByText(myRandstad, { selector: 'a' })).toBeNull();
    });

    it('should display label from translations myRandstadTitle', () => {
      const { getByText } = renderHeader(defaultProps);
      expect(getByText('myRandstadTitle', { selector: 'span' })).toBeInTheDocument();
    });

    it('should display default label when myRandstadTitle not provided', () => {
      defaultProps.popoverTranslations.myRandstadTitle = '';
      const { getByText } = renderHeader(defaultProps);
      expect(getByText(myRandstad, { selector: 'span' })).toBeInTheDocument();
    });

    it('should render TabBar menu with items', () => {
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
          loginStatus: true,
        },
      }));

      const { getByText } = renderHeader({ ...{ ...defaultProps, ...{ currentUrl: '/menu-item', isMyRandstad: true } } });

      expect(getByText('sub menu item')).toBeInTheDocument();

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
    it('should not add script tag if gtm object is not provided', () => {
      renderHeader(defaultProps);
      expect(mockGtmScriptInit).not.toHaveBeenCalled();
    });

    it('should add GTM script if my randstad is enabled', () => {
      const gtmSettings = {
        id: 'GTM-ID',
        type: 'page-type',
        country: 'foo',
      };
      renderHeader({ ...defaultProps, gtmSettings });
      expect(mockGtmScriptInit).toHaveBeenCalledWith(window, document, 'script', 'dataLayer', gtmSettings, 'en', true);
    });

    it('should add GTM script if my randstad is disabled', () => {
      const gtmSettings = {
        id: 'GTM-ID',
        type: 'page-type',
        country: 'bar',
      };
      renderHeader({ ...defaultProps, submenuLinks: null, gtmSettings });
      expect(mockGtmScriptInit).toHaveBeenCalledWith(window, document, 'script', 'dataLayer', gtmSettings, 'en', false);
    });
  });
});
