import React from 'react';
import { Items } from './types';

interface SubmenuItems extends Items {
  children: Items[]
}

interface SubmenuProps {
  items?: SubmenuItems[],
}

function Submenu({ items }: SubmenuProps) {
  if (!items) {
    return null;
  }

  return (
    <ul className="navigation__menu navigation__menu--sub hidden--until-l">
      {items.map((menuItem) => (
        <li
          key={menuItem.title}
          className={
            `navigation__menu-item${menuItem.isActive ? ' navigation__menu-item--active' : ''}`
          }
        >
          <a href={menuItem.url}>{menuItem.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default Submenu;
