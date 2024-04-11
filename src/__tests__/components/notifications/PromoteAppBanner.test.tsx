import React from 'react';
import {
  render, fireEvent, act, waitFor,
} from '@testing-library/react';
import PromoteAppBanner from '../../../components/notifications/PromoteAppBanner';

describe('PromoteAppBanner component', () => {
  const defaultProps = {
    children: 'Download our app now!',
    appleLink: 'https://example.com/apple',
    googlePlayLink: 'https://example.com/google',
  };

  it('renders with no image when type is "no-image"', () => {
    const { getByText, queryByAltText } = render(
      <PromoteAppBanner {...defaultProps} type="no-image" />,
    );

    expect(getByText('Download our app now!')).toBeInTheDocument();
    expect(queryByAltText('App Image')).toBeNull();
  });

  it('renders with image when type is "split-view"', () => {
    const { getByAltText } = render(
      <PromoteAppBanner {...defaultProps} type="split-view" imagePath="https://www.randstad.co.uk/s3fs-media/uk/public/styles/banner_media_desktop/public/bynder/3FFC3FDC-AE60-4692-B576DA4FDF247941.jpg?itok=tL5em_4U" imageAlt="App Image" />,
    );

    expect(getByAltText('App Image')).toBeInTheDocument();
  });

  it('renders with image when type is "full-width"', () => {
    const { getByAltText } = render(
      <PromoteAppBanner {...defaultProps} type="full-width" imagePath="https://www.randstad.co.uk/s3fs-media/uk/public/styles/banner_media_desktop/public/bynder/3FFC3FDC-AE60-4692-B576DA4FDF247941.jpg?itok=tL5em_4U" imageAlt="App Image" />,
    );

    expect(getByAltText('App Image')).toBeInTheDocument();
  });

  it('calls onClose callback when close button is clicked', async () => {
    const onCloseMock = jest.fn();
    const { getByLabelText } = render(
      <PromoteAppBanner {...defaultProps} onClose={onCloseMock} />,
    );

    await act(async () => {
      fireEvent.click(getByLabelText('close'));
    });
    waitFor(() => {
      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
  });
});
