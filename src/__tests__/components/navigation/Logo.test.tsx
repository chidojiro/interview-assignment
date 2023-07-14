import React from 'react';
import { render } from '@testing-library/react';
import Logo from '../../../components/navigation/Logo';

describe('Logo component tests', () => {
  it('Logo renders correctly with its props', () => {
    const { container } = render(
      <Logo homepageUrl="/" />,
    );

    const logoComponent = container.querySelector('.logo');
    const logoLink = container.querySelector('a');

    expect(logoComponent).toBeInTheDocument();
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });
});
