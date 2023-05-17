import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPerson from '../../components/ContactPerson';

describe('ContactPerson component tests.', () => {
  const props = {
    displayId: '123',
    name: 'John Doe',
    description: 'Lorem ipsum dolor sit amet',
    jobTitle: 'Software Engineer',
    emailAddress: 'john.doe@example.com',
    phoneNumber: '+123456789',
    photo: 'avatar.jpg',
    regionCode: 'US',
    useLowerCase: true,
    overrides: {
      Override: '',
      Name: '',
      Description: '',
      JobTitle: '',
      Email: '',
      Phone: '',
      PhotoUrl: '',
    },
    settings: {
      showPhone: true,
      showTitle: true,
      showEmail: true,
      showBiography: true,
      showOfficeOrBranch: true,
      officeIcon: 'building',
    },
    translations: {
      title: 'Contact Information',
      description: 'Please find the contact details below:',
      emailTheConsultant: 'Email the consultant',
      randstadConsultant: 'Randstad Consultant',
    },
    branchData: {
      title: 'Branch Office',
      url: 'https://example.com/office',
    },
    dataLayerEmailClick: 'handleEmailClick'
  };

  it('renders the component with contact person details', () => {
    render(<ContactPerson {...props} />);

    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    expect(screen.getByAltText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Branch Office')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Branch Office' })).toHaveAttribute(
      'href',
      'https://example.com/office'
    );
  });

  it('displays initials if photo is not provided', () => {
    render(<ContactPerson {...props} photo="" />);

    expect(screen.getByText('JD')).toBeInTheDocument();
    expect(screen.queryByAltText('John Doe')).not.toBeInTheDocument();
  });

  it('does not render phone if showPhone setting is false', () => {
    render(<ContactPerson {...props} settings={{ ...props.settings, showPhone: false }} />);

    expect(screen.queryByText('+123456789')).not.toBeInTheDocument();
  });

  it('does not render email if showEmail setting is false', () => {
    render(<ContactPerson {...props} settings={{ ...props.settings, showEmail: false }} />);

    expect(screen.queryByText('john.doe@example.com')).not.toBeInTheDocument();
  });

  it('does not render office if showOfficeOrBranch setting is false', () => {
    render(<ContactPerson {...props} settings={{ ...props.settings, showOfficeOrBranch: false }} />);

    expect(screen.queryByText('Branch Office')).not.toBeInTheDocument();
  });

});