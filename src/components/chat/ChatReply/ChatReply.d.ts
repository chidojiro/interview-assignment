import React from 'react';

export interface ChatReplyProps {
  type: 'bot' | 'user';
  first?: boolean;
  logoAltText?: string;
  children?: React.ReactNode | React.ReactNode[];
}
