import React from 'react';
import LinkElement from '../LinkElement';
import { ArrowLinkProps } from './ArrowLink.types';
import Svg from '../../common/Svg';

function ArrowLink({ data, direction, as }: ArrowLinkProps) {
  if (!data) return null;

  return (
    <li className="pagination__item">
      <LinkElement as={as} props={data} className="pagination__control">
        <span className="icon icon--inline link" aria-hidden="true">
          <Svg icon={direction === 'left' ? 'arrow-left' : 'arrow-right'} />
        </span>
        <span className="hidden--visually">{data.text}</span>
      </LinkElement>
    </li>
  );
}

export default ArrowLink;
