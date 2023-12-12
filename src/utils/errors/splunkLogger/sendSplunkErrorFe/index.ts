import axios from 'axios';
import { SplunkFEMessage, SplunkMessage } from '../types';
import createSplunkFeMessage from './createSplunkFeMessage';

function sendSplunkErrorFe(message: SplunkMessage, token: string, url: string) {
  const api = axios.create({
    baseURL: url,
    headers: {
      'client-id': token,
    },
  });

  const request: SplunkFEMessage = createSplunkFeMessage(message);
  api.post(`/${message.metadata.opco}/${message.version}/web`, request).catch((e) => {
    // Log splunk failure.
    // eslint-disable-next-line no-console
    console.error('Error Splunk FE logging.', e);
  });
}

export default sendSplunkErrorFe;
