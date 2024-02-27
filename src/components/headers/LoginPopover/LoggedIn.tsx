import React from 'react';
import Icon from '../../common/Icon';
import { UserNameProps, LoggedInProps } from './LoginPopover.types';

function LoggedIn({
  menuLinks, logoutUrl, logoutText, userName, title, RouterComponent, callback,
}: LoggedInProps) {
  const { givenName, familyName, preferredName } = userName as UserNameProps;

  return (
    <>
      <div className="popover__title">
        <div className="person-profile">
          <div className="person-profile__profile ml-none" style={{ wordBreak: 'break-word' }}>
            {title}
            {' '}
            <span className="text--emphasis">
              {preferredName || givenName}
              {' '}
              {familyName}
            </span>
          </div>
        </div>
      </div>
      <ul className="link-list divider">
        {menuLinks?.map((item) => (
          <li data-rs-popover-button-close="" className="link-list__item" key={item.url}>
            {RouterComponent ? (
              <RouterComponent prefetch onClick={callback} href={item.url} className="link-list__link" id={`${item.id}-popover`}>
                {item.icon && <Icon iconClassName="icon icon--inline" iconType={item.icon} />}
                {item.title}
              </RouterComponent>
            ) : (
              <a href={item.url} className="link-list__link" id={`${item.id}-popover`}>
                {item.icon && <Icon iconClassName="icon icon--inline" iconType={item.icon} />}
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
      <div className="popover__footer">
        <a id="logout-popover" href={logoutUrl} className="popover__footer--link text--alternative">
          {logoutText}
        </a>
      </div>
    </>
  );
}

export default LoggedIn;
