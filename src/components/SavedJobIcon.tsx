import React, {
  useState,
} from 'react';
import cn from 'classnames';
import Icon from './Icon';
import { postSavedJobs, deleteSavedJobs, saveCountOfSavedJobs } from '../hooks/savedJobsHandler';

interface SavedJobIconProps {
  id: string;
  size?: string;
  gdsApiKey: string;
  gdsApiUrl: string;
  savedJobId: string | boolean;
  jobPostingWebDetailId: string;
  returnJobPostingWebDetailId?: (jobPostingWebDetailId: string) => void;
}

function SavedJobIcon({
  id,
  size = 'l',
  gdsApiKey,
  gdsApiUrl,
  savedJobId,
  jobPostingWebDetailId,
  returnJobPostingWebDetailId,
}: SavedJobIconProps) {
  const [iconFilled, setIconFilled] = useState(savedJobId);
  const iconClasses = cn('icon', {
    [`icon--${size}`]: size,
  }, 'icon--inline');
  const buttonClasses = cn('icon__toggler', 'icon--l', {
    'icon__toggler--active': savedJobId || iconFilled,
  });
  const onIconClick = async () => {
    if (returnJobPostingWebDetailId) {
      returnJobPostingWebDetailId(jobPostingWebDetailId);
    }

    if (savedJobId && typeof (savedJobId) === 'string') {
      await deleteSavedJobs(gdsApiKey, gdsApiUrl, savedJobId);
      await saveCountOfSavedJobs(gdsApiKey, gdsApiUrl);
      setIconFilled(false);
    } else {
      await postSavedJobs(gdsApiKey, gdsApiUrl, jobPostingWebDetailId);
      await saveCountOfSavedJobs(gdsApiKey, gdsApiUrl);
      setIconFilled('filled');
    }
  };

  return (
    <button type="button" className={buttonClasses} aria-pressed={savedJobId ? 'true' : 'false'} id={`fav-${id}`} onClick={onIconClick}>
      <span className={iconClasses}>
        <Icon iconType="heart-30" iconClassName={null} />
      </span>
      <span className={iconClasses}>
        <Icon iconType="heart-filled-30" iconClassName={null} />
      </span>
    </button>
  );
}

export default SavedJobIcon;
