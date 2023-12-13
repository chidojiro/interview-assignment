import { Logger } from 'splunk-logging';
import { SplunkMessage } from '../types';
import createError from '../../FormattedError/createError';

/**
 * Used for sending error messages to splunk from the Back-End.
 *
 * @param message
 *   The message that we want to send.
 * @param token
 *   The token credential.
 * @param url
 *   The url credential.
 * @param index
 *  The index credential.
 * @param logBackEnd
 *   Optional. If the be debug enabled.
 */
function sendSplunkErrorBe(message: SplunkMessage, token: string, url: string, index: string, logBackEnd = false) {
  const logger = new Logger({
    token,
    url,
    path: '/services/collector',
    protocol: 'https',
    level: 'info',
  });

  logger.send({
    message,
    metadata: {
      index,
    },
    severity: message.level,
  }, (error) => {
    if (error) {
      // Logging in case the error is not sent to splunk.
      createError(error, 'sendSplunkErrorBe', false, logBackEnd);
    }
  });
}

export default sendSplunkErrorBe;
