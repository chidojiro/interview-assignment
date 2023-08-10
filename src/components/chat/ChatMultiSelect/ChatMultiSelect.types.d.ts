import type { ConversationMultiSelectItem } from '../../../utils/chat/chatApi/types';

export interface ChatMultiSelectProps {
  items: Array<ConversationMultiSelectItem>;
  onMultiSelectChange: (item: ConversationMultiSelectItem) => void;
}
