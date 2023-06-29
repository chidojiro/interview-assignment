import React from 'react';
import { render } from '@testing-library/react';
import Checkbox from '../../../components/forms/Checkbox';

test('Checkbox exist', () => {
  const { container } = render(<Checkbox
    name="terms"
    checkboxLabel={(
      <>
        I accept the
        <a href="/example">terms</a>
        {' '}
        of use
      </>
    )}
  />);
  const checkboxElement = container.querySelector('.selection-control__input');
  expect(checkboxElement).toBeInTheDocument();
});

test('Checkbox input has correct attributes', () => {
  const { container } = render(<Checkbox
    name="terms"
    checkboxLabel={(
      <>
        I accept the
        <a href="/example">terms</a>
        {' '}
        of use
      </>
    )}
  />);
  const checkboxElement = container.querySelector('.selection-control__input input');
  expect(checkboxElement)
    .toHaveAttribute(
      'type',
      'checkbox',
    );
  expect(checkboxElement)
    .toHaveAttribute(
      'name',
      'terms',
    );
});

test('Check if has group label', () => {
  const { container } = render(
    <Checkbox
      name="consent"
      formGroupLabel="Data protection"
      checkboxLabel="Consent Further information on data processing by Randstad"
    />,
  );
  const consentElement = container.querySelector('.form-group__label');

  expect(consentElement?.tagName)
    .toBe('LABEL');
});
