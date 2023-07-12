import React from 'react';
import cn from 'classnames';
import { LoaderProps } from './Loader.types';

function Loader({ color, className }: LoaderProps) {
  const loaderClassNames = cn('loader__wrapper', className, {
    [`loader__wrapper--${color}`]: color,
  });

  return (
    <span className={loaderClassNames}>
      <span
        className="loader"
      />
    </span>
  );
}

export default Loader;
