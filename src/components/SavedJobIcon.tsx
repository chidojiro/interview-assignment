import React, {
  useState,
} from 'react';
import cn from 'classnames';
import Icon from './Icon';
import { postSavedJobs, deleteSavedJobs, saveCountOfSavedJobs } from '../hooks/savedJobsHandler';

interface SavedJobIconProps {
  id: string | boolean;
  size?: string;
  gdsApiKey: string;
  gdsApiUrl: string;
  jobPostingWebDetailId: string;
  returnJobPostingWebDetailId?: (jobPostingWebDetailId: string) => void;
}

function SavedJobIcon({
  id,
  size = 'l',
  gdsApiKey,
  gdsApiUrl,
  jobPostingWebDetailId,
  returnJobPostingWebDetailId,
}: SavedJobIconProps) {
  const [iconFilled, setIconFilled] = useState(id);
  const iconClasses = cn('icon', {
    [`icon--${size}`]: size,
  }, 'icon--inline');
  const onIconClick = async () => {
    if (returnJobPostingWebDetailId) {
      returnJobPostingWebDetailId(jobPostingWebDetailId);
    }

    if (id && typeof (id) === 'string') {
      await deleteSavedJobs(gdsApiKey, gdsApiUrl, id);
      await saveCountOfSavedJobs(gdsApiKey, gdsApiUrl);
      setIconFilled(false);
    } else {
      await postSavedJobs(gdsApiKey, gdsApiUrl, jobPostingWebDetailId);
      await saveCountOfSavedJobs(gdsApiKey, gdsApiUrl);
      setIconFilled('filled');
    }
  };

  return (
    <button className={`icon__toggler icon--l ${id || iconFilled ? 'icon__toggler--active' : ''} `} aria-pressed={id ? 'true' : 'false'} id={`fav-${id}`} onClick={onIconClick}>
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
