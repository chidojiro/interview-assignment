import React from 'react';
import { Code, List } from 'react-content-loader';

function PagePreloader() {
  return (
    <div className="block__wrapper wrapper">
      <div className="block__header">
        <Code uniqueKey="loader-1" />
      </div>
      <div className="block__content block__content--xs block__content--align-right">
        <ul className="list-items">
          <List uniqueKey="loader-2" />
          <List uniqueKey="loader-3" />
        </ul>
      </div>
    </div>
  );
}

export default PagePreloader;
