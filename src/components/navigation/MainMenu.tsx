import React from "react";
import { Items } from "./types";

interface MainMenuProps {
  items: Items[]
}

const MainMenu = ({ items = [] }: MainMenuProps) => {
  return (
    <ul className="navigation__menu navigation__menu--main hidden--until-l">
      {items.map((menuItem, index) => {
        return (
          <li
            key={index}
            className={
              "navigation__menu-item" + (menuItem.isActive ? " navigation__menu-item--active" : "")
            }>
            <a href={menuItem.url}>{menuItem.title}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default MainMenu;
