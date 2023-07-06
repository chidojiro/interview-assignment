import React from 'react';
import { render } from '@testing-library/react';
import MainMenu from '../../../components/navigation/MainMenu';

describe('MainMenu component tests', () => {
  const items = [
    {
      isActive: false,
      url: '/home',
      title: 'Home',
      children: [],
    },
    {
      isActive: true,
      url: '/about',
      title: 'About',
      children: [],
    },
    {
      isActive: false,
      url: '/services',
      title: 'Services',
      children: [
        {
          isActive: false,
          url: '/service1',
          title: 'Service 1',
          children: [],
        },
        {
          isActive: false,
          url: '/service2',
          title: 'Service 2',
          children: [],
        },
      ],
    },
  ];

  it('LoMainNavigation renders correctly with its props', () => {
    const { container } = render(
      <MainMenu items={items} />,
    );

    const mainMenuComponent = container.querySelector('.navigation__menu');
    const menuItems = container.querySelectorAll('.navigation__menu-item');

    expect(mainMenuComponent).toBeInTheDocument();
    expect(menuItems.length).toBe(items.length);
  });

  it('renders the menu items correctly', () => {
    const { getByText } = render(<MainMenu items={items} />);

    items.forEach((menuItem) => {
      const menuItemElement = getByText(menuItem.title);
      expect(menuItemElement).toBeInTheDocument();
      expect(menuItemElement).toHaveAttribute('href', menuItem.url);
    });
  });

  it('adds active class to active menu item', () => {
    const itemsWithActiveItem = [
      {
        isActive: false,
        url: '/home',
        title: 'Home',
        children: [],
      },
      {
        isActive: true,
        url: '/about',
        title: 'About',
        children: [],
      },
      {
        isActive: false,
        url: '/services',
        title: 'Services',
        children: [],
      },
    ];

    const { container } = render(<MainMenu items={itemsWithActiveItem} />);

    const activeMenuItemElement = container.querySelector('.navigation__menu-item--active');
    expect(activeMenuItemElement).toHaveTextContent('About');
  });
});
