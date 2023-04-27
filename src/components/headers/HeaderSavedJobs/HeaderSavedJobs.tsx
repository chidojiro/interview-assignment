import React, { useState, useEffect } from 'react';
import { getSavedJobsNumber } from '../../../hooks/savedJobsHandler';
import Icon from '../../Icon';

interface HeaderSavedJobsProps {
  gdsApiKey: string;
  gdsApiUrl: string;
  buttonUrl: string;
  ariaLabel: string;
}

function HeaderSavedJobs({
  buttonUrl,
  gdsApiKey,
  gdsApiUrl,
  ariaLabel,
}: HeaderSavedJobsProps) {
  const [maxCounter, setMaxCounter] = useState<number>(0);

  useEffect(() => {
    const getAll = async () => {
      const total = await getSavedJobsNumber(gdsApiKey, gdsApiUrl, localStorage.getItem('saved-jobs'));
      if (total) {
        setMaxCounter(total);
      } else {
        setMaxCounter(0);
      }
    };
    window.addEventListener('saved-jobs', () => {
      getAll();
    });
    getAll();
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
