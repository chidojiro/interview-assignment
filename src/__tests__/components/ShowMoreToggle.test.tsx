import React from 'react';
import { render, screen } from '@testing-library/react';
import ShowMoreToggle from '../../components/ShowMoreToggle';

describe('ShowMoreToggle', () => {
  const arrayOfItems = [1, 2, 3, 4, 5];

  it('Tests if component renders the arrayOfItems value inside translation', () => {
    render(
      <ShowMoreToggle
        items={arrayOfItems}
        handleClick={() => (false)}
        isViewAllOpen={false}
        translations={{
          viewAll: `View all ${arrayOfItems.length} items`,
          viewLess: 'Show less',
        }}
      />,
    );

    expect(screen.queryByText(`View all ${arrayOfItems.length} items`)).toBeInTheDocument();
  });

  it('Tests if component translation is correct when all items are already rendered', () => {
    render(
      <ShowMoreToggle
        items={arrayOfItems}
        handleClick={() => (false)}
        isViewAllOpen
        translations={{
          viewAll: `View all ${arrayOfItems.length} items`,
          viewLess: 'Show less',
        }}
      />,
    );

    expect(screen.queryByText('Show less')).toBeInTheDocument();
  });

  it('Tests if items array is empty', () => {
    const { container } = render(
      <ShowMoreToggle
        items={[]}
        handleClick={() => (false)}
        isViewAllOpen
        translations={{
          viewAll: `View all ${arrayOfItems.length} items`,
          viewLess: 'Show less',
        }}
      />,
    );
    const showMoreToggle = container.querySelector('view-more-button');
    expect(showMoreToggle).toBeNull();
  });

  it('Tests if maxItemsShown is used and equals the total items.', () => {
    const { container } = render(
      <ShowMoreToggle
        items={arrayOfItems}
        handleClick={() => (false)}
        isViewAllOpen
        translations={{
          viewAll: `View all ${arrayOfItems.length} items`,
          viewLess: 'Show less',
        }}
        maxItemsShown={5}
      />,
    );

    const showMoreToggle = container.querySelector('view-more-button');
    expect(showMoreToggle).toBeNull();
  });
});
