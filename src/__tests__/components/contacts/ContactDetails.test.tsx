import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import ContactDetails from '../../../components/contacts/ContactDetails';
import {ActionNoticeProps} from "../../../components/notifications/ActionNotice/ActionNotice.types";

describe('ContactDetails', () => {
  const contactFormClickMock = jest.fn();
  const profiles = [
    {
      name: 'John Doe',
      title: 'Software Engineer',
      description: 'Lorem ipsum dolor sit amet1',
      phone: '1234567890',
      email: 'john.doe@example.com',
      socialLinks: [
        { title: 'Twitter', url: 'https://twitter.com/johndoe', icon: 'twitter-filled-30' },
        { title: 'LinkedIn', url: 'https://www.linkedin.com/in/johndoe', icon: 'linkedin-filled-30' },
      ],
    },
    {
      name: 'Jane Smith',
      title: 'Product Manager',
      description: 'Lorem ipsum dolor sit amet2',
      phone: '9876543210',
      email: 'jane.smith@example.com',
      socialLinks: [
        { title: 'Twitter', url: 'https://twitter.com/janesmith', icon: 'twitter-filled-30' },
        { title: 'LinkedIn', url: 'https://www.linkedin.com/in/janesmith', icon: 'linkedin-filled-30' },
      ],
    },
  ];

  const personWithContactForm = [{
    name: 'Jane Smith',
    title: 'Product Manager',
    description: 'Lorem ipsum dolor sit amet2',
    phone: '9876543210',
    email: 'jane.smith@example.com',
  }];

  const contactForm = {
    contactFormButtonText: 'Send a message',
    onContactFormButtonClicked: contactFormClickMock,
  };

  it('renders the contact person details correctly', () => {
    render(
      <ContactDetails
        type="contact-person"
        title="Contact Person"
        description="Contact person description"
        profiles={profiles}
      />,
    );

    expect(screen.getByText('Contact Person')).toBeInTheDocument();
    expect(screen.getByText('Contact person description')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum dolor sit amet1')).toBeInTheDocument();
    expect(screen.getByText('1234567890')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Product Manager')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum dolor sit amet2')).toBeInTheDocument();
    expect(screen.getByText('9876543210')).toBeInTheDocument();
    expect(screen.getByText('jane.smith@example.com')).toBeInTheDocument();
  });

  it('renders the contact person details with contact form correctly', () => {
    render(
      <ContactDetails
        type="contact-person"
        title="Contact Person"
        description="Contact person description"
        profiles={personWithContactForm}
        contactForm={contactForm}
      />,
    );

    expect(screen.getByText('Contact Person')).toBeInTheDocument();
    expect(screen.getByText('Contact person description')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Product Manager')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum dolor sit amet2')).toBeInTheDocument();
    expect(screen.getByText('9876543210')).toBeInTheDocument();
    expect(screen.queryByText('jane.smith@example.com')).not.toBeInTheDocument();
    expect(screen.getByText('Send a message')).toBeInTheDocument();
    const contactFormButtonElement = screen.getByText('Send a message');
    fireEvent.click(contactFormButtonElement);
    expect(contactFormClickMock).toHaveBeenCalledTimes(1);
  });

  it('renders the meet the team details correctly', () => {
    render(
      <ContactDetails
        type="meet-the-team"
        title="Meet the Team"
        description="Meet the team description"
        profiles={profiles}
      />,
    );

    expect(screen.getByText('Meet the Team')).toBeInTheDocument();
    expect(screen.getByText('Meet the team description')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum dolor sit amet1')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Product Manager')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum dolor sit amet2')).toBeInTheDocument();
  });
});
