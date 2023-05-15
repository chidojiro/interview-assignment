import React from 'react';
import cn from 'classnames';

interface Block {
  /** Rendered inside block_content */
  children: React.ReactNode;
  /** Rendered before block_content */
  beforeContent?: React.ReactNode;
  /** Rendered after block_content */
  afterContent?: React.ReactNode;
  typeFilter?: boolean;
  smallContentSize?: boolean;
  align?: 'left' | 'right';
  title?: string;
  stacked?: boolean;
  blockContentClasses?: string;
}

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
  blockContentClasses = ''
}: Block) {
  return (
    <div className={cn('block', {
      'block--filter': typeFilter,
    })}
    >
      <div className={cn('block__wrapper wrapper', {
        'block__wrapper--stacked job-details': stacked
      })}>
        {title && (
          <div className="block__header">
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
