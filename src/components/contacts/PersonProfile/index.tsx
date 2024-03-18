import React from 'react';
import cn from 'classnames';
import { ImageSizeClasses } from '../ImageSizeClasses.types';
import { PersonProfileTypes } from './PersonProfile.types';
import Icon from '../../common/Icon';
import SocialLinks from '../../common/SocialLinks';
import {Button} from "../../../index";

function PersonProfile({
  size = 'XXL', avatarClasses = 'mb-s l:mb-none l:mr-s', person, personProfileClasses, personInfoClasses, contactForm,
}: PersonProfileTypes) {
  const sizeClasses: ImageSizeClasses = {
    XS: 'avatar--XS',
    S: 'avatar--S',
    M: 'avatar--M',
    L: 'avatar--L',
    XL: 'avatar--XL',
    XXL: 'avatar--XXL',
  };

  if (!person || !person.name) return null;
  const {contactFormButtonText, onContactFormButtonClicked} = contactForm || {};

  return (
    <div className={cn('person__profile', personProfileClasses)}>
      <div className={cn('avatar aspect-ratio aspect-ratio--1-1', sizeClasses[size], avatarClasses, {
        'avatar__initials': !person.pictureUrl,
      })}
      >
        {person.pictureUrl
          ? <img src={person.pictureUrl} alt={person.name} /> : <span>{person.initials}</span>}
      </div>

      <div className={cn('person__info', personInfoClasses)}>
        {person.name && <h3 className="person__name">{person.name}</h3>}
        {person.title && <h2 className="person__title text--alternative">{person.title}</h2>}

        {person.description && (
          <p className="person__description">
            {person.description}
          </p>
        )}

        {person.phone || person.email
          ? (
            <ul className="contact-details">
              {person.phone
              && (
                <li className="contact-details__item">
                  <a href={`tel:${person.phone}`} className="contact-details__link" aria-label="">
                    <Icon iconType="phone" iconClassName="icon icon--inline icon--hover" />
                    <span>{person.phone}</span>
                  </a>
                </li>
              )}
              {person.email && !contactForm
              && (
                <li className="contact-details__item">
                  <a href={`mailto:${person.email}`} className="contact-details__link" aria-label="">
                    <Icon iconType="email" iconClassName="icon icon--inline icon--hover" />
                    <span>{person.email}</span>
                  </a>
                </li>
              )}
              {contactFormButtonText && onContactFormButtonClicked && (
                <Button handleClick={onContactFormButtonClicked}>
                  {contactFormButtonText}
                </Button>
              )}
            </ul>
          ) : null}

        {person.socialLinks
          && <SocialLinks items={person.socialLinks} />}
      </div>
    </div>
  );
}

export default PersonProfile;
