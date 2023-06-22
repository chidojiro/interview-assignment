import React from 'react';
import cn from 'classnames';
import Icon from '../Icon';
import { SocialLinksTypes } from './SocialLinks.types';

// Component used in PersonProfile for ContactDetails.
function SocialLinks({ items, iconsSize = 'l' }: SocialLinksTypes) {
  return (
    <ul className="social__list ">
      {items.map((item) => (
        <li className="social__item" key={item.title}>
          <a className="social__link" href={item.url} title={item.title} target="_blank" rel="noopener noreferrer">
            <Icon
              iconType={item.icon}
              iconClassName={cn('icon icon--inline icon--hover', {
                [`icon--${iconsSize}`]: iconsSize,
              })}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
