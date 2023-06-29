import React from 'react';
import { render } from '@testing-library/react';
import FieldError from '../../components/form-group/FieldError/FieldError';

describe('Field error component tests', () => {
  test('Field error renders correctly.', () => {
    const { container } = render(<FieldError>Error message</FieldError>);
    const fieldErrorComponent = container.querySelector('.form-group__feedback');
    expect(fieldErrorComponent)
      .toBeInTheDocument();
    expect(fieldErrorComponent)
      .toHaveTextContent('Error message');
  });

  test('Field error has parent component with class "form-group--error".', () => {
    const { container } = render(
      <div className="form-group--error">
        <FieldError>Error message</FieldError>
      </div>,
    );
    const fieldErrorComponent = container.querySelector('.form-group__feedback');
    expect(fieldErrorComponent?.closest('.form-group--error'))
      .toBeInTheDocument();
  });
});
