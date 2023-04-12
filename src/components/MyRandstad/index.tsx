import React from 'react';
import Icon from '../Icon';
import { UserNameProps } from '../LoginPopover/types';

export interface MyRandstadProps {
  show?: boolean;
  isAuth: boolean;
  label: string | React.ReactNode;
  userName?: UserNameProps;
  userImgUrl?: string;
}

function MyRandstad({
  isAuth, show, label, userName, userImgUrl,
}: MyRandstadProps) {
  const { givenName, familyName } = userName || { givenName: '', familyName: '' } as UserNameProps;
  const userInitials = `${givenName.slice(0, 1).toUpperCase()}`;

  if (!show) {
    return null;
  }

  return (
    <li className="navigation__service-item">
      <a
        href="#?"
        className="navigation__service-link navigation__service-my-randstad"
        data-rs-popover-trigger="login-popover"
        aria-label="person-icon/initials"
      >
        {!isAuth ? (
          <>
            <Icon iconClassName="icon icon--inline icon-person" iconType="person" />
            <Icon iconClassName="icon icon--xs icon--inline icon-chevron hidden--from-l" iconType="chevron-down-8" />
            <span id="navigation__service-user-text" className="hidden--until-l">
              {label || 'my randstad'}
            </span>
          </>
        ) : (
          <>
            <span className="icon icon--inline">
              {userImgUrl ? (
                <img src={userImgUrl} alt={`${givenName} ${familyName}`} className="image--circle" />
              ) : (
                <span className="navigation__service-my-randstad__placeholder">{userInitials}</span>
              )}
            </span>
            <Icon iconClassName="icon icon--xs icon--inline icon-chevron ml-none hidden--from-l" iconType="chevron-down-8" />
            <span id="navigation__service-user-text" className="hidden--until-l">
              {givenName}
            </span>
          </>
        )}
      </a>
    </li>
  );
}

export default MyRandstad;
