import React from 'react';
import LinkElement from '../LinkElement';
import { ArrowLinkProps } from './ArrowLink.types';

function ArrowLink({ data, direction, as }: ArrowLinkProps) {
  if (!data) return null;

  return (
    <li className="pagination__item">
      <LinkElement as={as} props={data} className="pagination__control">
        <span className="icon icon--inline" aria-hidden="true">
          <svg>
            <use
              xlinkHref={`${process.env.NEXT_PUBLIC_RESOURCE_PREFIX}/src/assets/img/icons.svg#${direction === 'left' ? 'arrow-left' : 'arrow-right'
              }`}
            />
          </svg>
        </span>
        <span className="hidden--visually">{data.text}</span>
      </LinkElement>
    </li>
  );
}

export default ArrowLink;
