import { ConversationMultiSelectItem } from '../../../utils/chatApi/types';

export interface ChatMultiSelectProps {
  items: Array<ConversationMultiSelectItem>;
  onMultiSelectChange: (item: ConversationMultiSelectItem) => void;
}
