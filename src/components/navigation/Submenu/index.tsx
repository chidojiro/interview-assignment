import React from 'react';
import classNames from 'classnames';
import { SubmenuProps } from './Submenu.types';

function Submenu({ items, RouterComponent, languagePrefix }: SubmenuProps) {
  if (!items) {
    return null;
  }

  return (
    <ul className="navigation__menu navigation__menu--sub hidden--until-l">
      {items.map((menuItem) => (
        <li
          key={menuItem.title}
          className={classNames('navigation__menu-item', {
            'navigation__menu-item--active': menuItem.isActive,
          })}
        >
          {RouterComponent ? <RouterComponent href={`${languagePrefix}${menuItem.url}`}>{menuItem.title}</RouterComponent>
            : <a href={menuItem.url}>{menuItem.title}</a>}
        </li>
      ))}
    </ul>
  );
}

export default Submenu;
