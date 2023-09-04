import { render, waitFor, renderHook } from '@testing-library/react';
import useHandleChatReplies from '../../hooks/chat/useHandleChatReplies';
import { ConversationReply } from '../../utils';

describe('useHandleChatReplies', () => {
  const setReplies = jest.fn();
  const replyLoading = false;
  const setReplyLoading = jest.fn();
  const conversationFinished = false;
  const setConversationFinished = jest.fn();
  const handleQuickSuggest = jest.fn();
  const handleMultiSelectSubmit = jest.fn();

  const handleRender = (replies: Array<ConversationReply>) => {
    const { result } = renderHook(() => useHandleChatReplies(
      replies,
      setReplies,
      replyLoading,
      setReplyLoading,
      conversationFinished,
      setConversationFinished,
      handleQuickSuggest,
      handleMultiSelectSubmit,
    ));

    waitFor(() => {
      expect(result.current).toBeDefined();
      expect(result.current.replyComponents).toBeDefined();
      expect(result.current.multiSelectData).toBeDefined();
      expect(result.current.selectedItems).toBeDefined();
      if (result.current.replyComponents) {
        for (const element of result.current.replyComponents) {
          render(element as React.ReactElement);
        }
      }
    });
  };

  it('should render the text reply chat components', () => {
    const replies = [
      {
        // Returns from the api text.
        // eslint-disable-next-line xss/no-mixed-html
        text: 'Welcome back, <span translate="no">Test</span>. I see you\'re interested in our <span translate="no">Open Temp test job 1</span> job in <span translate="no">Jönköping, None</span>. It should take about 3 minutes to find out if this job is well suited to you. Would you like to get to it?',
      },
    ];

    handleRender(replies);

    const botReply = document.querySelector('[data-rs-chat-content]');
    expect(botReply).toBeInTheDocument();
  });

  it('should render quick suggest chat reply components', () => {
    const replies = [
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
    handleRender(replies);

    const botReply = document.querySelector('[data-rs-chat-quick-suggest-button]');
    expect(botReply).toBeInTheDocument();
  });

  it('should render multiselect replies', () => {
    const replies = [
      {
        ms: {
          intent: 'preference_employment_type',
          param: 'employment_types',
          submit: 'Submit preference',
          hint: '',
          items: [
            {
              text: 'Permanent',
              param: 'PERMANENT',
            },
            {
              text: 'Contract-To-Hire',
              param: 'CONTRACT_TO_HIRE',
            },
            {
              text: 'Contract',
              param: 'CONTRACTOR',
            },
          ],
        },
      },
    ];

    handleRender(replies);

    const botReply = document.querySelector('[data-rs-tags-checkbox]');
    expect(botReply).toBeInTheDocument();
  });
});
