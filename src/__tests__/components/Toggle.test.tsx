import React from 'react';
import { render } from '@testing-library/react';
import Toggle from '../../components/forms/Toggle';

test('Toggle exist', () => {
  const { container } = render(<Toggle
    name="marketing"
  />);
  const toggleElement = container.querySelector('.switch switch__light');
  expect(toggleElement).toBeInTheDocument();
});

test('Toggle input has correct attributes', () => {
  const { container } = render(<Toggle
    name="marketing"
  />);
  const toggleElement = container.querySelector('.switch switch__dark');
  expect(toggleElement)
    .toHaveAttribute(
      'type',
      'dark',
    );
  expect(toggleElement)
    .toHaveAttribute(
      'name',
      'marketing',
    );
});
