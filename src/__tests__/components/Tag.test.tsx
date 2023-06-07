import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tag from '../../components/Tag/Tag';

describe('Tag component tests', () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  test('renders the tag with default variant and size and has required class when clicked on', () => {
    const { getByText, getByLabelText } = render(
      <Tag id="tag1" title="Tag 1" onClick={mockOnClick} />,
    );

    const tag = getByLabelText('remove');
    const tagText = getByText('Tag 1');

    expect(tag.parentElement).toHaveClass('tag--primary-7');
    expect(tag.parentElement).toHaveClass('tag--remove');
    expect(tagText).toBeInTheDocument();

    fireEvent.click(tag);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(tag.parentElement).toHaveClass('hide-tag');
  });

  test('renders the tag with secondary variant and small size', () => {
    const { getByLabelText } = render(
      <Tag id="tag2" title="Tag 2" onClick={mockOnClick} variant="secondary" size="small" />,
    );

    const tag = getByLabelText('remove');

    expect(tag.parentElement).toHaveClass('tag--secondary');
    expect(tag.parentElement).toHaveClass('tag--remove');
    expect(tag.parentElement).toHaveClass('tag--s');
  });
});
