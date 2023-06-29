import React from 'react';
import { render } from '@testing-library/react';
import LayoutPreloader from '../../components/loaders/LayoutPreloader';

describe('LayoutPreloader component tests', () => {
  test('LayoutPreloader renders correctly', () => {
    const { container } = render(<LayoutPreloader image={<img className="test-image" />} />);
    const layoutPreloader = container.querySelector('.page-preloader');
    const image = layoutPreloader?.querySelector('img.test-image');

    expect(layoutPreloader)
      .toBeInTheDocument();
    expect(image)
      .toBeInTheDocument();
  });
});
