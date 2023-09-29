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
  FormattedError: FormattedErrorBase;
  translations: ErrorBoundaryTranslations;
  children: ReactNode;
}
