import React from 'react';
import { render } from '@testing-library/react';
import Rating from '../../components/Rating';

describe('Rating', () => {
  const ratingProps = {
    description: 'Advanced label text',
    level: 4,
    size: 'l',
  };

  it('Renders the Rating component correctly', () => {
    const { container } = render(<Rating {...ratingProps} />);
    const ratingComponent = container.querySelector('.rating__wrapper');
    expect(ratingComponent).toBeInTheDocument();
  });

  it('Renders description field with text "Advanced label text"', () => {
    const { container } = render(<Rating {...ratingProps} />);

    const descriptionElement = container.querySelector('.rating-readonly__description');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent('Advanced label text');
  });

  it('Renders the stars with 80% fill to match the skill level', () => {
    const { container } = render(<Rating {...ratingProps} />);

    const iconElement = container.querySelector('.icon--filled');
    expect(iconElement).toHaveStyle('width: 80%');
  });
});
