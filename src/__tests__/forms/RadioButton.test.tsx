import React from 'react';
import { render, waitFor } from '@testing-library/react';
import RadioButton from '../../components/forms/RadioButton';
import Stackable from '../../components/form-group/Stackable';

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
