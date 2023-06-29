import React from 'react';
import { render, waitFor } from '@testing-library/react';
import InputField from '../../components/forms/InputField';

describe('InputField component tests', () => {
  test('InputField renders correctly with required props', () => {
    const { container } = render(<InputField name="testInput" />);
    const inputElement = container.querySelector('input[type="testInput"]');
    waitFor(() => expect(inputElement).toBeInTheDocument());
  });

  test('InputField renders correctly with type email', () => {
    const { container } = render(<InputField name="emailInput" type="email" />);
    const inputElement = container.querySelector('input[type="email"]');
    waitFor(() => expect(inputElement).toBeInTheDocument());
  });

  test('InputField renders correctly with type number', () => {
    const { container } = render(<InputField name="emailInput" type="number" />);
    const inputElement = container.querySelector('input[type="number"]');
    waitFor(() => expect(inputElement).toBeInTheDocument());
  });

  test('InputField renders correctly with a placeholder', () => {
    const { container } = render(<InputField name="placeholder" type="text" placeholder="TestPlaceholder" />);
    const inputElement = container.querySelector('input[type="placeholder"]');
    waitFor(() => expect(inputElement).toHaveAttribute('placeholder', 'TestPlaceholder'));
  });

  test.only('InputField renders correctly with a value', () => {
    const { container } = render(<InputField name="testValue" type="text" value="InputTestValue" onChange={ () => {} } />);
    const inputElement = container.querySelector('input[name="testValue"]');
    waitFor(() => expect(inputElement).toHaveValue('InputTestValue'));
  });
});
