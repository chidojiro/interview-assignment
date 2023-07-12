import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TagCheckbox from '../../../components/tags/TagCheckbox';

describe('TagCheckbox', () => {
  const handleChangeMock = jest.fn();

  beforeEach(() => {
    handleChangeMock.mockClear();
  });

  it('renders the checkbox correctly', () => {
    const { container } = render(
      <TagCheckbox label="example" value="exampleValue" className="exampleClass" handleChange={handleChangeMock} />,
    );

    const checkbox = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(false);
  });

  it('expects to fire an event on click', () => {
    const { container } = render(
      <TagCheckbox label="example" value="exampleValue" className="exampleClass" handleChange={handleChangeMock} />,
    );

    const checkbox = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
    expect(checkbox).toBeInTheDocument();
    fireEvent.click(checkbox);
    expect(handleChangeMock).toHaveBeenCalledTimes(1);
  });

  it('expects to return the checkbox.checked as true once clicked', () => {
    const { container } = render(
      <TagCheckbox label="example" value="exampleValue" className="exampleClass" handleChange={handleChangeMock} />,
    );

    const checkbox = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
    expect(checkbox).toBeInTheDocument();
    fireEvent.click(checkbox);
    expect(handleChangeMock).toHaveBeenCalledTimes(1);
    expect(checkbox.checked).toBe(true);
  });
});
