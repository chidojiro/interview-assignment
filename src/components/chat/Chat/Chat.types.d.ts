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
  handleSendButton?: (text: string) => void;
  handleQuickSuggest?: (item: ConversationQuickSuggest) => void;
  handleMultiSelectSubmit?: (data: ConversationMultiSelect, selected: Array<ConversationMultiSelectItem>) => void;
};

export interface ChatProps {
  replies: Array<ConversationReply>;
  replyLoading: boolean;
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
