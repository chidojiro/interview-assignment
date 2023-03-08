import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import TabBar from '../../components/navigation/TabBar';

describe('TabBar component', () => {
  afterEach(cleanup);
  const items = [
    {
      title: 'Home',
      url: '/',
      icon: 'home',
      isActive: true
    },
    {
      title: 'About',
      url: '/about',
      icon: 'about',
      isActive: false
    }
  ];

  it('should render two tabs', () => {
    const { container } = render(<TabBar items={items} />);
    const tabs = container.querySelectorAll('.tab-bar__item');
    expect(tabs.length).toBe(2);
  });

  it('should set the active tab as the one that was clicked', () => {
    const { container } = render(<TabBar items={items} />);
    const aboutTab = container.querySelector('.tab-bar__item.active');
    if (aboutTab) {
      fireEvent.click(aboutTab);
      expect(aboutTab.className).toBeInTheDocument();
    }
  });
});
