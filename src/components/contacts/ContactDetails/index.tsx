import React from 'react';
import cn from 'classnames';
import PersonProfile from '../PersonProfile';
import { ContactPersonProps } from './ContactDetails.types';

function ContactDetails({
  type = 'contact-person', title, description, profiles, backgroundClass,
}: ContactPersonProps) {
  let avatarClasses = 'mb-s l:mb-none l:mr-s';
  if (type === 'meet-the-team') avatarClasses = 'mb-s';

  if (!profiles || !profiles[0].name) return null;

  return (
    <div className={cn('block', backgroundClass)}>
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
    </div>
  );
}

export default ContactDetails;
