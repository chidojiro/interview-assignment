import React from 'react';
import { render } from '@testing-library/react';
import Footer, { FooterProps } from '../../components/footer/Footer';

jest.mock('../../components/footer/FooterColumnNav', () => function FooterColumnNav() {
  return <div data-testid="footer-columns-nav" />;
});

jest.mock('../../components/footer/FooterBottomNav', () => function FooterBottomNav() {
  return <div data-testid="footer-bottom-nav" />;
});

jest.mock('../../components/footer/FooterSocials', () => function FooterSocials() {
  return <div data-testid="footer-social" />;
});

jest.mock('../../components/footer/FooterCopyright', () => function FooterSocials() {
  return <div data-testid="footer-copyright" />;
});

const mockedProps: FooterProps = {
  footerColumnNavLinks: [
    {
      title: 'column1',
      url: '/url/',
      children: [
        {
          title: 'column1 children title',
          url: '/',
          children: [
            {
              title: 'child item title',
              url: '/child-url/',
              children: [],
            },
          ],
        },
      ],
    },
  ],
  socialNavLinks: [
    {
      icon: 'icon-filled-30',
      title: 'social item first title',
      url: '/social-item/',
    },
    {
      icon: 'icon-filled-30',
      title: 'social item second title',
      url: '/social-item/',
    },
  ],
  bottomNavLinks: [
    {
      title: 'first bottom link',
      url: '/',
    },
    {
      title: 'second bottom link',
      url: '/',
    },
  ],
  copyright: 'test copyright',
};

describe('Footer', () => {
  test('components should be rendered', () => {
    const { getByTestId } = render(<Footer {...mockedProps} />);
    expect(getByTestId('footer-columns-nav')).toBeTruthy();
    expect(getByTestId('footer-bottom-nav')).toBeTruthy();
    expect(getByTestId('footer-social')).toBeTruthy();
    expect(getByTestId('footer-copyright')).toBeTruthy();
  });

  test('components should not be rendered', () => {
    const emptyData: FooterProps = {
      footerColumnNavLinks: [],
      socialNavLinks: [],
      bottomNavLinks: [],
      copyright: '',
    };

    const { container } = render(<Footer {...{ ...mockedProps, ...emptyData }} />);

    expect(container.querySelector('.footer__column')).toBeFalsy();
    expect(container.querySelector('.footer__bottom-nav')).toBeFalsy();
    expect(container.querySelector('.social__list')).toBeFalsy();
    expect(container.querySelector('.footer__info')).toBeFalsy();
  });

  test('should use passed className', () => {
    const { container } = render(<Footer {...{ ...mockedProps, ...{ className: 'custom-class' } }} />);
    expect(container.querySelector('.footer')?.classList).toContain('custom-class');
  });

  test('footer component render null', () => {
    const emptyData: FooterProps = {
      footerColumnNavLinks: [],
      socialNavLinks: null,
      bottomNavLinks: null,
      copyright: '',
    };

    const { container } = render(<Footer {...{ ...mockedProps, ...emptyData }} />);

    expect(container.firstChild).toBeNull();
  });
});
