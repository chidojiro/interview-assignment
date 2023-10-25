import axios from 'axios';
import { SplunkMessage, LogMetadata } from '../types';
import generateCorelationId from '../generateCorelationId';
import splunkError from '../splunkError';

function createSplunkError(
  error: unknown,
  metadata: LogMetadata,
  context: string,
  env: string,
): SplunkMessage {
  // Create the base error.
  let baseError = splunkError(error as Error, metadata, context, env);

  // In case we need to add the axios specific properties.
  if (axios.isAxiosError(error) && error.response) {
    let url = `${error.config.baseURL}${error.config.url}`;
    if (!error.config.baseURL) {
      url = error.config.url as string;
    }
    // Get base error...
    // Base error, to have the axios error properties.
    const agent = error.request as unknown as { agent: { defaultPort: number } };

    let port;
    if (agent.agent && agent.agent.defaultPort) {
      port = agent.agent.defaultPort;
    }

    baseError = {
      ...baseError,
      messageDetail: JSON.stringify({ res: error.response.data }),
      status: error.code,
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

  return baseError;
}

export default createSplunkError;
