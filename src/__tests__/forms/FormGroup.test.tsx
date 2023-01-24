import React from 'react';
import { render } from '@testing-library/react';
import FormGroup from '@components/form-group/FormGroup';

describe('Form Group component tests', () => {
  test('Form Group renders correctly.', () => {
    const { container } = render(<FormGroup />);
    const formGroupComponent = container.querySelector('.form-group');
    expect(formGroupComponent).toBeInTheDocument();
  });

  test('Form Group renders one error.', () => {
    const { container } = render(<FormGroup error="error" />);
    const formGroupComponent = container.querySelector('.form-group');
    expect(formGroupComponent).toHaveTextContent('error');
  });

  test('Form Group renders multiple errors correctly.', () => {
    const { container } = render(<FormGroup error={['error1', 'error2', 'error3']} />);

    // @ts-ignore
    const formGroupErrorComponents = [...container.querySelectorAll('.form-group__feedback')];

    expect(formGroupErrorComponents.length).toBe(3);
  });
});
