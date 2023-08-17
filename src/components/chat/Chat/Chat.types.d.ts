import React from 'react';
import type {
  ConversationMultiSelect,
  ConversationMultiSelectItem,
  ConversationQuickSuggest,
  ConversationReply,
} from '../../../utils/chat/types';

export type BaseEvent = {
  target: {
    value: string;
  };
};

export type ConversationData = {
  conversationId: string;
  responseId: string;
};

export type ContinueResponse = {
  state: string;
  response_id: string;
  replies: Array<ConversationReply>;
  language: string;
  undo_available: string;
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
  handleSendButton?: (text: string) => Promise<ContinueResponse>;
  handleQuickSuggest?: (item: ConversationQuickSuggest) => Promise<ContinueResponse>;
  handleMultiSelectSubmit?: (data: ConversationMultiSelect, selected: Array<ConversationMultiSelectItem>) => Promise<ContinueResponse>;
};

export interface ChatProps {
  replies: Array<ConversationReply>;
  setReplies: (data: React.SetStateAction<Array<ConversationReply>>) => void;
  replyLoading: boolean;
  setReplyLoading: (loading: React.SetStateAction<boolean>) => void;
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
