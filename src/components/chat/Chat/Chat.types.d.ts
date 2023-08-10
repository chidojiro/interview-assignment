import React from 'react';
import type { ConversationData, ConversationReply } from '../../../utils/chat/chatApi/types';

export type BaseEvent = {
  target: {
    value: string;
  };
};

export type ChatSettings = {
  title: string | React.ReactNode;
  closeButtonAriaLabel: string;
  logoAltText?: string;
  textAreaPlaceholder?: string;
  sendButtonText?: string | React.ReactNode;
  deselectButtonText?: string | React.ReactNode;
  submitButtonText?: string | React.ReactNode;
  selectedOptionsText?: string;
  startConversationButtonText: string | React.ReactNode;
  hiddenByDefault?: boolean;
};

/**
 * Continue conversation props are used for handling continue conversation flow in the chat itself, as a component.
 * The idea here is that the chat will be initialized in the apps and the continue conversation will be the same for all.
 *
 *
 * @param replies
 *    On initialization the api will return replies.
 *    The replies here should be passed as a state, so that the logic can work.
 *    The replies then will be updated automatically by the logic in the continue conversation @see useHandleContinueConversation
 * @param setChatReplies
 *    The chat replies state update function handler.
 *    This is needed so we can update the replies on continue conversation api response.
 * @param replyLoading
 *    State to determine if we need to show the <ChatLoader/> component.
 *    This is shown on api request, to notify the user that the chat is loading their reply.
 * @param setReplyLoading
 *    The replyLoading state update function handler.
 *    This is used, so we can show the loader on continue conversation api request. @see useHandlerContinueConversation.
 * @param conversationData
 *    The conversation data is a space for keeping conversation_id and response_id, so we can continue the conversation properly.
 *    The init api call will initially return the parameters, so we need to pass them here set initially, so we know which conversation we need to continue.
 * @param setConversationData
 *    The conversationData state update function handler.
 *    This is used, so we can update the response_id param on continue conversation reply, so we can advance the conversation with the new response_id.
 */
export type ContinueConversationProps = {
  replies: ConversationReply[];
  setChatReplies: (items: React.SetStateAction<Array<ConversationReply>>) => void;
  replyLoading: boolean;
  setReplyLoading: (state: React.SetStateAction<boolean>) => void;
  conversationData: ConversationData;
  setConversationData: (state: React.SetStateAction<ConversationData>) => void;
};

export interface ChatProps {
  conversation: ContinueConversationProps;
  jobId?: string;
  applicationId?: string;

  settings: ChatSettings;
}

declare global {
  interface Window {
    orbit?: {
      chatInstance?: {
        addEventHandlers: () => void;
        handleHeaderDivider: () => void;
        toggleInputButton: () => void;
        openChat: () => void;
        closeChat: () => void;
        quickSuggestButtonsHandler: () => void;
        getArrayOfSelectedTags: () => void;
        tagHandler: () => void;
        handleTagDialogButtons: () => void;
        createSpeechBubble: () => void;
        userInputToSpeechBubble: () => void;
        toggleSettingsHandler: () => void;
        languageSelectorHandler: () => void;
        popUpHandler: () => void;
        languageSaveButtonHandler: () => void;
        openAndCloseSettings: () => void;
        handleButtonKeys: () => void;
        classes: () => void;
        attributes: () => void;
        getSelector: () => void;
        textarea: {
          addEventListener: (event: string, handler: (e: { target: { value: string } }) => void) => void;
          removeEventListener: (event: string, handler: (e: { target: { value: string } }) => void) => void;
        };
      };
    };
  }
}
