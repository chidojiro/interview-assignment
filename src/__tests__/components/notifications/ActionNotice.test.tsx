import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ActionNotice from '../../../components/notifications/ActionNotice';
import { ActionNoticeProps } from '../../../components/notifications/ActionNotice/ActionNotice.types';

describe('Action notice component tests', () => {
  const renderComponent = (props: ActionNoticeProps) => render(<ActionNotice {...props} />);

  const primaryButtonClickMock = jest.fn();
  const secondaryButtonClickMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component with primary button', () => {
    const props: ActionNoticeProps = {
      children: 'Test Content 1',
      background: 'primary',
      primaryButtonText: 'Primary Button 1',
      onPrimaryButtonClick: primaryButtonClickMock,
    };

    const { getByText } = renderComponent(props);

    const contentElement = getByText('Test Content 1');
    expect(contentElement).toBeInTheDocument();

    const primaryButtonElement = getByText('Primary Button 1');
    expect(primaryButtonElement).toBeInTheDocument();
  });

  it('renders the component with secondary button', () => {
    const props: ActionNoticeProps = {
      children: 'Test Content 2',
      background: 'secondary',
      primaryButtonText: 'Primary Button 2',
      secondaryButtonText: 'Secondary Button 2',
      onPrimaryButtonClick: primaryButtonClickMock,
      onSecondaryButtonClick: secondaryButtonClickMock,
    };

    const { getByText } = renderComponent(props);

    const contentElement = getByText('Test Content 2');
    expect(contentElement).toBeInTheDocument();

    const primaryButtonElement = getByText('Primary Button 2');
    expect(primaryButtonElement).toBeInTheDocument();

    const secondaryButtonElement = getByText('Secondary Button 2');
    expect(secondaryButtonElement).toBeInTheDocument();
  });

  it('calls the primary button click handler', () => {
    const props: ActionNoticeProps = {
      children: 'Test Content',
      background: 'primary',
      primaryButtonText: 'Primary Button 3',
      onPrimaryButtonClick: primaryButtonClickMock,
    };

    const { getByText } = renderComponent(props);

    const primaryButtonElement = getByText('Primary Button 3');
    fireEvent.click(primaryButtonElement);

    expect(primaryButtonClickMock).toHaveBeenCalledTimes(1);
  });

  it('calls the secondary button click handler', () => {
    const props: ActionNoticeProps = {
      children: 'Test Content',
      background: 'secondary',
      primaryButtonText: 'Primary Button',
      secondaryButtonText: 'Secondary Button',
      onPrimaryButtonClick: primaryButtonClickMock,
      onSecondaryButtonClick: secondaryButtonClickMock,
    };

    const { getByText } = renderComponent(props);

    const secondaryButtonElement = getByText('Secondary Button');
    fireEvent.click(secondaryButtonElement);

    expect(secondaryButtonClickMock).toHaveBeenCalledTimes(1);
  });

  it('does not render primary button if onPrimaryButtonClick is undefined', () => {
    const props: ActionNoticeProps = {
      children: 'Test Content',
      background: 'primary',
      primaryButtonText: 'Primary Button',
      onPrimaryButtonClick: primaryButtonClickMock,
    };

    const { queryByText } = renderComponent(props);

    const primaryButtonElement = queryByText('Primary Button');
    expect(primaryButtonElement).toBeNull();
  });

  it('does not render secondary button if onSecondaryButtonClick is undefined', () => {
    const props: ActionNoticeProps = {
      children: 'Test Content',
      background: 'secondary',
      primaryButtonText: 'Primary Button',
      secondaryButtonText: 'Secondary Button',
      onPrimaryButtonClick: primaryButtonClickMock,
      onSecondaryButtonClick: undefined,
    };

    const { queryByText } = renderComponent(props);

    const secondaryButtonElement = queryByText('Secondary Button');
    expect(secondaryButtonElement).toBeNull();
  });
});
