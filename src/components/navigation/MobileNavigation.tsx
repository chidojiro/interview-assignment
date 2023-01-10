import React from "react";
import { Items } from "./types";

export interface MobileNavigationProps {
  items?: Items[],
  showMyRandstad?: boolean,
  myRandstadUrl?: string
}

const menuAttributes = (menuItemLength: number) => {
  // If item has children, return expanded attributes.
  if (menuItemLength > 0) {
    return {
      "data-rs-collapsible": "",
      "data-rs-toggable": "",
    };
  }

  return {};
};

const MobileNavigation = ({ items, myRandstadUrl, showMyRandstad }: MobileNavigationProps) => {
  if (!items) {
    return null;
  }

  return (
    <ul className="link-list link-list--single accordion accordion--s">
      {items.map((menuItem, index) => {
        return (
          <li key={index} className="link-list__item">
            <div
              className="collapsible__trigger"
              {...menuAttributes(menuItem.children ? menuItem.children.length : 0)}>
              <div className="link-list__link">
                <a href={menuItem.url}>{menuItem.title}</a>
                {menuItem.children && menuItem.children.length ? (
                  <span className="icon toggle-arrow" data-rs-collapsible-button="" role="button">
                    <svg>
                      <use xlinkHref="/themes/custom/bluex/dist/assets/image/icons.svg#chevron-down"></use>
                    </svg>
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div
              className="collapsible__content"
              data-rs-collapsible-content="true"
              aria-hidden="true">
              {menuItem.children && menuItem.children.length ? (
                <ul className="navigation-accordion__sub">
                  {menuItem.children.map((childMenuItem, childIndex) => {
                    return (
                      <li key={childIndex}>
                        <a href={childMenuItem.url}>{childMenuItem.title}</a>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                ""
              )}
            </div>
          </li>
        );
      })}
      {showMyRandstad && (
        <li className="link-list__item hidden--anonyoums">
          <div
            className="collapsible__trigger"
            data-rs-collapsible=""
            aria-expanded="false"
            data-rs-toggable="">
            <div className="link-list__link">
              {/* Can be changed from auth-widget by the id. See DE auth-widget.js */}
              <a id="mr-mobile-navigation-menu-title" href={`${myRandstadUrl}/`}>
                my randstad
              </a>
              <span className="icon toggle-arrow" data-rs-collapsible-button="" role="button">
                <svg>
                  <use xlinkHref="/themes/custom/bluex/dist/assets/image/icons.svg#chevron-down"></use>
                </svg>
              </span>
            </div>
          </div>
          {/* Placeholder for my randstad menu, that's populated by auth-widget. */}
          <div
            className="collapsible__content"
            id="navigationMobileMR"
            data-rs-collapsible-content=""
            aria-hidden="true"></div>
        </li>
      )}
    </ul>
  );
};

export default MobileNavigation;
