import React from 'react';
import { render } from '@testing-library/react';
import PagePreloader from '../../components/loaders/PagePreloader';

describe('PagePreload component tests', () => {
  test('PagePreloader renders correctly', () => {
    const { container } = render(<PagePreloader />);
    const pagePreloader = container.querySelector('.block__content.block__content--xs.block__content--align-right');

    expect(pagePreloader)
      .toBeInTheDocument();
  });
});
