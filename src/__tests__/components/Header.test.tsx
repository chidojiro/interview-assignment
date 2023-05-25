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
  currentUrl: '/current-url/',
  popoverTranslations: {
    myRandstadTitle: 'myRnd title',
    greeting: 'myRnd greeting',
    registerText: 'myRnd register msg',
    loginText: 'myRnd login',
    logoutText: 'myRnd logout',
    heading1: 'myRnd heading1',
    heading2: 'myRnd heading2',
    listText1: 'myRnd list1',
    listText2: 'myRnd list2',
    listText3: 'myRnd list3',
  },
};

const renderHeader = (props: HeaderProps) => render(<Header {...props} />);

describe('Header', () => {
  test('should display proper sub-menu children', () => {
    const { container } = renderHeader({ ...defaultProps, ...{ currentUrl: '/parent-menu-url/' } });
    expect(container.querySelector('.navigation__menu--sub .navigation__menu-item')).toBeTruthy();
    expect(container.querySelector('.navigation__menu--main > .navigation__menu-item--active')).toBeTruthy();
  });

  test('should not display sub-menu children', () => {
    const { container } = renderHeader(defaultProps);
    expect(container.querySelector('.navigation__menu--sub .navigation__menu-item')).toBeFalsy();
  });

  test('should display My Randstad submenu', () => {
    const { container } = renderHeader({ ...defaultProps, ...{ isMyRandstad: true } });
    const link = container.querySelector('.navigation__menu--sub .navigation__menu-item a');
    expect(link).toHaveTextContent('my-rand-menu-title');
  });
});
