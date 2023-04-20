import React from 'react';
import { render } from '@testing-library/react';
import Dropdown from '../../components/form-group/Dropdown';

describe('Dropdown component tests', () => {
  test('Dropdown renders correctly.', () => {
    const { container } = render(
      <Dropdown
        label="Favorite number"
        error="Please choose number"
        id="numbers"
        options={[
          { value: 'first', title: 'first' },
          { value: 'second', title: 'second' },
          { value: 'third', title: 'third' },
        ]}
        defaultValue="second"
        name="numbers-dropdown"
        onChange={(e) => console.log(e)}
        required
      ></Dropdown>,
    );
    const dropdownComponent = container.querySelector('.form-group__input select');
    expect(dropdownComponent).toBeInTheDocument();
  });

  test('Dropdown is loading corretly attributes.', () => {
    const { container } = render(
      <Dropdown
        label="Favorite number"
        error="Please choose number"
        id="numbers"
        options={[
          { value: 'first', title: 'first' },
          { value: 'second', title: 'second' },
          { value: 'third', title: 'third' },
        ]}
        name="numbers-dropdown"
        onChange={(e) => console.log(e)}
        required
      ></Dropdown>,
    );
    // @ts-ignore
    const dropdownComponent = container.querySelector('.form-group__input select');

    expect(dropdownComponent).toHaveAttribute('name', 'numbers-dropdown');
    expect(dropdownComponent).toHaveAttribute('id', 'numbers');
    expect(dropdownComponent).toHaveAttribute('required');
  });

  test('Dropdown number of list correctly in case we have defaultValue.', () => {
    const { container } = render(
      <Dropdown
        label="Favorite number"
        error="Please choose number"
        id="numbers"
        options={[
          { value: 'first', title: 'first' },
          { value: 'second', title: 'second' },
          { value: 'third', title: 'third' },
        ]}
        defaultValue="first"
        name="numbers-dropdown"
        onChange={(e) => console.log(e)}
        required
      ></Dropdown>,
    );
    // @ts-ignore
    const dropdownComponent = [...container.querySelectorAll('.form-group__input select option')];

    expect(dropdownComponent.length).toBe(3);
  });

  test('Dropdown number of list correctly.', () => {
    const { container } = render(
      <Dropdown
        label="Favorite number"
        error="Please choose number"
        id="numbers"
        options={[
          { value: 'first', title: 'first' },
          { value: 'second', title: 'second' },
          { value: 'third', title: 'third' },
        ]}
        name="numbers-dropdown"
        onChange={(e) => console.log(e)}
        required
      ></Dropdown>,
    );
    // @ts-ignore
    const dropdownComponent = [...container.querySelectorAll('.form-group__input select option')];

    expect(dropdownComponent.length).toBe(3);
  });

  test('Dropdown options have the right text.', () => {
    const { container } = render(
      <Dropdown
        label="Favorite number"
        error="Please choose number"
        id="numbers"
        options={[
          { value: 'first', title: 'first' },
          { value: 'second', title: 'second' },
          { value: 'third', title: 'third' },
        ]}
        name="numbers-dropdown"
        onChange={(e) => console.log(e)}
      ></Dropdown>,
    );
    // @ts-ignore
    const dropdownComponent = [...container.querySelectorAll('.form-group__input select option')];

    expect(dropdownComponent[0]).toHaveTextContent('first');
    expect(dropdownComponent[1]).toHaveTextContent('second');
    expect(dropdownComponent[2]).toHaveTextContent('third');
  });

  
});
