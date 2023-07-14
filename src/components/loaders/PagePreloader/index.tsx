import React from 'react';
import { Code, List } from 'react-content-loader';
import cn from 'classnames';
import { PagePreloaderProps } from './PagePreloader.types';

function PagePreloader({ header = true }: PagePreloaderProps) {
  const wrapperClasses = cn('block__wrapper wrapper', {
    'px-none': !header,
  });

  const contentClasses = cn('block__content block__content--xs block__content--align-right', {
    'ml-none': !header,
  });
  return (
    <div className={wrapperClasses}>
      {header && (
        <div className="block__header">
          <Code uniqueKey="loader-1" />
        </div>
      )}
      <div className={contentClasses}>
        <ul className="list-items">
          <List uniqueKey="loader-2" />
          <List uniqueKey="loader-3" />
        </ul>
      </div>
    </div>
  );
}

export default PagePreloader;
