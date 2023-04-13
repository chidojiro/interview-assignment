import React from 'react';
import Button from '../button/Button';

interface JobCardCTAProps {
  label: string;
  jobsPageUrl: string;
  hasBackground?: string;
}

const JobCardCTA: React.FC<JobCardCTAProps> = (props) => {
  const {
    jobsPageUrl,
    label,
    hasBackground,
  } = props;

  // Fix for UI lib
  const svgPath = !process.env.NEXT_PUBLIC_RESOURCE_PREFIX ? '' : process.env.NEXT_PUBLIC_RESOURCE_PREFIX;

  return (
    <li className={`cards__item cards__item--more ${hasBackground ? '' : 'bg-variant-brand-primary'}`} data-rs-card="">
      <img src={`${svgPath}/src/assets/img/Binoculars_illustration_UseBackgroundBlue_RGB.svg`} alt="" />
        <div className="cards__footer">
        <Button href={jobsPageUrl} className='button--full-width button--off-white'>{label}</Button>
        </div>
    </li>
  );
};

export default JobCardCTA;
