import React, { useEffect, useState } from 'react';
import ChatReply from '../../../components/chat/ChatReply';
import ChatQuickSuggest from '../../../components/chat/ChatQuickSuggest';
import ChatMultiSelect from '../../../components/chat/ChatMultiSelect';
import type {
  ConversationMultiSelect,
  ConversationMultiSelectItem,
  ConversationQuickSuggest,
  ConversationReply,
} from '../../../utils/chat/types';
import checkForMultiSelects from '../../../utils/chat/checkForMultiSelects';

function useHandleChatReplies(
  replies: ConversationReply[] | undefined,
  replyLoading: boolean,
  handleQuickSuggest?: (item: ConversationQuickSuggest) => void,
  handleMultiselectSubmit?: (data: ConversationMultiSelect, selectedItems: Array<ConversationMultiSelectItem>) => void,
) {
  const [replyIndexes, setReplyIndexes] = useState<Array<number>>([]);
  const [replyComponents, setReplyComponents] = useState<React.ReactNode[]>([]);
  const [selectedItems, setSelectedItems] = useState<Array<ConversationMultiSelectItem>>([]);
  const [multiSelectData, setMultiSelectData] = useState<ConversationMultiSelect>({
    submit: '',
    items: [],
    intent: '',
    param: '',
    hint: '',
  });

  const clearMultiSelect = () => {
    if (!replyLoading) {
      setSelectedItems([]);
    }
  };

  const submitMultiSelect = () => {
    if (handleMultiselectSubmit) {
      handleMultiselectSubmit(multiSelectData, selectedItems);
      checkForMultiSelects();
    }
  };

  const handleOnMultiSelectChange = (item: ConversationMultiSelectItem) => {
    const found = selectedItems.findIndex((predicated) => predicated.param === item.param);
    if (found !== -1) {
      const selectedItemsCopy = [...selectedItems];
      selectedItemsCopy.splice(found, 1);
      setSelectedItems(selectedItemsCopy);
    } else {
      setSelectedItems((oldState) => ([...oldState, item]));
    }
  };

  useEffect(() => {
    if (replies) {
      const newReplies = replies.map((reply, index: number) => {
        if (reply.text) {
          return <ChatReply type="bot" key={`reply-${reply.text}`} first={!!replyIndexes.find((element) => element === index) || index === 0}>{reply.text}</ChatReply>;
        }
        if (reply.qs) {
          const quickSuggestItems = reply.qs.map(((quickSuggest: ConversationQuickSuggest) => ({ payload: quickSuggest.payload, text: quickSuggest.text })));
          return <ChatQuickSuggest key={`quick-sugguset-${quickSuggestItems[0].text}`} items={quickSuggestItems} handleQuickSuggest={handleQuickSuggest} />;
        }
        if (reply.ms) {
          setMultiSelectData(reply.ms);
          return <ChatMultiSelect onMultiSelectChange={handleOnMultiSelectChange} items={reply.ms.items} key={`multi-select-${reply.ms.items[0].text}`} />;
        }
        return null;
      });
      setReplyComponents(newReplies);
      setReplyIndexes((prevState) => {
        if (!replyIndexes.find((el) => el === replies.length)) {
          return [...prevState, replies?.length];
        }
        return [...prevState];
      });
    }
    // We need to check for the replies update.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [replies, selectedItems]);

  return {
    replyComponents, multiSelectData, clearMultiSelect, submitMultiSelect,
  };
}

export default useHandleChatReplies;
