import React from 'react';
import cn from 'classnames';
import { getBackground } from '../../../utils/getBackground';
import { MetaInfoCardProps } from './MetaInfoCard.types';

function MetaInfoCard({
  bgColor = 'tertiary',
  title,
  titleColor,
  children,
}: MetaInfoCardProps) {
  const backgroundColor = getBackground(bgColor);

  return (
    <div className={cn('meta-content wrapper py-m', backgroundColor)}>
      {title && (
        <p className={cn('meta-content__title', { [`text-brand-${titleColor}`]: titleColor })}>
          {title}
        </p>
      )}
      {children}
    </div>
  );
}

export default MetaInfoCard;
