import React from 'react';
import getBackground from '../../../utils/getBackground';
import { BreadcrumbsProps } from './Breadcrumbs.types';

/**
 * The top-level navigation of the website and shown on each page. See [here](https://randstad.design/components/core/navigation/)
 *
 */
function Breadcrumbs({
  items = [], mobileItem, bgColor = 'primary', app = true, RouterComponent,
}: BreadcrumbsProps) {
  const { title: mobileTitle, link: mobileUrl } = mobileItem || {};
  const wrapperClasses = ['navigation'];
  const WrapperTag = bgColor ? 'div' : React.Fragment;
  const wrapperAttributes: { className?: string } = {};

  if (app) {
    wrapperClasses.push('navigation--app');
  }

  if (bgColor) {
    wrapperAttributes.className = getBackground(bgColor);
  }

  return (
    <WrapperTag {...wrapperAttributes}>
      <div className={wrapperClasses.join(' ')}>
        <div className="wrapper">
          <div className="navigation__bottom">
            <nav className="breadcrumb" aria-label="breadcrumb">
              {mobileItem && (
                RouterComponent ? <RouterComponent className="breadcrumb__link hidden--from-l" href={mobileUrl}>{mobileTitle}</RouterComponent> : <a className="breadcrumb__link hidden--from-l" href={mobileUrl}>{mobileTitle}</a>
              )}
              <ul className="breadcrumb__list hidden--until-l">
                {items.map(({ title, link, active }, index) => (
                  <li className="breadcrumb__item" key={`breadcrumb-${title}-${index}`}>
                    {link && !active ? (
                      RouterComponent ? <RouterComponent className="breadcrumb__link" href={link}>{title}</RouterComponent> : <a className="breadcrumb__link" href={link}>{title}</a>
                    ) : (
                      title
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </WrapperTag>
  );
}

export default Breadcrumbs;
