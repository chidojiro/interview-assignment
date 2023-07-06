import React from 'react';
import LogoDefault from '../themes/LogoDefault';
import LogoSph from '../themes/LogoSph';
import LogoTT from '../themes/LogoTT';
import { LogoProps } from './Logo.types';

function Logo({ theme, homepageUrl }: LogoProps) {
  let logo;

  switch (theme) {
    case 'sph':
      logo = <LogoSph />;
      break;
    case 'tt':
      logo = <LogoTT />;
      break;
    default:
      logo = <LogoDefault />;
      break;
  }

  return (
    <a className="logo" href={homepageUrl}>
      {logo}
    </a>
  );
}

export default Logo;
