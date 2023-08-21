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

export function languageSwitchEvent(currentLanguage: string, newLanguage: string, hasFilters: boolean) {
  const event = {
    event: 'interaction',
    event_params: {
      event_name: 'language_switch',
      current_language: currentLanguage,
      switched_language: newLanguage,
      filters_active: hasFilters ? 'true' : 'false',
    },
  };

  gtmDataLayerPushHandler(event);
}
