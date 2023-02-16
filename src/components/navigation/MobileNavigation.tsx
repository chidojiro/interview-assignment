import React, { useEffect, useRef } from 'react';
import { Items } from './types';

const { Collapsible } = require('@ffw/randstad-local-orbit/js/components/collapsible');
const { Toggable } = require('@ffw/randstad-local-orbit/js/components/toggable');

export interface MobileNavigationProps {
  items?: Items[],
  showMyRandstad?: boolean,
  myRandstadUrl?: string
}

const menuAttributes = (menuItemLength: number) => {
  // If item has children, return expanded attributes.
  if (menuItemLength > 0) {
    return {
      'data-rs-collapsible': '',
      'data-rs-toggable': '',
    };
  }

  return {};
};

function MobileNavigation({ items, myRandstadUrl, showMyRandstad }: MobileNavigationProps) {
  const ref = useRef<Array<HTMLDivElement | null>>([]);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    if (items && items.length) {
      ref.current = ref.current.slice(0, items.length);
      for (const item of ref.current) {
        if (item?.hasAttribute('data-rs-collapsible') && item?.hasAttribute('data-rs-toggable') && !item.hasAttribute('data-rendered')) {
          new Collapsible(item);
          new Toggable(item);
        }
      }
    }
  }, [items]);

  if (!items) {
    return null;
  }

  return (
    <ul className="link-list link-list--single accordion accordion--s">
      {items.map((menuItem, index) => (
        <li key={menuItem.title} className="link-list__item">
          <div
            ref={(el) => ref.current[index] = el}
            className="collapsible__trigger"
            {...menuAttributes(menuItem.children ? menuItem.children.length : 0)}
          >
            <div className="link-list__link">
              <a href={menuItem.url}>{menuItem.title}</a>
              {menuItem.children && menuItem.children.length ? (
                <span className="icon toggle-arrow" data-rs-collapsible-button="" role="button">
                  <svg>
                    <use xlinkHref="/src/assets/img/icons.svg#chevron-down" />
                  </svg>
                </span>
              ) : (
                ''
              )}
            </div>
          </div>
          <div
            className="collapsible__content"
            data-rs-collapsible-content="true"
            aria-hidden="true"
          >
            {menuItem.children && menuItem.children.length ? (
              <ul className="navigation-accordion__sub">
                {menuItem.children.map((childMenuItem) => (
                  <li key={childMenuItem.title}>
                    <a href={childMenuItem.url}>{childMenuItem.title}</a>
                  </li>
                ))}
              </ul>
            ) : (
              ''
            )}
          </div>
        </li>
      ))}
      {showMyRandstad && (
        <li className="link-list__item hidden--anonyoums">
          <div
            ref={mobileMenuRef}
            className="collapsible__trigger"
            data-rs-collapsible=""
            aria-expanded="false"
            data-rs-toggable=""
          >
            <div className="link-list__link">
              {/* Can be changed from auth-widget by the id. See DE auth-widget.js */}
              <a id="mr-mobile-navigation-menu-title" href={`${myRandstadUrl}/`}>
                my randstad
              </a>
              <span className="icon toggle-arrow" data-rs-collapsible-button="" role="button">
                <svg>
                  <use xlinkHref="/src/assets/img/icons.svg#chevron-down" />
                </svg>
              </span>
            </div>
          </div>
          {/* Placeholder for my randstad menu, that's populated by auth-widget. */}
          <div
            className="collapsible__content"
            id="navigationMobileMR"
            data-rs-collapsible-content=""
            aria-hidden="true"
          />
        </li>
      )}
    </ul>
  );
}

export default MobileNavigation;
