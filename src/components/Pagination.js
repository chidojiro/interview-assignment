import React from "react";
import t from "prop-types";

const Pagination = ({ pages, currentPage, as, previousArrowLink, nextArrowLink }) => {
  // Helper component to choose link component.
  /* eslint-disable react/prop-types */
  const LinkElement = ({ children, props, ...rest }) => {
    const { url, attributes } = props;
    const Element = as ? as : "a";
    const displayATag = Element === "a";
    const elementAttributes = { ...attributes };

    // Append href if its A tag element.
    if (displayATag) {
      elementAttributes["href"] = url;
    }

    return (
      <Element {...elementAttributes} {...rest}>
        {children}
      </Element>
    );
  };

  const ArrowLink = ({ data, direction }) =>
    data ? (
      <li className="pagination__item">
        <LinkElement props={data} className="pagination__control">
          <span className="icon icon--inline" aria-hidden="true">
            <svg>
              <use
                xlinkHref={`/themes/custom/bluex/dist/assets/image/icons.svg#${
                  direction === "left" ? "arrow-left" : "arrow-right"
                }`}
              ></use>
            </svg>
          </span>
          <span className="hidden--visually">{data.text}</span>
        </LinkElement>
      </li>
    ) : null;
  /* eslint-enable react/prop-types */

  if (pages.length < 1) {
    return null;
  }

  return (
    <nav className="pagination divider divider--top" data-rs-pagination="">
      <ul className="pagination__list" data-rs-pagination-list="">
        <ArrowLink data={previousArrowLink} direction="left" />
        {pages.map(({ text, ...rest }, i) => {
          return (
            <li key={i} className="pagination__item">
              {parseInt(currentPage) == parseInt(text) ? (
                <span>{text}</span>
              ) : (
                <LinkElement props={rest}>{text}</LinkElement>
              )}
            </li>
          );
        })}
        <ArrowLink data={nextArrowLink} direction="right" />
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pages: t.arrayOf(
    t.shape({
      text: t.string.isRequired,
      url: t.string,
      attributes: t.any,
    }),
  ),
  currentPage: t.oneOfType([t.string, t.number]),
  as: t.element,
  previousArrowLink: t.shape({
    text: t.string.isRequired,
    url: t.string,
    attributes: t.any,
  }),
  nextArrowLink: t.shape({
    text: t.string.isRequired,
    url: t.string,
    attributes: t.any,
  }),
};

export default Pagination;
