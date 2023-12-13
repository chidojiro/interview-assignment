import React, { Component } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';
import createError from "../../../utils/errors/FormattedError/createError";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      formattedError: {},
    } as ErrorBoundaryState;
  }

  componentDidCatch(error: Error) {
    let { feDebug, beDebug } = this.props;
    if(!feDebug) feDebug = false;
    if(!beDebug) beDebug = false;

    const formattedError = createError(error, 'errorBoundary', feDebug, beDebug);
    this.setState({ formattedError });
  }

  render() {
    const { formattedError } = this.state as ErrorBoundaryState;
    const { title, description } = this.props.translations;

    if (Object.keys(formattedError).length > 0) {
      return (
        <div className="wrapper">
          <div className="mt-l">
            <div className="block__wrapper wrapper">
              <div className="block__content ml-none">
                <h1 className="mb-s">{title}</h1>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    const { children } = this.props;
    return children;
  }
}
export default ErrorBoundary;
