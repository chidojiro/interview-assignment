import React from 'react';
import t from 'prop-types';
import { UtilityNavigationProps } from './UtilityNavigation.types';

function UtilityNavigation({ items }: UtilityNavigationProps) {
  if (!items || !items.length) {
    return null;
  }
  return (
    <ul className="top-link">
      {items.map((menuItem, index) => (
        <li key={index} className="top-link__item">
          <a
            href={menuItem.children.length ? '#' : menuItem.url}
            data-rs-popover-trigger={`util-menu__${index}`}
          >
            {menuItem.title}
          </a>
          {menuItem.children.length ? (
            <div
              className="popover bg-variant-brand-tertiary hidden--until-l"
              data-rs-popover={`util-menu__${index}`}
            >
              <div className="popover__dialog">
                <div className="popover__title">find jobs in:</div>
                <ul className="link-list link-list--double link-list--categories">
                  {menuItem.children.map((childLinkData, childIndex) => (
                    <li key={childIndex} className="link-list__item">
                      <a className="link-list__link" href={childLinkData.url}>
                        {childLinkData.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            ''
          )}
        </li>
      ))}
    </ul>
  );
}

UtilityNavigation.propTypes = {
  items: t.array,
};

export default UtilityNavigation;
