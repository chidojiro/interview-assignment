import React from 'react';
import { BgColor, getBackground } from '../utils/getBackground';

interface BreadcrumbsProps extends BgColor {
  /** `active` used to highlight the item */
  items?: {
    title: string,
    link: string,
    active?: boolean,
  }[] | [],
  mobileItem?: {
    title: string,
    link: string
  },
  /** This property used for adding specific class `navigation--app` for the apps. Since the navigation markup there is different from Orbit. */
  app?: boolean
  RouterComponent: React.FC<any>
}

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
                <RouterComponent className="breadcrumb__link hidden--from-l" href={mobileUrl}>
                  {mobileTitle}
                </RouterComponent>
              )}
              <ul className="breadcrumb__list hidden--until-l">
                {items.map(({ title, link, active }) => (
                  <li className="breadcrumb__item" key={`breadcrumb-${title}`}>
                    {link && !active ? (
                      <RouterComponent href={link} className="breadcrumb__link">
                        {title}
                      </RouterComponent>
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
