import React from 'react';
import ArrowLink from '../ArrowLink';
import LinkElement from '../LinkElement';
import { PaginationProps } from './Pagination.types';

/**
 * A component to let the user navigate through different pages of results. See [here](https://randstad.design/components/core/pagination/)
 *
 */
function Pagination({
  pages, currentPage, as = 'a', previousArrowLink, nextArrowLink,
} : PaginationProps) {
  if (pages.length < 1) return null;

  return (
    <nav className="pagination divider divider--top" data-rs-pagination="">
      <ul className="pagination__list" data-rs-pagination-list="">
        <ArrowLink as={as} data={previousArrowLink} direction="left" />
        {pages.map(({ text, ...rest }) => (
          <li key={text} className="pagination__item">
            {(+currentPage === +text) ? (
              <span>{text}</span>
            ) : (
              <LinkElement as={as} props={rest}>{text}</LinkElement>
            )}
          </li>
        ))}
        <ArrowLink as={as} data={nextArrowLink} direction="right" />
      </ul>
    </nav>
  );
}

export default Pagination;
