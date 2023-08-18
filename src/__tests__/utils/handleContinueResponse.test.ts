import handleContinueResponse from '../../utils/chat/handleContinueResponse';
import { ContinueRequestType } from '../../utils';

describe('handleContinueResponse', () => {
  const setReplies = jest.fn();
  const setConversationFinished = jest.fn();

  it('should call the handleContinueResponse function and add the new replies', () => {
    const response = {
      state: 'IN_PROGRESS',
      response_id: 'dummy id',
      undo_available: 'false',
      replies: [
        {
          text: 'dummy text',
        },
      ],
      language: 'en',
    };
    handleContinueResponse(ContinueRequestType.TEXT_REPLY, response, setReplies, setConversationFinished);

    expect(setReplies).toHaveBeenCalled();
    expect(setConversationFinished).not.toHaveBeenCalled();
  });

  it('should end the conversation in case of state is FINISHED', () => {
    const response = {
      state: 'FINISHED',
      response_id: 'dummy id',
      undo_available: 'false',
      replies: [
        {
          text: 'dummy text',
        },
      ],
      language: 'en',
    };
    handleContinueResponse(ContinueRequestType.TEXT_REPLY, response, setReplies, setConversationFinished);

    expect(setReplies).toHaveBeenCalled();
    expect(setConversationFinished).toHaveBeenCalled();
  });
});
