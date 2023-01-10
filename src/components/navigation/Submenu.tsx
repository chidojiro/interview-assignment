import React from "react";
import { Items } from "./types";

interface SubmenuItems extends Items {
  children: Items[]
}

interface Submenu {
  items?: SubmenuItems[],
}

const Submenu = ({ items }: Submenu) => {
  if (!items) {
    return null;
  }

  const mainMenuHasChildren = items.some(
    (menuItem) => menuItem.isActive && menuItem.children && menuItem.children.length,
  );

  if (!mainMenuHasChildren) {
    return null;
  }

  return (
    <ul className="navigation__menu navigation__menu--sub hidden--until-l">
      {items.map((menuItem) => {
        if (menuItem.isActive && menuItem.children && menuItem.children.length) {
          return menuItem.children.map((childMenuItem, index) => {
            return (
              <li
                key={index}
                className={
                  "navigation__menu-item" +
                  (childMenuItem.isActive ? " navigation__menu-item--active" : "")
                }>
                <a href={childMenuItem.url}>{childMenuItem.title}</a>
              </li>
            );
          });
        }
      })}
    </ul>
  );
};

export default Submenu;
