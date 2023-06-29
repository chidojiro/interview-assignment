import React from 'react';
import { render } from '@testing-library/react';
import UserImageBlock from '../../components/UserImageBlock';

describe('UserImageBlock', () => {
  test('renders user image block with initials', () => {
    const initials = 'AB';
    const { getByText } = render(<UserImageBlock size="M" initials={initials} />);
    const initialsElement = getByText(initials);
    expect(initialsElement).toBeInTheDocument();
  });

  test('renders user image block with picture', () => {
    const picture = {
      filename: 'profile.jpg',
      url: 'https://example.com/profile.jpg',
    };
    const { getByAltText } = render(<UserImageBlock size="M" picture={picture} initials="AB" />);
    const imageElement = getByAltText('AB');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', picture.url);
  });

  test('renders user image block without picture url', () => {
    const picture = {
      filename: 'profile.jpg',
    };
    const initials = 'AB';
    const { getByText } = render(<UserImageBlock size="M" picture={picture} initials={initials} />);
    const initialsElement = getByText(initials);
    expect(initialsElement).toBeInTheDocument();
  });
});
