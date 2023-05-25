import React from 'react';
import { render } from '@testing-library/react';
import Header, { HeaderProps } from '../../components/Header';
import HeaderBrandsEnum from '../../components/Header/headerBrands.enum';

jest.mock('../../components/LoginPopover', () => jest.fn().mockImplementation(() => <div className="mockedLoginPopover" />));

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
    },
  },
  submenuLinks: {
    en: {
      main: [
        {
          id: 'item',
          title: 'menu item',
          url: '/menu-item',
          icon: 'menuIcon',
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
  currentUrl: '/',
};

const renderHeader = (props: HeaderProps) => render(<Header {...props} />);

describe('Header', () => {
  test('current url exists in the menu as the first level menu item', () => {
    const { container } = renderHeader({ ...defaultProps, ...{ currentUrl: '/parent-menu-url/' } });
    expect(container.querySelector('.navigation__menu--sub .navigation__menu-item')).toBeTruthy();
    expect(container.querySelector('.navigation__menu--main > .navigation__menu-item--active')).toBeTruthy();
  });

  test('current url exists in the menu as the second level menu item', () => {
    const { container } = renderHeader({ ...defaultProps, ...{ currentUrl: '/sub-menu-url/' } });
    expect(container.querySelector('.navigation__menu--sub > .navigation__menu-item--active')).toBeTruthy();
  });

  test('current url not exist in the menu', () => {
    const { container } = renderHeader(defaultProps);
    expect(container.querySelector('.navigation__menu--sub .navigation__menu-item')).toBeFalsy();
  });
});
