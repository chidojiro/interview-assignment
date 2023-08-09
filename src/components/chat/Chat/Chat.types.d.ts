import React from 'react';
import type {
  ConversationMultiSelect,
  ConversationMultiSelectItem,
  ConversationQuickSuggest,
  ConversationReply,
} from '../../../utils/chatApi/types';

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
  handleSendButton: () => void;
  handleOnChange?: (event: BaseEvent) => void;
  handleQuickSuggest?: (item: ConversationQuickSuggest) => void;
  handleMultiSelectSubmit?: (data: ConversationMultiSelect, selectedItems: Array<ConversationMultiSelectItem>) => void;
  replyLoading?: boolean;
};

export interface ChatProps {
  replies?: ConversationReply[];
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
