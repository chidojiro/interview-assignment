import React, { useState, useEffect, useCallback } from 'react';
import { getSavedJobsCount } from '../../../utils/savedJobs/savedJobsHandler';
import Icon from '../../common/Icon';
import { HeaderSavedJobsProps } from './HeaderSavedJobs.types';

function HeaderSavedJobs({
  buttonUrl,
  gdsApiKey,
  gdsApiUrl,
  shareIdTokenAcrossSubdomains,
  ariaLabel,
}: HeaderSavedJobsProps) {
  const [maxCounter, setMaxCounter] = useState<number>(0);

  const getAll = useCallback(
    async () => {
      const total = await getSavedJobsCount(gdsApiKey, gdsApiUrl, shareIdTokenAcrossSubdomains);
      if (total) {
        setMaxCounter(total);
      } else {
        setMaxCounter(0);
      }
    },
    [gdsApiKey, gdsApiUrl, shareIdTokenAcrossSubdomains],
  );

  useEffect(() => {
    getAll();
    window.addEventListener('saved-jobs', getAll);
    return () => window.removeEventListener('saved-jobs', getAll);
  }, [getAll]);

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
