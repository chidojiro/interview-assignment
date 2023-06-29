import React from 'react'
import LinkElement from './LinkElement';
import { PaginationBase, Item } from './index'

interface ArrowLink extends PaginationBase {
  data?: Item,
  direction: "left" | "right",
}

const ArrowLink = ({ data, direction, as }: ArrowLink) => {
  if (!data) return null;

  return (
    <li className="pagination__item">
      <LinkElement as={as} props={data} className="pagination__control">
        <span className="icon icon--inline" aria-hidden="true">
          <svg>
            <use
              xlinkHref={`${process.env.NEXT_PUBLIC_RESOURCE_PREFIX}/src/assets/img/icons.svg#${direction === "left" ? "arrow-left" : "arrow-right"
                }`}></use>
          </svg>
        </span>
        <span className="hidden--visually">{data.text}</span>
      </LinkElement>
    </li>
  )
}

export default ArrowLink
