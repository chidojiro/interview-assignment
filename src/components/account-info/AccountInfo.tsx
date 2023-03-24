import React from 'react';

interface AccountInfoProps {
  children: React.ReactNode;
  initials: string;
  fullName: string;
  classNames?: string;
}

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
    <div className={`account-info ${classNames}`}>
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
