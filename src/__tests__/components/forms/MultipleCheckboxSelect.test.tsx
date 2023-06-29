import React from 'react';
import { render, waitFor } from '@testing-library/react';
import MultipleCheckboxSelect from '../../../components/forms/MultipleCheckboxSelect';

const items = [
  { id: 'option1', name: 'Option 1' },
  { id: 'option2', name: 'Option 2' },
  { id: 'option3', name: 'Option 3' },
  { id: 'option4', name: 'Option 4' },
];

describe('MultipleCheckboxSelect component tests', () => {
  test('MultipleCheckboxSelect renders correctly with required props', () => {
    const { container } = render(
      <MultipleCheckboxSelect
        name="test"
        items={items}
        value={[]}
        setValue={() => {}}
        label="Label"
        optionalLabel="optional"
        required={false}
        error={undefined}
      />,
    );
    const multipleCheckboxSelectElement = container.querySelector('form-group form-group--selection-control');
    waitFor(() => expect(multipleCheckboxSelectElement).toBeInTheDocument());
  });

  test('MultipleCheckboxSelect renders correctly with 4 fields', () => {
    const { container } = render(
      <MultipleCheckboxSelect
        name="test"
        items={items}
        value={['option1', 'option2']}
        setValue={() => {}}
        label="Label"
        optionalLabel="optional"
        required={false}
        error={undefined}
      />,
    );
    const multipleCheckboxSelectElement = container.querySelector('form-group form-group--selection-control');
    waitFor(() => expect(multipleCheckboxSelectElement).toBeInTheDocument());
    const textInputs = document.querySelectorAll('input[type=checkbox]');
    expect(textInputs.length).toEqual(4);
  });

  test('MultipleCheckboxSelect renders correctly with 2 selected fields', () => {
    const { container } = render(
      <MultipleCheckboxSelect
        name="test"
        items={items}
        value={['option1', 'option2']}
        setValue={() => {}}
        label="Label"
        optionalLabel="optional"
        required={false}
        error={undefined}
      />,
    );
    const multipleCheckboxSelectElement = container.querySelector('form-group form-group--selection-control');
    waitFor(() => expect(multipleCheckboxSelectElement).toBeInTheDocument());
    const textInputs = document.querySelectorAll('input[type=checkbox]');
    const checked = [].filter.call(textInputs, (el: HTMLInputElement) => el.checked);
    expect(checked.length).toEqual(2);
  });

  test('MultipleCheckboxSelect si disabled', () => {
    const { container } = render(
      <MultipleCheckboxSelect
        name="test"
        items={items}
        value={['option1', 'option2']}
        setValue={() => {}}
        label="Label"
        optionalLabel="optional"
        required={false}
        disabled
        error={undefined}
      />,
    );
    const multipleCheckboxSelectElement = container.querySelector('form-group form-group--selection-control');
    waitFor(() => expect(multipleCheckboxSelectElement).toBeInTheDocument());
    const disabledTextInputs = document.getElementsByClassName('selection-control--disabled');
    expect(disabledTextInputs.length).toEqual(4);
  });
});
