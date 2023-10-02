import { ReactNode } from 'react';
import FormattedErrorBase from "../../../utils/errors/FormattedErrorBase";

export type ErrorBoundaryState = {
  formattedError: object;
}

export type ErrorBoundaryTranslations = {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
};


export type ErrorBoundaryProps = {
  // Constructor can contain different amount of arguments.
  FormattedError: new (...args: any[]) => FormattedErrorBase;
  translations: ErrorBoundaryTranslations;
  children: ReactNode;
}
