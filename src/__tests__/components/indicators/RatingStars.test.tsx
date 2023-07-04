import React from 'react';
import { render, waitFor } from '@testing-library/react';
import RatingStars from '../../../components/indicators/RatingStars';

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

const attr = 'aria-label';

describe('RatingStars component tests', () => {
  test('RatingStars renders correctly with required props', () => {
    const { container } = render(
      <RatingStars
        name="test1"
        stars={items}
        label="Rating"
        error={undefined}
        value=""
        onChange={() => undefined}
      />,
    );

    const ratingStartComponent = container.querySelector('.rating-dynamic');
    const ratingStartComponentFieldset = container.querySelector('.star-rating');
    const ratingStarsContainer = ratingStartComponentFieldset?.firstChild;
    const ratingItems = container.getElementsByTagName('label');

    expect(ratingStartComponent).toBeInTheDocument();
    expect(ratingStartComponentFieldset).toBeInTheDocument();
    expect(ratingStarsContainer).toBeInTheDocument();

    expect(ratingItems[0]).toBeInTheDocument();
    expect(ratingItems[0]).toHaveAttribute(attr, items[0].id);
    expect(ratingItems[1]).toBeInTheDocument();
    expect(ratingItems[1]).toHaveAttribute(attr, items[1].id);
    expect(ratingItems[2]).toBeInTheDocument();
    expect(ratingItems[2]).toHaveAttribute(attr, items[2].id);
    expect(ratingItems[3]).toBeInTheDocument();
    expect(ratingItems[3]).toHaveAttribute(attr, items[3].id);
    expect(ratingItems[4]).toBeInTheDocument();
    expect(ratingItems[4]).toHaveAttribute(attr, items[4].id);
  });

  test('RatingStars renders correctly with value', async () => {
    const { container } = render(
      <RatingStars
        name="test2"
        stars={items}
        label="Rating"
        error={undefined}
        value="Intermediate"
      />,
    );
    const ratingStarsElement = container.querySelector('.rating-dynamic');
    await waitFor(() => expect(ratingStarsElement).toBeInTheDocument());
    const radioInput = document.querySelector('input[type=radio]:checked') as HTMLInputElement;
    await waitFor(() => expect(radioInput).toBeInTheDocument());
    await waitFor(() => expect(radioInput?.value).toEqual('Intermediate'));

    const ratingItemsInputs = container.getElementsByTagName('input');
    expect(ratingItemsInputs[0]).not.toHaveAttribute('checked');
    expect(ratingItemsInputs[1]).not.toHaveAttribute('checked');
    expect(ratingItemsInputs[2]).toHaveAttribute('checked');
    expect(ratingItemsInputs[3]).not.toHaveAttribute('checked');
    expect(ratingItemsInputs[4]).not.toHaveAttribute('checked');
  });
});
