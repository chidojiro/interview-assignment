import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PasswordField from '../../components/forms/PasswordField';

afterEach(cleanup);

const forgottenPasswordLink = <a href="/forgotten-password">Forgotten password</a>;

const props = {
  name: 'password',
  minChars: 8,
  validationSchema: {
    minSign: '8 characters',
    useChar: '1 small letter',
    useUpper: '1 capital letter',
    useDigit: '1 number',
    noSymbol: 'No symbols',
  },
  buttonLabel: 'show password',
  forgottenPasswordLink: forgottenPasswordLink,
  _formGroupProps: {
    label: 'Password',
    id: 'password',
    required: true,
    capitalize: false,
    optionalLabel: 'optional',
  },
};

describe('PasswordField component tests', () => {
  test('renders the component with all props', () => {
    const { container, getByText } = render(
      <PasswordField {...props} />
    );

    const forgottenPasswordText = getByText('Forgotten password');
    const input = container.querySelector('[type=\'password\']');
    const checkList = container.querySelector('[data-rs-password-validator-checklist]');
    const minSign = getByText('8 characters');
    const useChar = getByText('1 small letter');
    const useUpper = getByText('1 capital letter');
    const useDigit = getByText('1 number');
    const noSymbol = getByText('No symbols');
    const showPasswordBtn = container.querySelector('.show-password') as HTMLButtonElement;

    expect(forgottenPasswordText).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(checkList).toBeInTheDocument();
    expect(minSign).toBeInTheDocument();
    expect(useChar).toBeInTheDocument();
    expect(useUpper).toBeInTheDocument();
    expect(useDigit).toBeInTheDocument();
    expect(noSymbol).toBeInTheDocument();
    expect(showPasswordBtn).toBeInTheDocument();
    expect(showPasswordBtn.getAttribute('aria-label')).toBe('show password');
  });

  test('renders the component with default props', () => {
    const { container, getByText } = render(
      <PasswordField {...props} />,
    );

    const checkList = container.querySelector('.password-validator__validate-list');
    const minSign = getByText('8 characters');
    const useChar = getByText('1 small letter');
    const useUpper = getByText('1 capital letter');
    const useDigit = getByText('1 number');

    expect(checkList).toBeInTheDocument();
    expect(minSign).toBeInTheDocument();
    expect(useChar).toBeInTheDocument();
    expect(useUpper).toBeInTheDocument();
    expect(useDigit).toBeInTheDocument();
  });

  /**
   * I tried to handle the click on the 'eye' icon but it does not work at the
   * moment because Orbit handles this logic and we are unable to test it as it is.
   * I will try to make it work at some point.
   */
  // test('toggles the input's type when clicking the show password button', () => {
  //   const { container } = render(<PasswordField {...props} />);

  //   const input = container.querySelector("[type=\"password\"]") as HTMLInputElement;
  //   const showPasswordBtn = container.querySelector(".show-password") as HTMLButtonElement;

  //   expect(input.type).toBe("password");
  //   fireEvent.click(showPasswordBtn);
  //   expect(input.type).toBe("text");
  // });
});
