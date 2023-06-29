import React from 'react';
import { render } from '@testing-library/react';
import AccountInfo from '../../components/account-info/AccountInfo';

describe('Account info component exists', () => {
  test('should render Account info', () => {
    const { container } = render(
      <AccountInfo initials="GS" fullName="Guenther Steiner">
        <span>not you?</span>
        {' '}
        <a href="/logout">Log out</a>
      </AccountInfo>,
    );

    const accountElement = container.querySelector('.account-info');
    const accountTitle = accountElement && accountElement.querySelector('.bluex-open-form-layout__title');
    expect(accountElement)
      .toBeInTheDocument();
    expect(accountTitle)
      .toHaveClass('bluex-open-form-layout__title');
  });
});
