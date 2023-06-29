import React from 'react';
import { MainMenuProps } from './MainMenu.types';

function MainMenu({ items = [] }: MainMenuProps) {
  return (
    <ul className="navigation__menu navigation__menu--main hidden--until-l">
      {items.map((menuItem, index) => (
        <li
          key={index}
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

export default MainMenu;
