import React from 'react';
import Icon from '../../common/Icon';
import { MyRandstadProps } from './MyRandstad.types';
import { UserNameProps } from '../../headers/LoginPopover/LoginPopover.types';

function MyRandstad({
  isAuth,
  show,
  label,
  userName,
  userImgUrl,
  hiddenLabel = false,
  popoverId = 'login-popover',
}: MyRandstadProps) {
  const { givenName, familyName, preferredName } = userName || { givenName: '', familyName: '', preferredName: '' } as UserNameProps;
  const userInitials = preferredName ? `${preferredName.slice(0, 1).toUpperCase()}` : `${givenName.slice(0, 1).toUpperCase()}`;

  if (!show) {
    return null;
  }

  return (
    <li
      className="navigation__service-item"
    >
      <a
        href="#?"
        className="navigation__service-link navigation__service-my-randstad"
        data-rs-popover-trigger={popoverId}
        aria-label="person-icon/initials"
      >
        {!isAuth ? (
          <>
            <Icon iconClassName="icon icon--inline icon-person" iconType="person" />
            {/* Disable rules for not needed keydown event and role */}
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            {!hiddenLabel && (
              <span
                id="navigation__service-user-text"
                className="hidden--until-l"
              >
                {label || 'my randstad'}
              </span>
            )}
          </>
        ) : (
          <>
            <span className="icon icon--inline">
              {userImgUrl ? (
                <img src={userImgUrl} alt={`${preferredName || givenName} ${familyName}`} className="image--circle" />
              ) : (
                <span className="navigation__service-my-randstad__placeholder">{userInitials}</span>
              )}
            </span>
            {!hiddenLabel && (
              <span id="navigation__service-user-text" className="hidden--until-l">
                {preferredName || givenName}
              </span>
            )}
          </>
        )}
      </a>
    </li>
  );
}

export default MyRandstad;
