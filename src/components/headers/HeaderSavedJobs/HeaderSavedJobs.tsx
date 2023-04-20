import React, { useState, useEffect } from 'react';
import { getTotal } from '../../../hooks/savedJobsHandler';
import Icon from '../../Icon';

interface HeaderSavedJobsProps {
  gdsApiKey: string;
  gdsApiUrl: string;
  buttonUrl: string;
  ariaLabel?: string;
}

function HeaderSavedJobs({ buttonUrl, gdsApiKey, gdsApiUrl, ariaLabel }: HeaderSavedJobsProps) {
  const [maxCounter, setMaxCounter] = useState<number | null>(null);

  useEffect(() => {
    const getAll = async () => {
      const total = await getTotal(gdsApiKey, gdsApiUrl, localStorage.getItem('saved-jobs'));
      setMaxCounter(total);
    };
    getAll();
  }, [gdsApiKey, gdsApiUrl, localStorage.getItem('saved-jobs')]);

  return (
    <li className="navigation__service-item">
      <a href={buttonUrl} className="navigation__service-link" aria-label={ariaLabel}>
        {maxCounter === null || maxCounter === 0 ? (
          <Icon iconType="heart" iconClassName="icon icon--inline" />
        ) : (
          <Icon iconType="heart-filled" iconClassName="icon icon--inline" />
        )}
        <span className="favorites__counter" id="maxCounter">
          {maxCounter === null ? '' : maxCounter}
        </span>
      </a>
    </li>
  );
}

export default HeaderSavedJobs;
