import React, {
  useState,
} from 'react';
import cn from 'classnames';
import Icon from './Icon';
import { postSavedJobs, deleteSavedJobs } from '../hooks/savedJobsHandler';

interface FavoriteIconProps {
  id: string;
  favorite: boolean;
  size?: string;
  gdsApiKey: string;
  gdsApiUrl: string;
  jobPostingWebDetailId: string;
  savedJobId: string;
}

function FavoriteIcon({
  id,
  favorite = false,
  size = 'l',
  gdsApiKey,
  gdsApiUrl,
  jobPostingWebDetailId,
  savedJobId,
}: FavoriteIconProps) {
  const [iconFilled, setIconFilled] = useState(favorite);
  const iconClasses = cn('icon', {
    [`icon--${size}`]: size,
  }, 'icon--inline');
  const onIconClick = async () => {
    if (!favorite) {
      await postSavedJobs(gdsApiKey, gdsApiUrl, jobPostingWebDetailId);
      setIconFilled(true);
    } else {
      deleteSavedJobs(gdsApiKey, gdsApiUrl, savedJobId);
      setIconFilled(false);
    }
  };

  return (
    <button className={`icon__toggler icon--l ${favorite || iconFilled ? 'icon__toggler--active' : ''} `} aria-pressed={favorite ? 'true' : 'false'} id={`fav-${id}`} onClick={onIconClick}>
      <span className={iconClasses}>
        <Icon iconType="heart-30" iconClassName={null} />
      </span>
      <span className={iconClasses}>
        <Icon iconType="heart-filled-30" iconClassName={null} />
      </span>
    </button>
  );
};

export default FavoriteIcon;
