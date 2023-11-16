import React from 'react';
import { SubmenuProps } from './Submenu.types';

function Submenu({ items, RouterComponent }: SubmenuProps) {
  if (!items) {
    return null;
  }

  return (
    <ul className="navigation__menu navigation__menu--sub hidden--until-l">
      {items.map((menuItem) => (
        <li
          key={menuItem.title}
          className={`navigation__menu-item ${menuItem.isActive ? 'navigation__menu-item--active' : ''}`}
        >
          {RouterComponent ? <RouterComponent href={menuItem.url}>{menuItem.title}</RouterComponent>
            : <a href={menuItem.url}>{menuItem.title}</a>}
        </li>
      ))}
    </ul>
  );
}

export default Submenu;
