import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Section from '../../../../components/my-environment/Section';

describe('Section', () => {
  const mockHandleEdit = jest.fn();
  const mockHandleAddItem = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders section title correctly', () => {
    const title = 'My Section Title A';
    const { getByText } = render(<Section title={title} id="section1" />);
    expect(getByText(title)).toBeInTheDocument();
  });

  it('renders section description correctly', () => {
    const title = 'My Section Title B';
    const description = 'This is a section description.';
    const { getByText } = render(<Section title={title} description={description} id="section2" />);
    expect(getByText(description)).toBeInTheDocument();
  });

  it('calls handleEdit when edit button is clicked', () => {
    const handleEditLabel = 'Edit Section';
    const title = 'My Section Title C';
    const { getByRole } = render(
      <Section title={title} handleEdit={mockHandleEdit} label={handleEditLabel} id="section3" />,
    );
    const editButton = getByRole('button', { name: handleEditLabel });
    fireEvent.click(editButton);
    expect(mockHandleEdit).toHaveBeenCalledTimes(1);
  });

  it('calls handleAddItem when add item button is clicked', () => {
    const addItemLabel = 'Add Item';
    const title = 'My Section Title';
    const { getByText } = render(
      <Section title={title} handleAddItem={mockHandleAddItem} label={addItemLabel} id="section4" />,
    );
    const addButton = getByText(addItemLabel);
    fireEvent.click(addButton);
    expect(mockHandleAddItem).toHaveBeenCalledTimes(1);
  });

  it('renders with divider class when divider prop is true', () => {
    const title = 'My Section Title';
    const { container } = render(<Section title={title} divider id="section5" />);
    expect(container.firstChild).toHaveClass('divider');
  });

  it('renders without divider class when divider prop is false', () => {
    const title = 'My Section Title';
    const { container } = render(<Section title={title} divider={false} id="section6" />);
    expect(container.firstChild).not.toHaveClass('divider');
  });
});
