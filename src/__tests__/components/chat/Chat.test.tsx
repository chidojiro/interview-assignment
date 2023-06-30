import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Chat from '../../../components/chat/Chat';
import ChatReply from '../../../components/chat/ChatReply';
import ChatLoader from '../../../components/chat/ChatLoader';

describe('Chat', () => {
  test('renders chat title', () => {
    const settings = {
      title: 'Chat Title',
      closeButtonAriaLabel: 'Close Chat',
      handleSendButton: jest.fn(),
      startConversationButtonText: 'start conversation1',
    };
    const { getByText } = render(<Chat settings={settings} />);
    const titleElement = getByText('Chat Title');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders close button', () => {
    const settings = {
      title: 'Chat Title2',
      closeButtonAriaLabel: 'Close Chat2',
      handleSendButton: jest.fn(),
      startConversationButtonText: 'start conversation2',
    };
    const { getByLabelText } = render(<Chat settings={settings} />);
    const closeButton = getByLabelText('Close Chat2');
    expect(closeButton).toBeInTheDocument();
  });

  test('calls handleSendButton when send button is clicked', () => {
    const handleSendButton = jest.fn();
    const settings = {
      title: 'Chat Title3',
      closeButtonAriaLabel: 'Close Chat3',
      startConversationButtonText: 'start conversation3',
      handleSendButton,
    };
    const { getByText } = render(<Chat settings={settings} />);
    const sendButton = getByText('send');
    fireEvent.click(sendButton);
    expect(handleSendButton).toHaveBeenCalled();
  });

  test('renders chat with user reply', () => {
    const settings = {
      title: 'Chat Title4',
      closeButtonAriaLabel: 'Close Chat4',
      handleSendButton: jest.fn(),
      startConversationButtonText: 'start conversation4',
    };
    const { getByText } = render(
      <Chat settings={settings}>
        <ChatReply type="user">Hello</ChatReply>
      </Chat>,
    );
    const titleElement = getByText('Chat Title4');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders chat with bot reply', () => {
    const settings = {
      title: 'Chat Title5',
      closeButtonAriaLabel: 'Close Chat5',
      handleSendButton: jest.fn(),
      startConversationButtonText: 'start conversation5',
    };
    const { getByText } = render(
      <Chat settings={settings}>
        <ChatReply type="bot">Hi there</ChatReply>
      </Chat>,
    );
    const replyElement = getByText('Hi there');
    expect(replyElement).toBeInTheDocument();
  });

  test('renders chat loader', () => {
    const settings = {
      title: 'Chat Title6',
      closeButtonAriaLabel: 'Close Chat6',
      handleSendButton: jest.fn(),
      startConversationButtonText: 'start conversation6',
    };
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
