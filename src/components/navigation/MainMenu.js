import React from "react";
import t from "prop-types";

const MainMenu = ({ items = [] }) => {
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

MainMenu.propTypes = {
  items: t.array,
};

export default MainMenu;
