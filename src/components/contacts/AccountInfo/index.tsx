import React from 'react';
import { AccountInfoProps } from './AccountInfo.types';

/**
 * Account Info block component used on the job apply pages with user logged in.
 *
 */
function AccountInfo({
  children,
  initials,
  fullName,
  classNames = '',
}: AccountInfoProps) {
  return (
    <div className={`flex ${classNames}`}>
      <div className="account-info__block-left">
        <div className="account-info__initials account-info__initials">{initials}</div>
      </div>
      <div className="account-info__block">
        <h2 className="bluex-open-form-layout__title mb-xs">{fullName}</h2>
        <p>
          {children}
        </p>
      </div>
    </div>
  );
}

export default AccountInfo;
