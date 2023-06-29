import React from 'react';
import { LayoutPreloaderProps } from './LayoutPreloader.types';

function LayoutPreloader({ image }: LayoutPreloaderProps) {
  return (
    <div className="page-preloader flex justify-center items-center">
      {image}
      <span className="loader__wrapper"><span className="loader" /></span>
    </div>
  );
}

export default LayoutPreloader;
