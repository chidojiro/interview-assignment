import React from 'react';
import cn from 'classnames';
import PersonProfile from '../PersonProfile';
import { PersonTypes } from '../PersonProfile/PersonProfile.types';

export interface ContactPersonProps {
  title: string;
  description?: string;
  type?: 'contact-person' | 'meet-the-team';
  profiles: PersonTypes[];
}
function ContactDetails({
  type = 'contact-person', title, description, profiles,
}: ContactPersonProps) {
  let avatarClasses = 'mb-s l:mb-none l:mr-s';
  if (type === 'meet-the-team') avatarClasses = 'mb-s';

  return (
    <div className={cn({
      'block__wrapper wrapper': type === 'contact-person',
      'block__wrapper block__wrapper--stacked wrapper': type === 'meet-the-team',
    })}
    >
      <div className="block__header">
        <h2 className="block__title">{title}</h2>
        {description && <p>{description}</p>}
      </div>
      <div className={cn('block__content', type)}>
        {profiles.map((profile) => (
          <PersonProfile person={profile} avatarClasses={avatarClasses} size="XXL" key={profile.name} />
        ))}
      </div>
    </div>
  );
}

export default ContactDetails;
