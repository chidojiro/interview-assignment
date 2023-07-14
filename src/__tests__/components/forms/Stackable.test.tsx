import React from 'react';
import { render } from '@testing-library/react';
import Stackable from '../../../components/forms/Stackable';

describe('Stackable component tests', () => {
  test('Stackable renders correctly with its props', () => {
    const { container } = render(
      <Stackable label="label" description="Description" error="Error" capitalize required={false} optionalLabel="custom optional label" />
      ,
    );

    const stackable = container.querySelector('fieldset');
    const label = container.querySelector('.form-group__label');
    const optionalLabel = container.querySelector('.form-group__optional');
    const description = container.querySelector('.form-group__message');
    const error = container.querySelector('.form-group__feedback');

    expect(stackable).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Label');
    expect(optionalLabel).toBeInTheDocument();
    expect(optionalLabel).toHaveTextContent('custom optional label');
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent('Description');
    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent('Error');
  });

  test('Stackable error and optional label is not rendered when not passed', () => {
    const { container } = render(
      <Stackable label="label" description="Description" required={false} />,
    );

    const stackable = container.querySelector('fieldset');
    const label = container.querySelector('.form-group__label');
    const optionalLabel = container.querySelector('.form-group__optional');
    const description = container.querySelector('.form-group__message');
    const error = container.querySelector('.form-group__feedback');

    expect(stackable).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('label');
    expect(optionalLabel).toBeInTheDocument();
    expect(optionalLabel).toHaveTextContent('optional');
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent('Description');
    expect(error).not.toBeInTheDocument();
  });

  test('Stackable is rendered without any passed props', () => {
    const { container } = render(
      <Stackable label="label" />,
    );

    const stackable = container.querySelector('fieldset');
    const label = container.querySelector('.form-group__label');
    const optionalLabel = container.querySelector('.form-group__optional');
    const description = container.querySelector('.form-group__message');
    const error = container.querySelector('.form-group__feedback');
    const children = container.querySelector('.form-group__input');

    expect(stackable).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('label');
    expect(optionalLabel).not.toBeInTheDocument();
    expect(description).not.toBeInTheDocument();
    expect(error).not.toBeInTheDocument();
    expect(children).not.toBeInTheDocument();
  });
});
