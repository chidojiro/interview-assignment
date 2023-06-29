import React from 'react';
import { render } from '@testing-library/react';
import ServiceLinks from '../../../components/headers/ServiceLinks';

describe('Service Links tests', () => {
  test('Service Links render correctly', () => {
    const { container } = render(<ServiceLinks links={[
      {
        serviceTitle: 'press',
        serviceUrl: '/press',
      },
      {
        serviceTitle: 'contact us',
        serviceUrl: '/contact-us',
      },
    ]}
    />);
    const ServiceLinksElement = container.querySelector('.top-link ');
    expect(ServiceLinksElement)
      .toBeInTheDocument();
  });

  test('Service Links has link with correct href and title', () => {
    const { container } = render(<ServiceLinks links={[
      {
        serviceTitle: 'press',
        serviceUrl: '/press',
      },
    ]}
    />);
    const ServiceLink = container.querySelector('a');

    expect(ServiceLink).toHaveAttribute(
      'href',
      '/press',
    );
    expect(ServiceLink).toHaveTextContent('press');
  });
});
