import { gtmDataLayerPushHandler } from '../gtm';

export default function saveJobEvent(title: string, add: boolean) {
  const event = {
    event: 'interaction',
    event_params: {
      event_name: 'job_save',
      item_name: title,
      action: add ? 'add' : 'remove',
    },
  };

  gtmDataLayerPushHandler(event);
}
