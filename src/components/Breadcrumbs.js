import React from "react";
import t from "prop-types";

const Breadcrumbs = ({ items, mobileItem, bgColor = "primary", app = true }) => {
  const { title: mobileTitle, url: mobileUrl } = mobileItem || {};
  const wrapperClasses = ["navigation"];

  if (app) {
    wrapperClasses.push("navigation--app");
  }

  if (bgColor) {
    wrapperClasses.push(`bg-variant-brand-${bgColor}`);
  }

  return (
    <div className={wrapperClasses.join(" ")}>
      <div className="wrapper">
        <div className="navigation__bottom">
          <nav className="breadcrumb" aria-label="breadcrumb">
            {mobileItem && (
              <a className="breadcrumb__link hidden--from-l" href={mobileUrl}>
                {mobileTitle}
              </a>
            )}
            <ul className="breadcrumb__list hidden--until-l">
              {items.map(({ title, url, active }, index) => (
                <li className="breadcrumb__item" key={index}>
                  {url && !active ? (
                    <a href={url} className="breadcrumb__link">
                      {title}
                    </a>
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
  );
};

Breadcrumbs.propTypes = {
  /** 'active' is used to highlight the item */
  items: t.arrayOf(
    t.shape({
      title: t.string.isRequired,
      url: t.string,
      active: t.bool,
    }),
  ),
  mobileItem: t.shape({
    title: t.string.isRequired,
    url: t.string,
  }),
  bgColor: t.string,
  /** This property is used for adding specific class('navigation--app') only for the apps. Since the navigation markup there is different from Orbit. */
  app: t.bool,
};

Breadcrumbs.defaultProps = {
  bgColor: "primary",
};

export default Breadcrumbs;
