import React, { KeyboardEvent } from 'react';
import Button from './buttons/Button';

interface ShowMoreProps {
  onClick: (event: React.MouseEvent | KeyboardEvent) => void;
  listLength: number;
  totalLength: number;
  ariaLabel: string;
  textSeen: string;
  textViewMore: string;
  classButton?: string;
  loading: boolean;
}

function ShowMore({
  onClick, listLength, totalLength, ariaLabel, textSeen, textViewMore, classButton = 'button--m', loading,
}: ShowMoreProps) {
  if (listLength < 1 || totalLength < 1) return null;
  if (listLength === totalLength) return null;

  const indicatorAmount = (100 * listLength) / totalLength;

  const onPressShowMore = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      onClick(event);
    }
  };

  const buttonProps: { loader?: boolean, disabled?: boolean } = {};

  if (loading) {
    buttonProps.loader = loading;
    buttonProps.disabled = loading;
  }

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
        <span>{textSeen}</span>
      </div>
      <Button {...buttonProps} className={classButton} aria-label={ariaLabel} handleClick={onClick} onKeyDown={onPressShowMore}>
        {textViewMore}
      </Button>
    </div>
  );
}

export default ShowMore;
