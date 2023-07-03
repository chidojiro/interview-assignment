import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Chat from '../../../components/chat/Chat';
import ChatReply from '../../../components/chat/ChatReply';
import ChatLoader from '../../../components/chat/ChatLoader';

const settings = {
  title: 'Chat Title',
  closeButtonAriaLabel: 'Close Chat',
  handleSendButton: jest.fn(),
  startConversationButtonText: 'start conversation',
};

describe('Chat', () => {
  test('renders chat title', () => {
    const { getByText } = render(<Chat settings={settings} />);
    const titleElement = getByText('Chat Title');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders close button', () => {
    const { getByLabelText } = render(<Chat settings={settings} />);
    const closeButton = getByLabelText('Close Chat');
    expect(closeButton).toBeInTheDocument();
  });

  test('calls handleSendButton when send button is clicked', () => {
    const handleSendButton = jest.fn();
    settings.handleSendButton = handleSendButton;
    const { getByText } = render(<Chat settings={settings} />);
    const sendButton = getByText('send');
    fireEvent.click(sendButton);
    expect(handleSendButton).toHaveBeenCalled();
  });

  test('renders chat with user reply', () => {
    const { getByText } = render(
      <Chat settings={settings}>
        <ChatReply type="user">Hello</ChatReply>
      </Chat>,
    );
    const titleElement = getByText('Hello');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders chat with bot reply', () => {
    const { getByText } = render(
      <Chat settings={settings}>
        <ChatReply type="bot">Hi there</ChatReply>
      </Chat>,
    );
    const replyElement = getByText('Hi there');
    expect(replyElement).toBeInTheDocument();
  });

  test('renders chat loader', () => {
    render(
      <Chat settings={settings}>
        <ChatLoader />
      </Chat>,
    );

    const container = document.querySelector('.loader__wrapper');
    expect(container).toBeInTheDocument();
    const loaderElement = container && container.querySelector('.loader');
    expect(loaderElement).toBeInTheDocument();
  });
});
