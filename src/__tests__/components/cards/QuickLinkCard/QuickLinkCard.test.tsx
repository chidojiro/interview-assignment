import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import QuickLinkCard from '../../../../components/cards/QuickLinkCard';

describe('QuickLinkCard component', () => {
  const defaultProps = {
    title: 'Test Title',
    description: 'Test Description',
    url: 'https://example.com',
    tabIndex: 0,
    onClick: jest.fn(),
    clickAreaAriaLabel: 'make entire card clickable',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with all props', () => {
    const { getByText, getByRole } = render(<QuickLinkCard {...defaultProps} />);

    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
    expect(getByRole('link', { name: 'Test Title' })).toHaveAttribute('href', 'https://example.com');
    expect(getByRole('button', { name: 'make entire card clickable' })).toBeInTheDocument();
  });

  it('handles click event on the clickable area', () => {
    const { getByRole } = render(<QuickLinkCard {...defaultProps} />);

    const clickableArea = getByRole('button', { name: 'make entire card clickable' });
    fireEvent.click(clickableArea);

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('handles keydown event on the clickable area', () => {
    const { getByRole } = render(<QuickLinkCard {...defaultProps} />);

    const clickableArea = getByRole('button', { name: 'make entire card clickable' });
    fireEvent.keyDown(clickableArea, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('renders without description if not provided', () => {
    const { queryByText } = render(<QuickLinkCard {...defaultProps} description={undefined} />);

    expect(queryByText('Test Description')).not.toBeInTheDocument();
  });
});
