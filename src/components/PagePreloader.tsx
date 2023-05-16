import React from 'react';
import { Code, List } from 'react-content-loader';
import styles from 'styled-components';

const PreloaderWrapper = styles.div`
    position: absolute;
    left: 0;
    right: 0;
    z-index: 2;
    width: 100vw;
    background: white;
`;

function PagePreloader() {
  return (
    <PreloaderWrapper className="block__wrapper wrapper">
      <div className="block__header">
        <Code uniqueKey="loader-1" />
      </div>
      <div className="block__content block__content--xs block__content--align-right">
        <ul className="list-items">
          <List uniqueKey="loader-2" />
          <List uniqueKey="loader-3" />
        </ul>
      </div>
    </PreloaderWrapper>
  );
}

export default PagePreloader;
