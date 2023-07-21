import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Chat from '../../../components/chat/Chat';

const settings = {
  title: 'Chat Title',
  closeButtonAriaLabel: 'Close Chat',
  handleSendButton: jest.fn(),
  startConversationButtonText: 'start conversation',
};

const replies = [
  {
    // Chat api returns html.
    // eslint-disable-next-line xss/no-mixed-html
    text: "Welcome back, <span translate=\"no\">Test</span>. I see you're interested in our <span translate=\"no\">Open Temp test job 1</span> job in <span translate=\"no\">Jönköping, None</span>. It should take about 3 minutes to find out if this job is well suited to you. Would you like to get to it?",
  },
  {
    qs: [
      {
        value: 'Yes',
        text: 'Yes',
      },
      {
        value: 'No',
        text: 'No',
      },
    ],
  },
];

describe('Chat', () => {
  test('renders chat title', () => {
    const { getByText } = render(<Chat settings={settings} replies={replies} />);
    const titleElement = getByText('Chat Title');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders close button', () => {
    const { getByLabelText } = render(<Chat settings={settings} replies={replies} />);
    const closeButton = getByLabelText('Close Chat');
    expect(closeButton).toBeInTheDocument();
  });

  test('renders bot reply', () => {
    render(<Chat settings={settings} replies={replies} />);
    const botReply = document.querySelector('[data-rs-chat-content="bot"]');
    expect(botReply).toBeInTheDocument();
  });

  test('renders quick suggest buttons', () => {
    render(<Chat settings={settings} replies={replies} />);
    const quickSuggestReply = document.querySelector('[data-rs-chat-quick-suggest]');
    expect(quickSuggestReply).toBeInTheDocument();
  });

  test('calls handleSendButton when send button is clicked', () => {
    const handleSendButton = jest.fn();
    settings.handleSendButton = handleSendButton;
    const { getByText } = render(<Chat settings={settings} replies={replies} />);
    const sendButton = getByText('send');
    fireEvent.click(sendButton);
    expect(handleSendButton).toHaveBeenCalled();
  });
});
