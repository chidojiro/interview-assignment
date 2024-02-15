import React from 'react';
import Button from '../../../buttons/Button';
import { JobCardCTAProps } from './JobCardCTA.types';

function JobCardCTA(props: JobCardCTAProps) {
  const {
    jobsPageUrl,
    label,
    svgPath,
    hasBackground,
  } = props;

  return (
    <li className={`cards__item cards__item--more ${hasBackground ? '' : 'bg-variant-brand-primary'}`} data-rs-card="">
      <img src={`${svgPath || ''}/img/Binoculars_Icon_White_RGB.svg`} alt="" />
      <div className="cards__footer">
        <Button href={jobsPageUrl} className="button--full-width button--off-white">{label}</Button>
      </div>
    </li>
  );
}

export default JobCardCTA;
