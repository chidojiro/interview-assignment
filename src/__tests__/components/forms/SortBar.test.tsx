import React from 'react';
import { render } from '@testing-library/react';
import Sortbar from '../../../components/forms/Sortbar';

describe('Sortbar component tests', () => {
  test('Sortbar renders correctly with required props', () => {
    const { container } = render(
      <Sortbar
        count="jobs 1 to 10 of 8180"
        selectLabel="sort on"
        selectOptions={{ '': 'sort on ...', date: 'Date', location: 'Location' }}
        selectAttributes={{ id: 'test' }}
        libs={[]}
      />,
    );

    const selectField = container.querySelector('select');
    expect(selectField).toBeInTheDocument();
  });

  test('Sortbar renders correctly untouched class', () => {
    const { container } = render(
      <Sortbar
        count="jobs 1 to 10 of 8180"
        selectLabel="sort on"
        selectOptions={{ '': 'sort on ...', date: 'Date', location: 'Location' }}
        libs={[]}
        selectAttributes={{ id: 'test' }}
        untouched
      />,
    );

    const selectField = container.querySelector('select');
    expect(selectField).toBeInTheDocument();
    expect(selectField).toHaveClass('untouched');
  });
});
