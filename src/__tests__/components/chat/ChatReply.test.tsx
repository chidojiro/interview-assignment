import React from 'react';
import { render } from '@testing-library/react';
import ChatReply from '../../../components/chat/ChatReply';

describe('ChatReply', () => {
  test('renders chat reply with user reply', () => {
    const { getByText } = render(
      <ChatReply type="user">Hello</ChatReply>,
    );
    const titleElement = getByText('Hello');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders chat with bot reply', () => {
    const { getByText } = render(
      <ChatReply type="bot">Hi there</ChatReply>,
    );
    const replyElement = getByText('Hi there');
    expect(replyElement).toBeInTheDocument();
  });
});
