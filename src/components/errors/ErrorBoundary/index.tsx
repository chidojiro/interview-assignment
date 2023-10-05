import React, { Component } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      formattedError: {},
    } as ErrorBoundaryState;
  }

  componentDidCatch(error: Error) {
    const { FormattedError} = this.props;
    const formattedError = new FormattedError(error, 'errorBoundary');
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
