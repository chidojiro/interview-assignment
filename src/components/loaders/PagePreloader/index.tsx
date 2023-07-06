import React from 'react';
import { Code, List } from 'react-content-loader';
import { PagePreloaderProps } from './PagePreloader.types';

function PagePreloader({ noHeader = false }: PagePreloaderProps) {
  return (
    <div className={`block__wrapper wrapper  ${noHeader ? 'px-none' : ''}`}>
      {noHeader ? null : (
        <div className="block__header">
          <Code uniqueKey="loader-1" />
        </div>
      ) }
      <div className={`block__content block__content--xs block__content--align-right  ${noHeader ? 'ml-none' : ''}`}>
        <ul className="list-items">
          <List uniqueKey="loader-2" />
          <List uniqueKey="loader-3" />
        </ul>
      </div>
    </div>
  );
}

export default PagePreloader;
