import React from 'react';
import cn from 'classnames';
import { TagCheckboxProps } from './TagCheckbox.types';

function TagCheckbox({
  label,
  value,
  className,
  handleChange,
}: TagCheckboxProps) {
  const ref = React.useRef(null);

  const handleCheckbox = () => {
    if (handleChange) {
      handleChange();
    }
  };

  React.useEffect(() => {
    if (!ref.current) return;
    const { Tags: OrbitComponent } = require('@ffw/randstad-local-orbit/original/js/components/tags');
    new OrbitComponent(ref.current);
  }, []);

  return (
    <div ref={ref} className={cn('tag tag--add', className)} tabIndex={0} role="checkbox" aria-checked aria-labelledby={label}>
      <label htmlFor={label} className="tag__checkbox selection-control selection-control--checkbox">
        <span className="selection-control__input">
          <input onChange={handleCheckbox} id={label} type="checkbox" data-rs-tags-checkbox tabIndex={-1} value={value} />
          <span className="icon selection-control__control" aria-hidden="true">
            <svg viewBox="0 0 16 16">
              <polyline points="2.1,8.5 6.2,12.4 13.9,5.1" />
            </svg>
          </span>
        </span>
        {/* Disabled this because we already have a label with htmlFor. */}
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor={label} className="tag__text selection-control__label" id={label}>{label}</label>
      </label>
    </div>
  );
}

export default TagCheckbox;
