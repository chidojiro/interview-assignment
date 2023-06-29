import React from 'react';
import { FooterBottomNavInterface } from './FooterBottomNav.types';

function FooterBottomNav({ items }: FooterBottomNavInterface) {
  return (
    <div className="footer__bottom-nav">
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterBottomNav;
