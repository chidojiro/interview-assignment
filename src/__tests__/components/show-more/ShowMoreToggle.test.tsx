import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShowMoreToggle from '../../../components/show-more/ShowMoreToggle';

const translations = {
  viewAll: 'View All',
  viewLess: 'View Less',
};

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

describe('ShowMoreToggle', () => {
  it('should render nothing if there are no items', () => {
    const { container } = render(
      <ShowMoreToggle
        items={[]}
        handleClick={() => {}}
        translations={translations}
        isViewAllOpen={false}
      />,
    );

    expect(container.firstChild).toBeNull();
  });

  it('should render nothing if the number of items is less than or equal to the maxItemsShown prop', () => {
    const { container } = render(
      <ShowMoreToggle
        items={['Item 1', 'Item 2']}
        handleClick={() => {}}
        translations={translations}
        isViewAllOpen={false}
      />,
    );

    expect(container.firstChild).toBeNull();
  });

  it('should render the "View All" link when isViewAllOpen is false', () => {
    const handleClick = jest.fn();

    const { getByLabelText } = render(
      <ShowMoreToggle
        items={items}
        handleClick={handleClick}
        translations={translations}
        isViewAllOpen={false}
      />,
    );

    const viewAllLink = getByLabelText('View All');
    expect(viewAllLink.textContent).toEqual('View All');
  });

  it('should render the "View Less" link when isViewAllOpen is true', () => {
    const handleClick = jest.fn();

    const { getByLabelText } = render(
      <ShowMoreToggle
        items={items}
        handleClick={handleClick}
        translations={translations}
        isViewAllOpen
      />,
    );

    const viewLessLink = getByLabelText('View All');
    expect(viewLessLink.textContent).toEqual('View Less');
  });

  it('should call the handleClick function when the link is clicked', () => {
    const handleClick = jest.fn();

    const { getByLabelText } = render(
      <ShowMoreToggle
        items={items}
        handleClick={handleClick}
        translations={translations}
        isViewAllOpen={false}
      />,
    );

    const viewAllLink = getByLabelText('View All');
    fireEvent.click(viewAllLink);
    expect(handleClick).toHaveBeenCalled();
  });
});
