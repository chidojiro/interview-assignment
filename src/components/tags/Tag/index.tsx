import React, { useEffect, useRef } from 'react';
import { Tags } from '@ffw/randstad-local-orbit/original/js/components/tags';
import cn from 'classnames';
import Icon from '../../common/Icon';
import { TagProps } from './Tag.types';

/**
 *
 * A tag component with the option to remove item. See [here](https://randstad.design/components/core/tags/)
 *
 */

// TODO: Add select tag option here when needed.
function Tag({
  id,
  title,
  onClick,
  variant = 'primary',
  size = 'normal',
  ariaLabel = 'remove',
}: TagProps) {
  const tagClasses = cn('tag tag--remove mb-xs mr-xs', {
    'tag--primary-7': variant === 'primary',
    'tag--secondary': variant === 'secondary',
    'tag--s': size === 'small',
  });

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current?.hasAttribute('data-rs-tags') && !ref.current.hasAttribute('data-rendered')) {
      new Tags(ref.current);
      ref.current.dataset.rendered = 'rendered';
    }
  }, []);

  return (
    <div className={tagClasses} data-rs-tags="" ref={ref} id={id} style={{ maxWidth: '100%' }}>
      <span className="tag__text text-ellipsis">
        {title}
      </span>
      <div
        className="tag__close"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            return onClick;
          }
          return null;
        }}
        role="button"
        data-rs-tags-remove=""
        aria-label={ariaLabel}
        id={`${id}-click`}
      >
        <span className="icon icon--s icon--inline">
          <Icon
            iconType={`close-${size === 'normal' ? '16' : '8'}`}
          />
        </span>
      </div>
    </div>
  );
}

export default Tag;
