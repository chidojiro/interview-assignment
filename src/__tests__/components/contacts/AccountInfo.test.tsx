import React from 'react';
import { render } from '@testing-library/react';
import AccountInfo from '../../../components/contacts/AccountInfo';

describe('Account info component exists', () => {
  test('should render Account info', () => {
    const { container } = render(
      <AccountInfo initials="GS" fullName="Guenther Steiner" classNames="test">
        <span id="children"> Children</span>
      </AccountInfo>,
    );

    const accountElement = container.querySelector('.test');
    const initialsContainer = container.querySelector('.account-info__initials');
    const fullNameContainer = container.querySelector('.bluex-open-form-layout__title');
    const childrenContainer = container.querySelector('#children');

    expect(accountElement).toBeInTheDocument();
    expect(initialsContainer).toBeInTheDocument();
    expect(initialsContainer).toHaveTextContent('GS');
    expect(fullNameContainer).toBeInTheDocument();
    expect(fullNameContainer).toHaveTextContent('Guenther Steiner');
    expect(childrenContainer).toBeInTheDocument();
  });
});
