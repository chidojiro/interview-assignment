import React from 'react';
interface Toast {
  children: React.ReactNode;
  anchor?: string;
  id: string;
  buttonLabel?: string;
}
declare const Toast: ({ children, anchor, id, buttonLabel }: Toast) => JSX.Element;
export default Toast;
