import React from 'react';
import { render } from '@testing-library/react';
import Favorites from '../../components/headers/Favorites/Favorites';

describe('Favorites component tests', () => {
  test('should render Favorites the className', () => {
    const className = 'favorites__counter';
    const { container } = render(
      <Favorites
      />,
    );

    const iconElement = container.querySelector('#maxCounter');
    expect(iconElement).toHaveClass(className);
    expect(iconElement).toBeInTheDocument();
  });

  test('should render Favorites right url', () => {
    const { container } = render(
      <Favorites favoriteUrl='favoriteUrl' />,
    );

    const iconElement = container.querySelector('.navigation__service-link');
    expect(iconElement).toHaveAttribute('href','favoriteUrl',);
  });

  test('should render Favorites right aria label', () => {
    const { container } = render(
      <Favorites
        favoriteUrl='favoriteUrl'
        ariaLabel='my-favorites'
      />,
    );

    const iconElement = container.querySelector('.navigation__service-link');
    expect(iconElement).toHaveAttribute('aria-label','my-favorites',);
  });

});
