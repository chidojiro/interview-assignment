import React from 'react';
import { render } from '@testing-library/react';
import UtilityNavigation from '../../../components/navigation/Submenu';

describe('UtilityNavigation component tests', () => {
  it('UtilityNavigation renders correctly with its props', () => {
    const utilityMenuItems = [
      {
        title: 'Item 1',
        url: '/item1',
        children: [],
        isActive: false,
      },
      {
        title: 'Item 2',
        url: '/item2',
        children: [],
        isActive: false,
      },
      {
        title: 'Item 3',
        url: '/item3',
        children: [],
        isActive: true,
      },
    ];

    const { container } = render(
      <UtilityNavigation items={utilityMenuItems} />,
    );

    const submenuComponent = container.querySelector('.navigation__menu');
    const menuItems = container.querySelectorAll('.navigation__menu-item');

    expect(submenuComponent).toBeInTheDocument();
    expect(menuItems.length).toBe(utilityMenuItems.length);
  });
});
