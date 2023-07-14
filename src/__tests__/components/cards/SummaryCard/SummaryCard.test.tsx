import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SummaryCard from '../../../../components/cards/SummaryCard';

describe('SummaryCard', () => {
  test('renders the component with count', () => {
    const { getByText } = render(
      <SummaryCard
        title="My Card"
        message="Items"
        count={5}
        tabIndex={0}
        emptyMessage="No items"
      />,
    );

    const titleElement = getByText('My Card');
    expect(titleElement).toBeInTheDocument();

    const countElement = getByText('5');
    expect(countElement).toBeInTheDocument();

    const emptyMessageElement = getByText('Items');
    expect(emptyMessageElement).toBeInTheDocument();
  });

  test('renders the component with starts', () => {
    const {
      getByText, queryByText, getAllByText,
    } = render(
      <SummaryCard
        title="My Card"
        tabIndex={0}
        message="Items"
        emptyMessage="No Items"
        stars
        count={1}
      />,
    );

    const titleElement = getByText('My Card');
    expect(titleElement).toBeInTheDocument();

    const countElement = queryByText('0');
    expect(countElement).toBeNull();

    const emptyMessageElement = getAllByText('Items');
    expect(emptyMessageElement[1]).toBeInTheDocument();
  });

  test('calls the onClick handler when the card is clicked', () => {
    const handleClick = jest.fn();

    const { getByLabelText } = render(
      <SummaryCard
        title="My Card"
        emptyMessage="No items"
        count={5}
        onClick={handleClick}
        tabIndex={0}
      />,
    );

    const clickAreaElement = getByLabelText('make entire card clickable');
    fireEvent.click(clickAreaElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders the component without message', () => {
    const { getByText, getAllByText } = render(
      <SummaryCard
        title="My Card"
        emptyMessage="No items"
        message={undefined}
        count={0}
        tabIndex={0}
      />,
    );

    const titleElement = getByText('My Card');
    expect(titleElement).toBeInTheDocument();

    const emptyMessageElements = getAllByText('No items');
    expect(emptyMessageElements[0]).toBeInTheDocument();
  });
});
