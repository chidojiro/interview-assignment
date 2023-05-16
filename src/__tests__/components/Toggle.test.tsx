import React from 'react';
import { render } from '@testing-library/react';
import Toggle from '../../components/forms/Toggle';

test('Toggle exist', () => {
  const { container } = render(<Toggle
    name="marketing"
    checked={false}
  />);
  const toggleElement = container.querySelector('.switch.switch__light');
  expect(toggleElement).toBeInTheDocument();
});

test('Toggle input has correct attributes', () => {
  const { container } = render(<Toggle
    name="marketing2"
    checked={false}
  />);
  const toggleElement = container.querySelector('.switch__light');
  expect(toggleElement)
    .toHaveAttribute(
      'data-rs-switch',
      'marketing2',
    );
});

test('Toggle input has correct class - light', () => {
  const { container } = render(<Toggle
    name="marketing3"
  />);
  const toggleElement = container.querySelector('.switch');
  expect(toggleElement)
    .toHaveAttribute(
      'class',
      'switch switch__light',
    );
});

test('Toggle input has correct class - dark', () => {
  const { container } = render(<Toggle
    name="marketing4" type="dark"
  />);
  const toggleElement = container.querySelector('.switch');
  expect(toggleElement)
    .toHaveAttribute(
      'class',
      'switch switch__dark',
    );
  
});
