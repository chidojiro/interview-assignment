import React from 'react';
import { Theme } from './types';
interface Modal extends Theme {
  children: React.ReactNode;
}
declare const Modal: ({ theme, children }: Modal) => JSX.Element;
export default Modal;
