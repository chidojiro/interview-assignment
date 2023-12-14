import axios from 'axios';
import { SplunkFEMessage, SplunkMessage } from '../types';
import createSplunkFeMessage from './createSplunkFeMessage';
import createError from '../../FormattedError/createError';

/**
 * Used for sending error messages to splunk from the Front-End.
 *
 * @param message
 *   The message that we want to send.
 * @param token
 *   The token credential.
 * @param url
 *   The BaseUrl of the service.
 * @param  logFrontEnd
 *   Optional param. If the front-end logging enabled, so we can log the FormattedError, in case the sending fails.
 */
function sendSplunkErrorFe(message: SplunkMessage, token: string, url: string, logFrontEnd: boolean = false) {
  const api = axios.create({
    baseURL: url,
    headers: {
      'client-id': token,
    },
  });

  const request: SplunkFEMessage = createSplunkFeMessage(message);
  api.post(`/${message.metadata.opco}/${message.version}/web`, request).catch((e) => {
    // Log splunk failure.
    createError(e, 'sendSplunkErrorFe', logFrontEnd, false);
  });
}

export default sendSplunkErrorFe;
