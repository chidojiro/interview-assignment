import React from "react";
import ArrowLink from "./ArrowLink";
import LinkElement from "./LinkElement";
import { LinkProps, Link } from 'react-router-dom'

export interface Item {
  text: string,
  url: string,
  attributes?: React.ComponentPropsWithoutRef<"a"> | LinkProps,
}

export interface PaginationBase {
  as?: typeof Link | "a",
}

export interface Pagination extends PaginationBase {
  pages: Item[]
  currentPage: string,
  /** Define the tag of the link element. By default its `<a>`. Could be also `<Link>` */
  previousArrowLink?: Item,
  /** `attrubutes` are spread in the component. You can pass from `data-attributes` to events */
  nextArrowLink?: Item,
}

/**
 * A component to let the user navigate through different pages of results. See [here](https://randstad.design/components/core/pagination/)
 *
 */
const Pagination = ({ pages, currentPage, as = "a", previousArrowLink, nextArrowLink } : Pagination) => {

  if (pages.length < 1) return null;

  return (
    <nav className="pagination divider divider--top" data-rs-pagination="">
      <ul className="pagination__list" data-rs-pagination-list="">
        <ArrowLink as={as} data={previousArrowLink} direction="left" />
        {pages.map(({ text, ...rest }, i) => {
          return (
            <li key={i} className="pagination__item">
              {parseInt(currentPage) == parseInt(text) ? (
                <span>{text}</span>
              ) : (
                <LinkElement as={as} props={rest}>{text}</LinkElement>
              )}
            </li>
          );
        })}
        <ArrowLink as={as} data={nextArrowLink} direction="right" />
      </ul>
    </nav>
  );
};

export default Pagination;

<Pagination
  pages={[
    { text: "1", url: "#", attributes: {
      onClick: () => {},
      to: "#"
    } },
  ]}
  as={Link}
  currentPage="0"
/>;
