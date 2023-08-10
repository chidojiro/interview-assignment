import type { ConversationQuickSuggest } from '../../../utils/chat/chatApi/types';

export interface ChatQuickSuggestProps {
  items: Array<ConversationQuickSuggest>;

  handleQuickSuggest?: (item: ConversationQuickSuggest) => void;
}
