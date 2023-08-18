import type { ConversationMultiSelect, ConversationQuickSuggest } from '../types';

const handleQuickSuggestRequest = (data: unknown): { dataRequest: string | undefined; textRequest: string } => {
  let dataRequest;
  let textRequest = '';

  /**
   * If we have param in the data, then this means that is of type ConversationMultiSelect, which means that
   * we need to handle the multiselect functionality.
   */
  if (data && (data as ConversationMultiSelect).param) {
    const multiSelect = data as ConversationMultiSelect;
    const items: string[] = [];
    const texts: string[] = [];

    for (const item of multiSelect.items) {
      items.push(item.param);
      texts.push(item.text);
    }

    dataRequest = `${multiSelect.intent}, "${multiSelect.param}": ${JSON.stringify(items)}`;
    textRequest = texts.join(', ');
  } else {
    /**
     * Otherwise is of type quicksuggest, as is impossible to be any other.
     * we set the dataRequest to the payload property of the QuickSuggest reply.
     */
    dataRequest = (data as ConversationQuickSuggest).payload;
  }

  return { dataRequest, textRequest };
};

export default handleQuickSuggestRequest;
