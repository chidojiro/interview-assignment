import React from 'react';
import { render, screen } from '@testing-library/react';
import PersonProfile from '../../components/PersonProfile';

describe('PersonProfile', () => {
  const person = {
    name: 'John Doe',
    title: 'Software Engineer',
    description: 'Lorem ipsum dolor sit amet',
    phone: '1234567890',
    email: 'john.doe@example.com',
    socialLinks: [
      { title: 'Twitter', url: 'https://twitter.com/johndoe', icon: 'twitter-filled-30' },
      { title: 'LinkedIn', url: 'https://www.linkedin.com/in/johndoe', icon: 'linkedin-filled-30' },
    ],
  };

  it('renders the person profile correctly', () => {
    render(<PersonProfile person={person} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument();
    expect(screen.getByText('1234567890')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    expect(screen.queryByTitle('Twitter')).toBeInTheDocument();
    expect(screen.queryByTitle('LinkedIn')).toBeInTheDocument();
  });

  it('renders the person profile without social links', () => {
    const personWithoutSocialLinks = {
      ...person,
      socialLinks: [],
    };

    render(<PersonProfile person={personWithoutSocialLinks} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument();
    expect(screen.getByText('1234567890')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    expect(screen.queryByTitle('Twitter')).toBeNull();
    expect(screen.queryByTitle('LinkedIn')).toBeNull();
  });

  it('does not render anything when person prop is null', () => {
    render(<PersonProfile person={null} />);

    expect(screen.queryByText('John Doe')).toBeNull();
    expect(screen.queryByText('Software Engineer')).toBeNull();
    expect(screen.queryByText('Lorem ipsum dolor sit amet')).toBeNull();
    expect(screen.queryByText('1234567890')).toBeNull();
    expect(screen.queryByText('john.doe@example.com')).toBeNull();
    expect(screen.queryByTitle('Twitter')).toBeNull();
    expect(screen.queryByTitle('LinkedIn')).toBeNull();
  });
});