import React from 'react';

export interface FooterLink {
  title: string;
  url: string;
}

export interface FooterBottomNavInterface {
  items: FooterLink[];
}

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
