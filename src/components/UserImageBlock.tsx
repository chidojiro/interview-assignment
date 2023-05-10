import React, { useState, useEffect } from 'react';

type ImageSizeClasses = {
  'XS': string,
  'S': string,
  'M': string,
  'L': string,
  'XL': string,
};

type UserImageBlockProps = {
  size: keyof ImageSizeClasses,
  picture?: {
    filename: string,
    url?: string,
  },
  initials: string,
};

function UserImageBlock({ size, picture, initials }: UserImageBlockProps) {
  const sizeClasses: ImageSizeClasses = {
    XS: 'avatar--XS',
    S: 'avatar--S',
    M: 'avatar--M',
    L: 'avatar--L',
    XL: 'avatar--XL',
  };

  const [userInitials, setUserInitials] = useState('');

  useEffect(() => {
    setUserInitials(initials);
  }, [initials]);

  return (
    <div className={`avatar avatar__initials ${sizeClasses[size]}`}>
      {picture && picture.url
        ? <img src={picture.url} alt={initials} sizes="100vw" />
        : <span>{userInitials}</span>}
    </div>
  );
}

export default UserImageBlock;
