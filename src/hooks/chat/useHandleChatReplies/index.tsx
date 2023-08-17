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
import { ContinueRequestType } from '../../../utils/chat/types';
import { ContinueResponse } from '../../../components/chat/Chat/Chat.types';
import handleContinueResponse from '../../../utils/chat/handleContinueResponse';
import checkForMultiSelects from '../../../utils/chat/checkForMultiSelects';

function useHandleChatReplies(
  replies: ConversationReply[] | undefined,
  setReplies: (replies: React.SetStateAction<Array<ConversationReply>>) => void,
  replyLoading: boolean,
  setReplyLoading: (loading: React.SetStateAction<boolean>) => void,
  handleQuickSuggest?: (item: ConversationQuickSuggest) => void,
  handleMultiSelectSubmit?: (data: ConversationMultiSelect, selected: ConversationMultiSelectItem[]) => Promise<ContinueResponse>,
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

  const handleSubmitMultiSelect = () => {
    if (!handleMultiSelectSubmit) return;
    setReplyLoading(true);
    handleMultiSelectSubmit(multiSelectData, selectedItems).then((response) => {
      handleContinueResponse(ContinueRequestType.QUICK_SUGGEST, response, setReplies);
      checkForMultiSelects();
      setReplyLoading(false);
      return true;
    }).catch((error) => {
      // We need to log the error.
      // eslint-disable-next-line no-console
      console.error(`Error multi select submit ${error}`);
    });
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
    replyComponents, selectedItems, multiSelectData, clearMultiSelect, handleSubmitMultiSelect,
  };
}

export default useHandleChatReplies;
