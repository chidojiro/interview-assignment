import React, { useState, useEffect } from 'react';
import { getSavedJobs } from '../../../hooks/savedJobsHandler';
import Icon from '../../Icon';

interface HeaderSavedJobsProps {
  gdsApiKey?: string;
  gdsApiUrl?: string;
  buttonUrl?: string;
  ariaLabel?: string;
}

function HeaderSavedJobs({ buttonUrl, gdsApiKey, gdsApiUrl, ariaLabel }: HeaderSavedJobsProps) {
  const [maxCounter, setMaxCounter] = useState(0);
  useEffect(() => {
    const getAllSavedJobs = async () => {
      if (gdsApiKey && gdsApiUrl) {
        const allSavedJObs = await getSavedJobs(gdsApiKey, gdsApiUrl);
        if (allSavedJObs) {
          setMaxCounter(allSavedJObs.totalElements);
        }
      }
    };
    getAllSavedJobs();
  }, [gdsApiKey, gdsApiUrl]);
  return (
    <li className="navigation__service-item">
      <a href={buttonUrl} className="navigation__service-link" aria-label={ariaLabel}>
        {maxCounter === 0 ? (
          <Icon iconType="heart" iconClassName="icon icon--inline" />
        ) : (
          <Icon iconType="heart-filled" iconClassName="icon icon--inline" />
        )}
        <span className="favorites__counter" id="maxCounter">
          {maxCounter}
        </span>
      </a>
    </li>
  );
}

export default HeaderSavedJobs;
