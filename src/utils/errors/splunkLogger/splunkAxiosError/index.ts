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
  const agent = error.request as unknown as { agent: { defaultPort: number } };

  let port;
  if (agent.agent && agent.agent.defaultPort) {
    port = agent.agent.defaultPort;
  }
  return {
    ...baseError,
    status: error.code,
    messageDetail: JSON.stringify({ reqData: error.config.data, respData: error.response.data }),
    http: {
      ...baseError.http,
      url,
      port,
      status_code: error.response.status,
      method: error.config.method,
    },
    corelation_id: generateCorelationId(error.request),
  };
}

export default splunkAxiosError;
