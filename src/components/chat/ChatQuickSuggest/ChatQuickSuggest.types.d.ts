import { QuickSuggest } from '../Chat/Chat.types';

export interface ChatQuickSuggestProps {
  items: Array<QuickSuggest>;

  handleQuickSuggest?: (item: QuickSuggest) => void;
}
