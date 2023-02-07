import React from 'react';
import { render } from '@testing-library/react';
import Breadcrumbs from '../../components/headers/Breadcrumbs/Breadcrumbs';

describe('Breadcrumbs tests', () => {
  test('Breadcrumbs render correctly', () => {
    const { container } = render(<Breadcrumbs breadcrumbs={[
      {
        breadcrumbTitle: 'home',
        breadcrumbUrl: '/',
      },
      { breadcrumbTitle: 'contact us' },
    ]}
    />);
    const BreadcrumbsElement = container.querySelector('.breadcrumb');
    expect(BreadcrumbsElement).toBeInTheDocument();
  });

  test('The last breadcrumb has "li" tag', () => {
    const { container } = render(<Breadcrumbs breadcrumbs={[
      {
        breadcrumbTitle: 'home',
        breadcrumbUrl: '/',
      },
      { breadcrumbTitle: 'contact us' },
    ]}
    />);
    const BreadcrumbsElement = container.querySelectorAll('li.breadcrumb__item')[1];
    expect(BreadcrumbsElement).toHaveTextContent('contact us');
  });

  test('Not last breadcrumbs have "a" tag', () => {
    const { container } = render(<Breadcrumbs breadcrumbs={[
      {
        breadcrumbTitle: 'home',
        breadcrumbUrl: '/',
      },
      { breadcrumbTitle: 'contact us' },
    ]}
    />);
    const BreadcrumbsElement = container.querySelector('.breadcrumb__item a');
    expect(BreadcrumbsElement).toHaveAttribute(
      'href',
      '/',
    );
  });
});
