import React, { KeyboardEvent } from 'react';
import Button from './button/Button';

interface ShowMoreProps {
  onClick: (event: React.MouseEvent | KeyboardEvent) => void;
  jobsList: Array<Object>;
  totalJobs: Array<Object>;
  offsetPerPage: number;
  ariaLabel: string;
  textJobsSeen: string;
  textViewMore: string;
}

const ShowMore = ({ onClick, jobsList, totalJobs, ariaLabel = 'show more', textJobsSeen, textViewMore }: ShowMoreProps) => {
  if (jobsList.length < 1 || totalJobs.length < 1) return null;
  if (jobsList.length === totalJobs.length) return null;

  const indicatorAmount = (100 * jobsList.length) / totalJobs.length;

  const onPressShowMore = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      onClick(event);
    }
  };

  return (
    <div className="show-more">
      <div className="show-more__indicator">
        <div className="indicator-percentage">
          <div className="indicator-percentage__background">
            <div className="indicator-percentage__amount" style={{ width: `${indicatorAmount}%` }} />
          </div>
        </div>
      </div>
      <div className="section-separator section-separator--border">
        <span>{textJobsSeen}</span>
      </div>
      <Button href="#" className='button-m' aria-label={ariaLabel} handleClick={onClick} onKeyDown={onPressShowMore}>
        {textViewMore}
      </Button>
    </div>
  );
};

export default ShowMore;
