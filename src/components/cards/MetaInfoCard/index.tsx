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
  const backgroundColor = getBackground(bgColor || 'tertiary');

  return (
    <div className={cn('meta-content py-m px-s l:p-l', backgroundColor)}>
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
