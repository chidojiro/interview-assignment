import { ReactNode } from 'react';

export type ErrorBoundaryState = {
  formattedError: object;
}

export type ErrorBoundaryTranslations = {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
};


export type ErrorBoundaryProps = {
  // Constructor can contain different amount of arguments.
  translations: ErrorBoundaryTranslations;
  children: ReactNode;

  feDebug?: boolean;
  beDebug?: boolean;
}
