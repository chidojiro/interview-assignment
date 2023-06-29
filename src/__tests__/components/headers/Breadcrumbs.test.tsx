import React from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrumbs from '../../../components/headers/Breadcrumbs';
import { BreadcrumbsProps } from '../../../components/headers/Breadcrumbs/Breadcrumbs.types';

describe('Breadcrumbs', () => {
  const mockItems = [
    { title: 'Home', link: '/home' },
    { title: 'About us', link: '/about-us' },
    { title: 'Active link', link: '/active-link', active: true },
  ];

  const mockMobileItem = {
    title: 'Mobile',
    link: '/mobile',
  };

  const renderComponent = (props: BreadcrumbsProps) => {
    render(<Breadcrumbs {...props} />);
  };

  it('renders breadcrumbs with items', () => {
    renderComponent({ items: mockItems, bgColor: 'secondary' });

    mockItems.forEach((item) => {
      const linkElement = screen.getByText(item.title);
      expect(linkElement).toBeInTheDocument();
    });
  });

  it('renders breadcrumbs with mobile item', () => {
    renderComponent({ mobileItem: mockMobileItem, bgColor: 'primary' });

    const linkElement = screen.getByText(mockMobileItem.title);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.tagName).toBe('A');
    expect(linkElement).toHaveAttribute('href', mockMobileItem.link);
  });

  it('renders breadcrumbs with active item', () => {
    renderComponent({ items: mockItems, bgColor: 'secondary' });

    const activeItem = mockItems.find((item) => item.active);
    const activeLinkElement = screen.getByText(activeItem?.title ?? 'Undefined title');
    expect(activeLinkElement).toBeInTheDocument();
    expect(activeLinkElement.tagName).toBe('LI');
  });

  it('renders breadcrumbs with app class', () => {
    renderComponent({ items: mockItems, app: true, bgColor: 'primary' });

    const navigationElement = screen.getByRole('navigation');
    expect(navigationElement).toHaveClass('breadcrumb');
    expect(navigationElement.closest('.navigation--app')).toBeInTheDocument();
  });

  it('renders breadcrumbs without app class', () => {
    renderComponent({ items: mockItems, app: false, bgColor: 'secondary' });

    const navigationElement = screen.getByRole('navigation');
    expect(navigationElement).toHaveClass('breadcrumb');
    expect(navigationElement.closest('.navigation--app')).not.toBeInTheDocument();
  });

  it('renders breadcrumbs with custom background color', () => {
    renderComponent({ items: mockItems, bgColor: 'secondary' });

    const navigationElement = screen.getByRole('navigation');
    const wrapperElement = navigationElement.closest('.bg-variant-brand-secondary');
    expect(wrapperElement).toHaveClass('bg-variant-brand-secondary');
  });
});
