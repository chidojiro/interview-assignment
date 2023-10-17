import { Logger } from 'splunk-logging';
import { SplunkMessage } from './types';

class SplunkLogger {
  logger: Logger;
  index: string;

  constructor(token: string, url: string, index: string) {
    this.index = index;
    this.logger = new Logger({
      token,
      url,
      path: '/services/collector',
      protocol: 'https',
      level: "info"
    });
  }

  /**
   * Send an error log to splunk.
   * @param message
   *   The message we want to send to splunk.
   */
  send(message: SplunkMessage) {
    this.logger.send({
      message: message,
      metadata: {
        index: this.index,
      },
      severity: message.level
    }, (error, req, res) => {
      if(error) {
        console.error({'res': res, 'error': error, 'req': req});
      }
    });
  }
}

export default SplunkLogger;
