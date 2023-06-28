import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TabBar from '../../../components/navigation/TabBar';

const mockItems = [
  {
    title: 'overview',
    url: '/my-randstad/',
    icon: 'dashboard',
    isActive: true,
  },
  {
    title: 'my applications',
    url: '/my-randstad/my-applications/',
    icon: 'briefcase',
    isActive: false,
  },
  {
    title: 'job preferences',
    url: '/my-randstad/job-preferences/',
    icon: 'filter',
    isActive: false,
  },
  {
    title: 'personal information',
    url: '/my-randstad/personal-information/',
    icon: 'account-circle',
    isActive: false,
  },
  {
    title: 'settings',
    url: '/my-randstad/my-account/',
    icon: 'settings',
    isActive: false,
  },
];

const noIconItems = [
  {
    title: 'active applications',
    url: '/#active',
    isActive: true,
  },
  {
    title: 'past applications',
    url: '/#past',
    isActive: false,
  },
];

describe('TabBar', () => {
  it('renders the correct number of items', () => {
    render(<TabBar items={mockItems} />);
    const items = screen.getAllByRole('link', { name: /tab-bar__item/i });
    expect(items).toHaveLength(5);
  });

  it('renders the active item with the "active" class', () => {
    render(<TabBar items={mockItems} />);
    const activeItem = screen.getByRole('link', { name: /overview/i });
    expect(activeItem).toHaveClass('active');
  });

  it('renders the correct item titles', () => {
    render(<TabBar items={mockItems} />);
    const itemTitles = screen.getAllByText(/overview|my applications|job preferences|personal information|settings/i);
    expect(itemTitles).toHaveLength(5);
  });

  it('renders the correct item icons', () => {
    render(<TabBar items={mockItems} />);
    const itemIcons = screen.getAllByRole('img');
    expect(itemIcons).toHaveLength(5);
    expect(itemIcons[0]).toHaveAttribute('src', '/icons/dashboard.svg');
    expect(itemIcons[1]).toHaveAttribute('src', '/icons/briefcase.svg');
    expect(itemIcons[2]).toHaveAttribute('src', '/icons/filter.svg');
    expect(itemIcons[3]).toHaveAttribute('src', '/icons/account-circle.svg');
    expect(itemIcons[4]).toHaveAttribute('src', '/icons/settings.svg');
  });

  it('should render two tabs with no icons', async () => {
    const { container } = render(<TabBar items={noIconItems} />);
    render(<TabBar items={noIconItems} />);
    const tabs = container.querySelectorAll('.tab-bar__item');
    expect(tabs.length).toBe(2);
  });

  it('should change active tab', async () => {
    const { container } = await render(<TabBar items={noIconItems} />);
    const tabs = container.querySelectorAll('.tab-bar__item :not(.active)');
    const inactiveTab = tabs[0];
    fireEvent.click(inactiveTab);
    expect(inactiveTab).toHaveClass('active');
  });
});
