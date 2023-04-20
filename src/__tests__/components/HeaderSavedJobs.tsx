import React from 'react';
import { render } from '@testing-library/react';
import HeaderSavedJobs from '../../components/headers/HeaderSavedJobs/HeaderSavedJobs';

describe('Saved Jobs component tests', () => {
  test('should render Saved Jobs the className', () => {
    const className = 'favorites__counter';
    const { container } = render(<HeaderSavedJobs gdsApiKey="" gdsApiUrl="" buttonUrl="" ariaLabel="" />);

    const iconElement = container.querySelector('#maxCounter');
    expect(iconElement).toHaveClass(className);
    expect(iconElement).toBeInTheDocument();
  });

  test('should render Saved Jobs right url', () => {
    const { container } = render(<HeaderSavedJobs gdsApiKey="" gdsApiUrl="" buttonUrl="savedUrl" ariaLabel="" />);

    const iconElement = container.querySelector('.navigation__service-link');
    expect(iconElement).toHaveAttribute('href', 'savedUrl');
  });

  test('should render Saved Jobs right aria label', () => {
    const { container } = render(<HeaderSavedJobs gdsApiKey="" gdsApiUrl="" buttonUrl="savedUrl" ariaLabel="my-saved" />);

    const iconElement = container.querySelector('.navigation__service-link');
    expect(iconElement).toHaveAttribute('aria-label', 'my-saved');
  });
});
