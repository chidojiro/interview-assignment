import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from '../../../components/forms/Checkbox';

describe('Checkbox', () => {
  const onChangeMock = jest.fn();

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

  test('onChange is being called', () => {
    render(<Checkbox name="testChange" onChange={onChangeMock} />);
    const checkboxElement = screen.getByRole('checkbox');

    expect(checkboxElement).toBeInTheDocument();

    fireEvent.click(checkboxElement);
    expect(onChangeMock).toHaveBeenCalled();
  });
});
