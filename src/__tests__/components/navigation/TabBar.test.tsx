import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TabBar from '../../../components/navigation/TabBar';

/**
 * Here we are mocking the scrollBy function, because in the orbit's script,
 * there's no check for whether this.element exists and calls directly
 * this.element.scrollBy().
 */
const scrollToActiveMock = jest.fn();
Element.prototype.scrollBy = scrollToActiveMock;

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
    render(<TabBar items={mockItems} languagePrefix="en" />);
    const items = screen.getAllByRole('link');
    expect(items).toHaveLength(5);
  });

  it('renders the active item with the "active" class', () => {
    render(<TabBar items={mockItems} languagePrefix="en" />);
    const activeItem = screen.getByRole('link', { name: /overview/i });
    expect(activeItem).toHaveClass('active');
  });

  it('renders the correct item titles', () => {
    render(<TabBar items={mockItems} languagePrefix="en" />);
    const itemTitles = screen.getAllByText(/overview|my applications|job preferences|personal information|settings/i);
    expect(itemTitles).toHaveLength(5);
  });

  it('renders the correct item icons', () => {
    const { container } = render(<TabBar items={mockItems} languagePrefix="en" />);
    const itemIcons = container.querySelectorAll('.tab-bar svg use');
    expect(itemIcons).toHaveLength(5);
    const xLinkAttribute = 'xlink:href';
    expect(itemIcons[0]).toHaveAttribute(xLinkAttribute, '/img/icons.svg#dashboard');
    expect(itemIcons[1]).toHaveAttribute(xLinkAttribute, '/img/icons.svg#briefcase');
    expect(itemIcons[2]).toHaveAttribute(xLinkAttribute, '/img/icons.svg#filter');
    expect(itemIcons[3]).toHaveAttribute(xLinkAttribute, '/img/icons.svg#account-circle');
    expect(itemIcons[4]).toHaveAttribute(xLinkAttribute, '/img/icons.svg#settings');
  });

  it('should render two tabs with no icons', async () => {
    render(<TabBar items={noIconItems} languagePrefix="en" />);
    const items = screen.getAllByRole('link');
    expect(items).toHaveLength(2);
  });

  it('should change active tab', async () => {
    const { container } = await render(<TabBar items={noIconItems} languagePrefix="en" />);
    const tabs = container.querySelectorAll('.tab-bar__item:not(.active)');
    const inactiveTab = tabs[0];
    fireEvent.click(inactiveTab);
    expect(inactiveTab).toHaveClass('active');
  });
});
