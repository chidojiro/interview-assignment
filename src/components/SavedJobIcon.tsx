import React, {
  useState,
} from 'react';
import cn from 'classnames';
import Icon from './Icon';
import { postSavedJobs, deleteSavedJobs } from '../hooks/savedJobsHandler';

interface SavedJobIconProps {
  size?: string;
  gdsApiKey: string;
  gdsApiUrl: string;
  savedJobId?: string;
  jobPostingWebDetailId: string;
  returnJobPostingWebDetailId?: (jobPostingWebDetailId: string) => void;
}

function SavedJobIcon({
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
      setIconFilled('');
    } else {
      await postSavedJobs(gdsApiKey, gdsApiUrl, jobPostingWebDetailId);
      setIconFilled('filled');
    }
  };

  return (
    <button type="button" className={buttonClasses} aria-pressed={savedJobId ? 'true' : 'false'} id={`fav-${savedJobId}`} onClick={onIconClick}>
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
