import React from 'react';

export type ChatSettings = {
  title: string | React.ReactNode;
  closeButtonAriaLabel: string;
  logoAltText?: string;
  textAreaPlaceholder?: string;
  sendButtonText?: string | React.ReactNode;
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
        userInputToSpeechBubble: () => void;
      };
    };
  }
}
