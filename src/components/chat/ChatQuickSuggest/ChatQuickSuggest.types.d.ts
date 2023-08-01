import { ConversationQuickSuggest } from '../../../utils/chatApi/types';

export interface ChatQuickSuggestProps {
  items: Array<ConversationQuickSuggest>;

  handleQuickSuggest?: (item: ConversationQuickSuggest) => void;
}
