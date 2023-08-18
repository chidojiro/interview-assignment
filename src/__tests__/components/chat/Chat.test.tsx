import React from 'react';
import { render } from '@testing-library/react';
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
        payload: 'Yes',
        text: 'Yes',
      },
      {
        payload: 'No',
        text: 'No',
      },
    ],
  },
];

const conversation = {
  replies,
  setChatReplies: jest.fn(),
  replyLoading: true,
  setReplyLoading: jest.fn(),
  conversationData: { responseId: '', conversationId: '' },
  setConversationData: jest.fn(),
};

describe('Chat', () => {
  test('renders chat title', () => {
    const { getByText } = render(<Chat
      settings={settings}
      replies={conversation.replies}
      setReplies={conversation.setChatReplies}
      setReplyLoading={conversation.setReplyLoading}
      replyLoading={conversation.replyLoading}
    />);
    const titleElement = getByText('Chat Title');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders close button', () => {
    const { getByLabelText } = render(<Chat
      settings={settings}
      replies={conversation.replies}
      setReplies={conversation.setChatReplies}
      setReplyLoading={conversation.setReplyLoading}
      replyLoading={conversation.replyLoading}
    />);
    const closeButton = getByLabelText('Close Chat');
    expect(closeButton).toBeInTheDocument();
  });

  test('renders bot reply', () => {
    render(<Chat
      settings={settings}
      replies={conversation.replies}
      setReplies={conversation.setChatReplies}
      setReplyLoading={conversation.setReplyLoading}
      replyLoading={conversation.replyLoading}
    />);
    const botReply = document.querySelector('[data-rs-chat-content="bot"]');
    expect(botReply).toBeInTheDocument();
  });

  test('renders quick suggest buttons', () => {
    render(<Chat
      settings={settings}
      replies={conversation.replies}
      setReplies={conversation.setChatReplies}
      setReplyLoading={conversation.setReplyLoading}
      replyLoading={conversation.replyLoading}
    />);
    const quickSuggestReply = document.querySelector('[data-rs-chat-quick-suggest]');
    expect(quickSuggestReply).toBeInTheDocument();
  });
});
