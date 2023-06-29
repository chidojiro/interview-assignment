import React from 'react';
import { render, waitFor } from '@testing-library/react';
import RatingStars from '../../components/forms/RatingStars';

const items = [
  {
    id: 'Fundamental awareness',
    name: 'Fundamental awareness',
  },
  {
    id: 'Novice',
    name: 'Novice',
  },
  {
    id: 'Intermediate',
    name: 'Intermediate',
  },
  {
    id: 'Advanced',
    name: 'Advanced',
  },
  {
    id: 'Expert',
    name: 'Expert',
  },
];

describe('RatingStars component tests', () => {
  test('RatingStars renders correctly with required props', () => {
    const { container } = render(
      <RatingStars
        name="test1"
        stars={items}
        label="Rating"
        error={undefined}
        value=""
        onChange={() => { console.log('changed'); }}
      />,
    );
    const ratingStarsElement = container.querySelector('rating-dynamic');
    waitFor(() => expect(ratingStarsElement).toBeInTheDocument());
  });

  test('RatingStars renders correctly with value', () => {
    const { container } = render(
      <RatingStars
        name="test2"
        stars={items}
        label="Rating"
        error={undefined}
        value="Intermediate"
      />,
    );
    const ratingStarsElement = container.querySelector('rating-dynamic');
    waitFor(() => expect(ratingStarsElement).toBeInTheDocument());
    const radioInput = document.querySelector('input[type=radio]:checked') as HTMLInputElement;
    waitFor(() => expect(radioInput).toBeInTheDocument());
    waitFor(() => expect(radioInput?.value).toEqual('Intermediate'));
  });
});
