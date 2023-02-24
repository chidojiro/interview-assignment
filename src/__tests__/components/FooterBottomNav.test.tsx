import React from 'react';
import { render, screen } from '@testing-library/react';
import FooterBottomNav from '../../components/footer/FooterBottomNav';

describe('FooterBottomNav component', () => {
  const items = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About Us',
      url: '/about',
    },
    {
      title: 'Contact Us',
      url: '/contact',
    },
  ];
  render(<FooterBottomNav items={items} />);

  const links = screen.getAllByRole('link');

  it('Should have the full length of items', () => {
    expect(links).toHaveLength(items.length);
  });

  it('Should have href attribute and render the item title', () => {
    items.forEach((item, i) => {
      expect(links[i].getAttribute('href')).toBe(item.url);
      expect(links[i].textContent).toBe(item.title);
    });
  });
});
