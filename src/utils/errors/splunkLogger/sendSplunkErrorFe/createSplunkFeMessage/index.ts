import { SplunkFEMessage, SplunkMessage } from '../../types';

function createSplunkFeMessage(message: SplunkMessage): SplunkFEMessage {
  return {
    meta: {
      userAgent: message.http?.userAgent,
    },
    events: [
      {
        // The context is both the action and the caller, because we are always passing the name of the caller function as the context.
        action: message.context,
        caller: message.context,
        timestamp: message.timestamp,
        url: message.http?.url as string,
        app: message.metadata.appName,
        level: message.level,
        message: message.message,
        messageDetail: message.messageDetail as string,

        traceId: message.trace_id,
      },
    ],
  };
}

export default createSplunkFeMessage;
