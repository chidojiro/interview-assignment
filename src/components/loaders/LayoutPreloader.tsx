import React, { FC } from 'react';
import { LayoutPreloaderProps } from './LayoutPreloader.props';

const LayoutPreloader: FC<LayoutPreloaderProps> = ({ image }) => {
  return (
    <div className="page-preloader flex justify-center items-center">
      {image}
      <span className="loader__wrapper"><span className="loader" /></span>
    </div>
  );
}

export default LayoutPreloader;
