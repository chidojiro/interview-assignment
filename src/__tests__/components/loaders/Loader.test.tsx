// loader.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../../../components/loaders/Loader';

// Define reusable test data
const COLORS = ['brand-primary', 'brand-secondary', 'gray-20'];

describe('Loader Component', () => {
  test.each(COLORS)('renders with color "%s"', (color) => {
    const { container } = render(<Loader color={color} />);
    const loaderWrapper = container.querySelector('.loader__wrapper');
    const loader = container.querySelector('.loader');

    // Assert that the component renders with the specified color
    expect(loaderWrapper).toBeInTheDocument();
    expect(loader).toBeInTheDocument();
    expect(loaderWrapper).toHaveClass('loader__wrapper');
    expect(loaderWrapper).toHaveClass(`loader__wrapper--${color}`);
  });

  test('renders without color', () => {
    const { container } = render(<Loader />);

    // Assert that the component renders without a specified color
    const loaderWrapper = container.querySelector('.loader__wrapper');
    const loader = container.querySelector('.loader');
    expect(loaderWrapper).toBeInTheDocument();
    expect(loader).toBeInTheDocument();
    expect(loaderWrapper).toHaveClass('loader__wrapper');
    expect(loaderWrapper).not.toHaveClass('loader__wrapper--brand-primary');
    expect(loaderWrapper).not.toHaveClass('loader__wrapper--brand-secondary');
    expect(loaderWrapper).not.toHaveClass('loader__wrapper--gray-20');
  });

  test('renders with custom className', () => {
    const { container } = render(<Loader className="mx-xl my-xl" />);

    const loaderWrapper = container.querySelector('.loader__wrapper');
    expect(loaderWrapper).toBeInTheDocument();
    expect(loaderWrapper).toHaveClass('mx-xl my-xl');
  });
});
