import { AxiosError } from 'axios';
import { SplunkMessage, LogMetadata } from '../types';
import generateCorelationId from '../generateCorelationId';
import splunkError from '../splunkError';

function splunkAxiosError(
  error: AxiosError,
  metadata: LogMetadata,
  context: string,
  env: string,
): SplunkMessage | undefined {
  if (!error.response) {
    return undefined;
  }

  let url = `${error.config.baseURL}${error.config.url}`;
  if (!error.config.baseURL) {
    url = error.config.url as string;
  }
  // Get base error...
  const baseError = splunkError(error, metadata, context, env);
  // Base error, to have the axios error properties.
  return {
    ...baseError,
    status: error.status,
    messageDetail: JSON.stringify({ reqData: error.config.data, respData: error.response.data }),
    http: {
      ...baseError.http,
      url,
      status_code: error.response.status,
      method: error.config.method,
    },
    corelation_id: generateCorelationId(error.request),
  };
}

export default splunkAxiosError;
