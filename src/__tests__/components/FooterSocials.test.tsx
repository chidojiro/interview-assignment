import React from 'react';
import { render } from '@testing-library/react';
import FooterSocials from '../../components/footer/FooterSocials';

describe('Footer socials tests', () => {
  test('Footer socials render correctly', () => {
    const { container } = render(<FooterSocials socials={
      [
        {
          url: '/',
          title: 'view our LinkedIn profile',
          icon: 'linkedin-filled-30',
        },
      ]
    }
    />);
    const FooterSocialsElement = container.querySelector('.social__list');
    expect(FooterSocialsElement)
      .toBeInTheDocument();
  });

  test('Social link has correct href and title', () => {
    const { container } = render(<FooterSocials socials={
      [
        {
          url: '/linkedin',
          title: 'view our LinkedIn profile',
          icon: 'linkedin-filled-30',
        },
      ]
    }
    />);
    const SocialLink = container.querySelector('a');

    expect(SocialLink)
      .toHaveAttribute(
        'href',
        '/linkedin',
      );

    expect(SocialLink)
      .toHaveAttribute(
        'title',
        'view our LinkedIn profile',
      );
  });

  test('Footer socials renders multiple social links correctly.', () => {
    const { container } = render(<FooterSocials socials={
      [
        {
          url: '/',
          title: 'view our LinkedIn profile',
          icon: 'linkedin-filled-30',
        },
        {
          url: '/',
          title: 'view our Twitter page',
          icon: 'twitter-filled-30',
        },
        {
          url: '/',
          title: 'view our Facebook page',
          icon: 'facebook-filled-30',
        },
      ]
    }
    />);

    // @ts-ignore
    const FooterSocialComponents = [...container.querySelectorAll('.social__item')];

    expect(FooterSocialComponents.length)
      .toBe(3);
  });
});
