import React, { useEffect, useRef } from 'react';
import { Tags } from '@ffw/randstad-local-orbit/original/js/components/tags';
import Icon from '../Icon';

interface TagProps {
  id: string;
  title: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'normal';
}

function Tag({
  id,
  title,
  onClick,
  variant = 'primary',
  size = 'normal',
}: TagProps) {
  let variantClassName = '';
  let sizeClassName = '';
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current?.hasAttribute('data-rs-tags') && !ref.current.hasAttribute('data-rendered')) {
      new Tags(ref.current);
      ref.current.dataset.rendered = 'rendered';
    }
  }, []);

  switch (variant) {
    case 'primary':
      variantClassName = 'tag--primary-7';
      break;
    case 'secondary':
      variantClassName = 'tag--secondary';
      break;
    default:
      variantClassName = 'tag--primary-7';
  }

  switch (size) {
    case 'normal':
      sizeClassName = '';
      break;
    case 'small':
      sizeClassName = 'tag--s';
      break;
    default:
      sizeClassName = '';
  }

  return (
    <div className={`tag tag--remove ${sizeClassName} ${variantClassName} mb-xs mr-xs`} data-rs-tags="" ref={ref} id={id} style={{ maxWidth: '100%' }}>
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
        aria-label="remove"
        id={`${id}-click`}
      >
        <span className="icon icon--s icon--inline">
          <Icon
            iconType="close-16"
          />
        </span>
      </div>
    </div>
  );
}

export default Tag;
