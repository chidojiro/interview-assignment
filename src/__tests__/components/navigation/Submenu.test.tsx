import React from 'react';
import { render } from '@testing-library/react';
import Submenu from '../../../components/navigation/Submenu';

describe('Submenu component tests', () => {
  it('Submenu renders correctly with its props', () => {
    const submenuItems = [
      {
        id: 'login',
        title: 'login',
        url: '/my-randstad/login',
        children: [],
        isActive: false,
      },
      {
        id: 'register',
        title: 'register',
        url: '/my-randstad/register',
        children: [],
        isActive: false,
      },
      {
        id: 'forgot-password',
        title: 'forgot password',
        url: '/my-randstad/forgot-password',
        children: [],
        isActive: true,
      },
    ];

    const { container } = render(
      <Submenu items={submenuItems} />,
    );

    const submenuComponent = container.querySelector('.navigation__menu');
    const menuItems = container.querySelectorAll('.navigation__menu-item');

    expect(submenuComponent).toBeInTheDocument();
    expect(menuItems.length).toBe(submenuItems.length);
  });
});
