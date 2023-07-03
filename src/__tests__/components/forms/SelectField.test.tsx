import React from 'react';
import { render } from '@testing-library/react';
import SelectField from '../../../components/forms/SelectField';

describe('RatingStart component tests', () => {
  test('RatingStart renders correctly with required props', () => {
    const { container } = render(
      <SelectField label="country" name="country" required description="we need your country for taxes">
        <option value="">select your country ...</option>
        <option value="Belgium">Belgium</option>
        <option value="France">France</option>
        <option value="Germany">Germany</option>
        <option value="The Netherlands">The Netherlands</option>
      </SelectField>,
    );

    const selectField = container.querySelector('select');
    expect(selectField).toBeInTheDocument();
  });
});
