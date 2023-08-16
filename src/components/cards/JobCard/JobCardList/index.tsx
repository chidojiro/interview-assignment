import React, { useEffect } from 'react';
import cn from 'classnames';
import Slider from 'react-slick';
import { JobCardListProps } from './JobCardList.types';
import useIsMobile from '../../../../hooks/useIsMobile';

function JobCardList({
  activeView = 'grid',
  isSlider = false,
  children,
}: JobCardListProps) {
  const listClasses = cn('cards__list', {
    [`cards__list--format-${activeView}`]: activeView && !isSlider,
    'cards__list--format-carousel carousel--on-s carousel--on-m ': isSlider,
  });
  const isMobile = useIsMobile();
  const settings = {
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    swipeToSlide: true,
    className: listClasses,
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Triggering resize to fix a bug related to slides/job cards sizes.
      window.dispatchEvent(new Event('resize'));
    }
  }, []);

  return (
    <div className="cards">
      {isSlider && isMobile ? (
        <ul>
          <Slider {...settings}>
            {children}
          </Slider>
        </ul>
      ) : (
        <ul className={listClasses}>
          {children}
        </ul>
      )}
    </div>
  );
}
export default JobCardList;
