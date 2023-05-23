import React, { FC } from 'react';
import { PagePreloaderProps } from './PagePreloader.props';

const PagePreloader: FC<PagePreloaderProps> = ({ image }) => {
  return (
    <div className="page-preloader flex justify-center items-center">
      {image}
      <span className="loader__wrapper"><span className="loader" /></span>
    </div>
  );
}

export default PagePreloader;
