import React, { useState, useEffect } from 'react';
import { getCountSavedJobs } from '../../../hooks/savedJobsHandler';
import Icon from '../../Icon';

interface HeaderSavedJobsProps {
  gdsApiKey: string;
  gdsApiUrl: string;
  buttonUrl?: string;
  ariaLabel?: string;
}

function HeaderSavedJobs({ buttonUrl, gdsApiKey, gdsApiUrl, ariaLabel }: HeaderSavedJobsProps) {
  const [maxCounter, setMaxCounter] = useState<number | null>(null);
  const getTotal = async (gdsApiKey: string, gdsApiUrl: string) => {
    if (gdsApiKey && gdsApiUrl) {
      const total = await getCountSavedJobs(gdsApiKey, gdsApiUrl);
      if (total) {
        setMaxCounter(total);
      }
      return total;
    }
  };

  useEffect(() => {
    getTotal(gdsApiKey, gdsApiUrl);
  }, [gdsApiKey, gdsApiUrl]);
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
