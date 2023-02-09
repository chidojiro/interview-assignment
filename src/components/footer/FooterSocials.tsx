import React from 'react';
import Icon from '../Icon';

interface FooterSocial {
  url: string,
  title: string,
  icon: string,
}

interface FooterSocialsProps {
  socials: FooterSocial[];
}

function FooterSocials({ socials }: FooterSocialsProps) {
  return (
    <ul className="social__list">
      {socials.map((item) => (
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
