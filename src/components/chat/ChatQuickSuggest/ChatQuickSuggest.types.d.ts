import type { ConversationQuickSuggest } from '../../../utils';

export interface ChatQuickSuggestProps {
  items: Array<ConversationQuickSuggest>;

  handleQuickSuggest?: (item: ConversationQuickSuggest) => void;
}
