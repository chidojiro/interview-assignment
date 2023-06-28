import React from 'react';
import cn from 'classnames';
import useOrbitComponent from '../../../../hooks/useUserOrbitComponent';
import { JobCardListProps } from './JobCardList.types';

function JobCardList({
  activeView = 'grid',
  isSlider = false,
  children,
}: JobCardListProps) {
  const listClasses = cn('cards__list', {
    [`cards__list--format-${activeView}`]: activeView && !isSlider,
    'cards__list--format-carousel carousel--on-s carousel--on-m ': isSlider,
  });

  const [ref] = useOrbitComponent('carousel');

  const dataAttr = isSlider ? {
    'data-rs-carousel': 'cards',
    ref,
  } : {};

  return (
    <div className="cards">
      <ul className={listClasses} {...dataAttr}>
        {children}
      </ul>
    </div>
  );
}
export default JobCardList;
