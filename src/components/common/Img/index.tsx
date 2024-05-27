import React, { ImgHTMLAttributes } from 'react';

function Img({ src, alt, ...props } : ImgHTMLAttributes<HTMLImageElement>) {
  const path = !process.env.NEXT_PUBLIC_RESOURCE_PREFIX ? '/img' : `${process.env.NEXT_PUBLIC_RESOURCE_PREFIX}/src/assets/img/`;

  return (
    <img src={`${path}/${src}`} alt={alt} {...props} />
  );
}

export default Img;
