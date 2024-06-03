import React from 'react';
import { MainMenuProps } from './MainMenu.types';

function MainMenu({ items = [] }: MainMenuProps) {
  return (
    <ul className="navigation__menu navigation__menu--main hidden--until-l">
      {items.map((menuItem) => (
        <li key={menuItem.title} className={`navigation__menu-item${menuItem.isActive ? ' navigation__menu-item--active' : ''}`}>
          <a href={menuItem.url}>{menuItem.title}</a>
          {menuItem.children ? (
            <ul key={menuItem.title} className="navigation__menu-sub">
              {menuItem.children.map((subItem) => (
                <li key={subItem.title} className="navigation__menu-sub-item">
                  <a href={subItem.url}>
                    {subItem.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default MainMenu;
