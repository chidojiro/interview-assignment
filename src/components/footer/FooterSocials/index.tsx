import React from 'react';
import Icon from '../../common/Icon';
import { FooterSocialsProps } from './FooterSocials.types';

function FooterSocials({ items }: FooterSocialsProps) {
  return (
    <ul className="social__list">
      {items.map((item) => (
        <li className="social__item" key={item.title}>
          <a
            href={item.url}
            title={item.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon iconClassName="icon icon--l icon--inline" iconType={item.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FooterSocials;
