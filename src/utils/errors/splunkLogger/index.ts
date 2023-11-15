import {SplunkFEMessage, SplunkMessage} from './types';
import {Logger} from "splunk-logging";
import axios, {AxiosInstance} from "axios";

class SplunkLogger {
  logger: Logger | undefined;
  api: AxiosInstance | undefined;

  index: string;
  backend: boolean;

  constructor(token: string, url: string, index: string, backend = true) {
    this.backend = backend;
    this.index = index;
    if(backend) {
      this.logger = new Logger({
        token,
        url,
        path: '/services/collector',
        protocol: 'https',
        level: "info"
      });
    } else {
      this.api = axios.create({
        baseURL: url,
        headers: {
          'client-id': token,
        }
      })
    }

  }

  private sendBackend(message: SplunkMessage) {
    if(this.logger) {
      this.logger.send({
        message: message,
        metadata: {
          index: this.index,
        },
        severity: message.level
      }, (error, req, res) => {
        if(error) {
          console.error('Error BE splunk logging ', {'res': res, 'error': error, 'req': req});
        }
      });
    }
  }

  private sendFrontend(message: SplunkMessage) {
    if(!this.api) return;

    const request: SplunkFEMessage = {
      meta: {
        userAgent: message.http?.userAgent
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
        }
      ]
    }

    this.api.post(`/${message.metadata.opco}/${message.version}/web`, request).catch((e) => {
      console.error('Error Splunk FE logging ', e);
    })
  }

  /**
   * Send an error log to splunk.
   * @param message
   *   The message we want to send to splunk.
   */
  send(message: SplunkMessage) {
    if(this.backend) {
      this.sendBackend(message);
    } else {
      this.sendFrontend(message);
    }
  }
}

export default SplunkLogger;
