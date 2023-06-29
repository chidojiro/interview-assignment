import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialLinks from '../../components/SocialLinks';

describe('SocialLinks', () => {
  const socialLinks = [
    { icon: 'twitter', url: 'https://twitter.com/example', title: 'Twitter' },
    { icon: 'linkedin', url: 'https://linkedin.com/example', title: 'LinkedIn' },
  ];

  it('renders social links correctly', () => {
    render(<SocialLinks items={socialLinks} />);

    const twitterLink = screen.getByTitle('Twitter');
    const linkedinLink = screen.getByTitle('LinkedIn');

    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/example');
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/example');
  });

  it('renders social links with correct icon size', () => {
    render(<SocialLinks items={socialLinks} iconsSize="s" />);

    const twitterIcon = screen.getByTitle('Twitter').querySelector('.icon--s');
    const linkedinIcon = screen.getByTitle('LinkedIn').querySelector('.icon--s');

    expect(twitterIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
  });

  it('renders no social links when items prop is empty', () => {
    render(<SocialLinks items={[]} />);

    expect(screen.queryByTitle('Twitter')).toBeNull();
    expect(screen.queryByTitle('LinkedIn')).toBeNull();
  });
});