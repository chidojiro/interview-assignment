import React from 'react';

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
  handleSendButton: () => void;
};

export interface ChatProps {
  children?: React.ReactNode | React.ReactNode[];
  settings: ChatSettings;
}
declare global {
  interface Window {
    orbit: {
      chatInstance: {
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
      };
    };
  }
}
