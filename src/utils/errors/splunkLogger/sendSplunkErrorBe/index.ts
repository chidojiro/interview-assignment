import { Logger } from 'splunk-logging';
import { SplunkMessage } from '../types';

function sendSplunkErrorBe(message: SplunkMessage, token: string, url: string, index: string) {
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
  }, (error, req, res) => {
    if (error) {
      // Logging in case the error is not sent to splunk.
      // eslint-disable-next-line no-console
      console.error('Error BE splunk logging ', { res, error, req });
    }
  });
}

export default sendSplunkErrorBe;
