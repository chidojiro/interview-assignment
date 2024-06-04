import { JSXElementConstructor, ReactElement, ReactNode } from 'react';

// Define the valid return type.
export type ValidRenderedElement = ReactElement<any, string | JSXElementConstructor<any>> | null;

export type NavigationWrapperProps = { theme?: string, children: ReactNode };
export type NavigationWrapperReturnProps = ValidRenderedElement;
