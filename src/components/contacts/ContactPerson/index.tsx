/**
 * This component is deprecated. We have created updated versions - ContactDetails and PersonProfile.
 */
import React from 'react';
import { CountryCode } from 'libphonenumber-js';
import parseEmail from '../../../utils/parseEmail';
import parsePhoneNumber from '../../../utils/parsePhoneNumber';
import Icon from '../../common/Icon';

interface ContactPersonProps {
  displayId: string;
  name: string;
  description: string;
  jobTitle: string;
  emailAddress: string;
  phoneNumber: string;
  photo: string;
  countryId: CountryCode | number;
  useLowerCase: boolean;
  overrides: {
    Override: string;
    Name: string;
    Description: string;
    JobTitle: string;
    Email: string;
    Phone: string;
    PhotoUrl: string;
  },
  settings: {
    showPhone: boolean;
    showTitle: boolean;
    showEmail: boolean;
    showBiography: boolean;
    showOfficeOrBranch: boolean;
    officeIcon: string;
  },
  translations: {
    title: string;
    description: string;
    emailTheConsultant: string;
    randstadConsultant: string;
  }
  branchData: {
    title: string;
    url: string;
  }
  dataLayerEmailClick: string;
}

function ContactPerson({
  displayId, name, description, jobTitle, emailAddress, phoneNumber, photo, countryId, useLowerCase, overrides, settings, translations, branchData, dataLayerEmailClick,
}: ContactPersonProps) {
  if (!emailAddress) {
    // If no consultant email is set, try to parse the email in user-friendly format.
    const parsedEmail = parseEmail(emailAddress);
    emailAddress = parsedEmail.indexOf('.aptrack.') !== -1
      ? translations.emailTheConsultant
      : parsedEmail;
  }

  if (!name || !emailAddress) {
    // If there is no name and/or email for contact person,
    // component doesn't cover minimum requirements to be displayed.
    return null;
  }

  // Get contact person data from cms.
  // Extending contact person from DOVA if needed.
  if (Object.keys(overrides).length > 0) {
    if (overrides.Override && overrides.Override === 'override') {
      name = overrides.Name ? overrides.Name : name;
      description = overrides.Description ? overrides.Description : description;
      jobTitle = overrides.JobTitle ? overrides.JobTitle : jobTitle;
      emailAddress = overrides.Email ? overrides.Email : emailAddress;
      phoneNumber = overrides.Phone ? overrides.Phone : phoneNumber;
      photo = overrides.PhotoUrl ? overrides.PhotoUrl : photo;
    } else {
      name = !name && overrides.Name ? overrides.Name : name;
      description = !description && overrides.Description ? overrides.Description : description;
      jobTitle = !jobTitle && overrides.JobTitle ? overrides.JobTitle : jobTitle;
      emailAddress = !emailAddress && overrides.Email ? overrides.Email : emailAddress;
      phoneNumber = !phoneNumber && overrides.Phone ? overrides.Phone : phoneNumber;
      photo = !photo && overrides.PhotoUrl ? overrides.PhotoUrl : photo;
    }
  }

  const contactName = name
    ? useLowerCase
      ? name.toLowerCase()
      : name
    : '';

  if (name === 'Data Entry') {
    name = translations.randstadConsultant;
  }

  // Helper function to extract name initials.
  const extractInitials = (name: string) => {
    // Validate string is in expected format.
    const isValidName = new RegExp(/(\b|\B) (\b|\B)/);

    if (!isValidName.test(name)) {
      return null;
    }
    const nameSplit = name.split(' ');
    const firstName = nameSplit[0];
    let lastName = '';

    // Start from second word in name.
    for (let i = 1; i < nameSplit.length; i++) {
      if (nameSplit[i][0] && nameSplit[i][0] === nameSplit[i][0].toUpperCase()) {
        lastName = nameSplit[i][0];
        break;
      }
    }

    return firstName[0].toUpperCase() + lastName;
  };

  const renderAvatar = () => {
    if (photo) {
      return <img src={photo} alt={name} title={name} />;
    } if (extractInitials(name)) {
      return <span>{extractInitials(name)}</span>;
    }
  };

  const renderPhone = () => {
    if (!phoneNumber || !settings.showPhone) {
      return null;
    }

    const isValidPhone = new RegExp(/^([ 0-9+]+)$/);

    if (!isValidPhone.test(phoneNumber)) {
      return null;
    }

    const parsedPhoneNumber = parsePhoneNumber(phoneNumber, countryId);

    return (
      <li className="contact-details__item">
        <a
          className="contact-details__link"
          href={`tel:${parsedPhoneNumber}`}
          aria-label=""
        >
          <Icon iconType="phone" iconClassName="icon fill-brand--dark-blue icon--inline" />
          <span>{parsedPhoneNumber}</span>
        </a>
      </li>
    );
  };

  const renderEmail = () => {
    if (!settings.showEmail) {
      return null;
    }

    // Validate email string is an actual email.
    // It's based on RFC 2822 - https://www.ietf.org/rfc/rfc2822.txt
    const isValidEmail = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i);
    const emailField = emailAddress;
    const referenceNumber = displayId;
    const mailToSubject = `${encodeURIComponent(jobTitle).toLowerCase()}: ${referenceNumber}`;

    if (!isValidEmail.test(emailField)) {
      return null;
    }

    return (
      <li className="contact-details__item">
        <a
          className="contact-details__link"
          href={`mailto:${emailField}?subject=${mailToSubject}`}
          onMouseDown={() => eval(dataLayerEmailClick)}
        >
          <Icon iconType="email" iconClassName="icon fill-brand--dark-blue icon--inline" />
          <span>{emailField}</span>
        </a>
      </li>
    );
  };

  const renderOffice = () => {
    // TODO: Will eventually come from the API;
    const contactPersonBranchData = {
      title: branchData.title,
      url: branchData.url,
    };

    const renderOfficeIcon = (icon = 'building') => (
      <Icon iconType={icon} iconClassName="icon fill-brand--dark-blue icon--inline" />
    );

    if (!contactPersonBranchData || !contactPersonBranchData.title || !contactPersonBranchData.url || !settings?.showOfficeOrBranch) {
      return null;
    }

    return (
      <li className="contact-details__item">
        <a className="contact-details__link" href={contactPersonBranchData.url}>
          {renderOfficeIcon(settings.officeIcon)}
          <span>{contactPersonBranchData.title}</span>
        </a>
      </li>
    );
  };

  return (
    <div className="block job-details-reordered-component">
      <div className="block__wrapper wrapper">
        <div className="block__header">
          <h2 className="block__title">{translations.title}</h2>
          <p>{translations.description}</p>
        </div>
        <div className="block__content contact-person">
          <div className="person__profile">
            {photo ? (
              <div className="avatar avatar--XXL mb-s l:mb-none l:mr-s">
                {renderAvatar()}
              </div>
            ) : (
              <div className="avatar avatar--XXL avatar__initials mb-s l:mb-none l:mr-s">
                {renderAvatar()}
              </div>
            )}
            <div className="person__info">
              <h3
                className={`person__name ${!useLowerCase ? 'text-transform--none' : ''}`}
              >
                {contactName}
              </h3>
              {(jobTitle && settings.showTitle)
                ? <p className="person__title text--alternative">{jobTitle}</p> : null}
              {(description && settings.showBiography)
                ? <p>{description.substring(0, 200)}</p> : null}
              <ul className="contact-details">
                {renderPhone()}
                {renderEmail()}
                {renderOffice()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPerson;
