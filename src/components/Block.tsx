import React from 'react';
import cn from 'classnames';

interface Block {
  /** Rendered inside block_content */
  children: React.ReactNode;
  /** Rendered before block_content */
  beforeContent?: React.ReactNode;
  /** Rendered after block_content */
  afterContent?: React.ReactNode;
  type?: 'filter';
  contentSize?: 's';
  align?: 'left' | 'right';
  title?: string;
}

/**
 * Global element used in most components. See [here](https://randstad.design/getting-started/developers/block-header-content/).
 */
function Block({
  children, beforeContent, afterContent, type, contentSize, align, title,
}: Block) {
  return (
    <div className={cn('block', {
      'block--filter': type === 'filter',
    })}
    >
      <div className="block__wrapper wrapper">
        {title && (
          <div className="block__header">
            <h2 className="block__title">{title}</h2>
          </div>
        )}
        {beforeContent}
        <div className={cn('block__content', {
          [`block__content--${contentSize}`]: contentSize,
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
