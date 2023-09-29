import { ReactNode } from 'react';

export type ErrorBoundaryState = {
  formattedError: object;
}

export type ErrorBoundaryTranslations = {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
};


export type ErrorBoundaryProps = {
  /* FormattedErrorBase Class passed as a prop, without explicit import,
     to be able to overwrite basic FormattedErrorBase implementation
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  FormattedError: any;
  translations: ErrorBoundaryTranslations;
  children: ReactNode;
}
