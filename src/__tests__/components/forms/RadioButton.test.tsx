import React from 'react';
import {
  render, waitFor, screen, fireEvent,
} from '@testing-library/react';
import RadioButton from '../../../components/forms/RadioButton';
import Stackable from '../../../components/forms/Stackable';

describe('RadioButton component tests', () => {
  test('RadioButton renders correctly with required props', () => {
    const { container } = render(
      <Stackable label="salary">
        <RadioButton name="salary-group" id="salary-1" label="Per hour" />
        <RadioButton name="salary-group" id="salary-2" label="Per day" />
        <RadioButton name="salary-group" id="salary-3" label="Per year" data-worker="full-time" />
      </Stackable>,
    );
    const radioElement = container.querySelector('input[name="salary-group"]:checked');
    waitFor(() => expect(radioElement).toBeInTheDocument());
  });
});

describe('Checked RadioButton', () => {
  it('becomes checked when clicked', () => {
    const testId = 'test-radio-button';
    const label = 'Test Radio Button';

    render(
      <Stackable label="salary">
        <RadioButton name="salary-group" id={`${testId}-1`} label="Per hour" />
        <RadioButton name="salary-group" id={`${testId}-2`} label="Per day" />
        <RadioButton name="salary-group" id={`${testId}-3`} label={label} data-worker="full-time" />
      </Stackable>,
    );

    const radioButton = screen.getByLabelText(label);

    // Check that the radio button is initially unchecked
    expect(radioButton).not.toBeChecked();

    // Simulate a click event on the radio button
    fireEvent.click(radioButton);

    // Check that the radio button becomes checked after the click event
    expect(radioButton).toBeChecked();
  });
});
