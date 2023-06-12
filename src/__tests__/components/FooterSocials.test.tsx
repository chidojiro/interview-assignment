import React from 'react';
import { render } from '@testing-library/react';
import FooterSocials from '../../components/footer/FooterSocials';

const mockedSocial = [
  {
    url: '/linkedin',
    title: 'view our LinkedIn profile',
    icon: 'linkedin-filled-30',
  },
];

describe('Footer social', () => {
  test('should render', () => {
    const { container } = render(<FooterSocials items={mockedSocial} />);

    expect(container.querySelector('.social__list')).toBeTruthy();
  });

  test('link has correct href and title', () => {
    const { container } = render(<FooterSocials items={mockedSocial} />);
    const socialLink = container.querySelector('a');

    expect(socialLink).toHaveAttribute('href', '/linkedin');
    expect(socialLink).toHaveAttribute('title', 'view our LinkedIn profile');
  });

  test('should render multiple social links', () => {
    const socialItems = [
      {
        url: '/',
        title: 'view our Twitter page',
        icon: 'twitter-filled-30',
      },
      {
        url: '/',
        title: 'view our Facebook page',
        icon: 'twitter-filled-30',
      },
    ];
    const { container } = render(<FooterSocials items={mockedSocial.concat(socialItems)} />);

    expect(container.querySelectorAll('.social__item').length).toBe(3);
  });
});
