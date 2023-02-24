import React from 'react';

export interface FooterBottomNavProps {
  items: {
    title: string;
    url: string;
  }[]
}

function FooterBottomNav({ items }: FooterBottomNavProps) {
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
