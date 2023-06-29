import React from 'react';
import cn from 'classnames';
import { BlockProps } from './Block.types';

/**
 * Global element used in most components. See [here](https://randstad.design/getting-started/developers/block-header-content/).
 */
function Block({
  children,
  beforeContent,
  afterContent,
  typeFilter,
  smallContentSize,
  align,
  title,
  stacked = false,
  blockHeaderClasses = '',
  blockContentClasses = '',
}: BlockProps) {
  return (
    <div className={cn('block', {
      'block--filter': typeFilter,
    })}
    >
      <div className={cn('block__wrapper wrapper', {
        'block__wrapper--stacked job-details': stacked,
      })}
      >
        {title && (
          <div className={cn('block__header', blockHeaderClasses)}>
            <h2 className="block__title">{title}</h2>
          </div>
        )}
        {beforeContent}
        <div className={cn('block__content', blockContentClasses, {
          'block__content--s': smallContentSize,
          [`block__content--align-${align}`]: align,
        })}
        >
          {children}
        </div>
        {afterContent}
      </div>
    </div>
  );
}

export default Block;
