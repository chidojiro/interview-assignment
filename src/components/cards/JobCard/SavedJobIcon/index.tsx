import React, {
  useState,
} from 'react';
import cn from 'classnames';
import Icon from '../../../common/Icon';
import { postSavedJobs, deleteSavedJobs, handleAnonymousSavedJobs } from '../../../../utils/savedJobsHandler';
import { SavedJobIconProps } from './SavedJobIcon.types';
import getUserData from '../../../../utils/getUserData';

function SavedJobIcon({
  size = 'l',
  gdsApiKey,
  gdsApiUrl,
  searchApiKey,
  searchApiUrl,
  savedJobId,
  jobPostingWebDetailId,
  ariaLabel,
  returnJobPostingWebDetailId,
  locale,
}: SavedJobIconProps) {
  const [iconFilled, setIconFilled] = useState(savedJobId);
  const iconClasses = cn('icon', {
    [`icon--${size}`]: size,
  }, 'icon--inline');
  const buttonClasses = cn('icon__toggler', 'icon--l', {
    'icon__toggler--active': savedJobId || iconFilled,
  });
  const onIconClick = async () => {
    const { loginStatus } = getUserData();

    if (!loginStatus) {
      const filled = await handleAnonymousSavedJobs(searchApiUrl, searchApiKey, jobPostingWebDetailId, locale);
      if (filled && !iconFilled) {
        setIconFilled('filled');
      } else if (!filled && iconFilled) {
        if (returnJobPostingWebDetailId) {
          returnJobPostingWebDetailId(jobPostingWebDetailId);
        }
        setIconFilled('');
      }
    } else if (savedJobId && typeof (savedJobId) === 'string') {
      setIconFilled('');
      const onSuccessfullDelete = await deleteSavedJobs(gdsApiKey, gdsApiUrl, savedJobId);
      if (returnJobPostingWebDetailId && onSuccessfullDelete) {
        returnJobPostingWebDetailId(jobPostingWebDetailId);
      }
    } else {
      await postSavedJobs(gdsApiKey, gdsApiUrl, jobPostingWebDetailId);
      setIconFilled('filled');
    }
  };

  return (
    <button type="button" className={buttonClasses} aria-label={ariaLabel} aria-pressed={savedJobId ? 'true' : 'false'} id={`fav-${savedJobId}`} onClick={onIconClick}>
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
