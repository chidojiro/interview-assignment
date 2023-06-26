import React, { useState, useEffect } from 'react';
import { getSavedJobsCount } from '../../../hooks/savedJobsHandler';
import Icon from '../../Icon';
import { HeaderSavedJobsProps } from './HeaderSavedJobs.types';

function HeaderSavedJobs({
  buttonUrl,
  gdsApiKey,
  gdsApiUrl,
  ariaLabel,
}: HeaderSavedJobsProps) {
  const [maxCounter, setMaxCounter] = useState<number>(0);

  useEffect(() => {
    const getAll = async () => {
      const total = await getSavedJobsCount(gdsApiKey, gdsApiUrl);
      if (total) {
        setMaxCounter(total);
      } else {
        setMaxCounter(0);
      }
    };
    getAll();
    window.addEventListener('saved-jobs', getAll);
    return () => window.removeEventListener('saved-jobs', getAll);
  }, [gdsApiKey, gdsApiUrl]);

  return (
    <li className="navigation__service-item">
      <a href={buttonUrl} className="navigation__service-link" aria-label={ariaLabel}>
        {maxCounter === null || maxCounter === 0 ? (
          <Icon iconType="heart" iconClassName="icon icon--inline" />
        ) : (
          <Icon iconType="heart-filled" iconClassName="icon icon--inline" />
        )}
        <span className="favorites__counter hidden--until-l" id="maxCounter">
          {maxCounter}
        </span>
      </a>
    </li>
  );
}

export default HeaderSavedJobs;
