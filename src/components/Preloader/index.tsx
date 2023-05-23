import React, { FC } from 'react';
import { PreloaderProps } from './Preloader.props';

const Preloader: FC<PreloaderProps> = ({ image }) => {
  return (
    <div className="page-preloader flex justify-center items-center">
      {image}
      <span className="loader__wrapper"><span className="loader" /></span>
    </div>
  );
}

export default Preloader;
