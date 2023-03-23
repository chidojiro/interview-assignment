import React, { useEffect, useRef } from 'react';
import { Collapsible } from '@ffw/randstad-local-orbit/js/components/collapsible';
import { Toggable } from '@ffw/randstad-local-orbit/js/components/toggable';
import { Items } from './types';

export interface MobileNavigationProps {
  items?: Items[],
  showMyRandstad?: boolean,
  myRandstadUrl?: string,
  myRandstadLabel?: string | React.ReactNode,
  myRandstadMenu?: Items[],
  languagePrefix: string;
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

function MobileNavigation({
  items, myRandstadUrl, showMyRandstad, myRandstadLabel, myRandstadMenu, languagePrefix
}: MobileNavigationProps) {
  const ref = useRef<Array<HTMLDivElement | null>>([]);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (items && items.length) {
      ref.current = ref.current.slice(0, items.length);
      for (const item of ref.current) {
        if (item?.hasAttribute('data-rs-collapsible') && item?.hasAttribute('data-rs-toggable') && !item.hasAttribute('data-rendered')) {
          new Collapsible(item);
          new Toggable(item);
          item.dataset.rendered = 'rendered';
        }
      }
    }
  }, [items]);

  if (!items) {
    return null;
  }

  useEffect(() => {
    if (myRandstadMenu && myRandstadMenu.length && mobileMenuRef && mobileMenuRef.current) {
      const mobileMenu = mobileMenuRef.current;
      if (!mobileMenu.hasAttribute('data-rendered')) {
        new Collapsible(mobileMenu);
        new Toggable(mobileMenu);
        mobileMenu.dataset.rendered = 'rendered';
      }
    }
  }, [myRandstadMenu, mobileMenuRef]);

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
                    <use xlinkHref={`${process.env.NEXT_PUBLIC_RESOURCE_PREFIX}/src/assets/img/icons.svg#chevron-down`} />
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
            data-rs-toggable=""
          >
            <div className="link-list__link">
              <a id="mr-mobile-navigation-menu-title" href={`${myRandstadUrl}/`}>
                {myRandstadLabel}
              </a>
              <span className="icon toggle-arrow" data-rs-collapsible-button="" role="button">
                <svg>
                  <use xlinkHref={`${process.env.NEXT_PUBLIC_RESOURCE_PREFIX}/src/assets/img/icons.svg#chevron-down`} />
                </svg>
              </span>
            </div>
          </div>
          <div
            className="collapsible__content"
            id="navigationMobileMR"
            data-rs-collapsible-content=""
            aria-hidden="true"
          >
            {myRandstadMenu && myRandstadMenu.length ? (
              <ul className="navigation-accordion__sub">
                {myRandstadMenu.map((mrMenuItem) => (
                  <li key={mrMenuItem.title}>
                    <a href={`${languagePrefix}${mrMenuItem.url}`}>{mrMenuItem.title}</a>
                  </li>
                ))}
              </ul>
            ) : (
              ''
            )}
          </div>
        </li>
      )}
    </ul>
  );
}

export default MobileNavigation;
