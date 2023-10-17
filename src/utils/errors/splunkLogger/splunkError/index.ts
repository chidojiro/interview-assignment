import { getCookie } from 'cookies-next';
import { LogMetadata, SplunkMessage } from '../types';
import generateCorelationId from '../generateCorelationId';
import generateRandomHex from '../../../crypto/generateRandomHex';

function splunkError(
  error: Error,
  metadata: LogMetadata,
  context: string,
  env: string,
): SplunkMessage {
  // Ip address and userAgent will not be present if we call this from the back-end.
  const ipAddress = getCookie('ip_address') as string;
  let userAgent;
  if (typeof window !== 'undefined') {
    userAgent = window.navigator.userAgent;
  }

  return {
    metadata,
    context,
    deployment: {
      environment: env,
    },
    http: {
      userAgent,
    },
    version: 3,
    timestamp: new Date().toISOString(),
    status: '500',
    message: error.message,
    stack: error.stack,
    network_client_ip: ipAddress,
    trace_id: generateRandomHex(32),
    span_id: generateRandomHex(16),
    corelation_id: generateCorelationId(),
    level: 'ERROR',
  };
}

export default splunkError;
