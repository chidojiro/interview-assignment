import React, { useEffect, useRef, useState } from 'react';
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
import useHandleReplyComponents from '../useHandleReplyComponents';

function useHandleChatReplies(
  replies: ConversationReply[] | undefined,
  setReplies: (replies: React.SetStateAction<Array<ConversationReply>>) => void,
  replyLoading: boolean,
  setReplyLoading: (loading: React.SetStateAction<boolean>) => void,
  handleQuickSuggest?: (item: ConversationQuickSuggest) => void,
  handleMultiSelectSubmit?: (data: ConversationMultiSelect, selected: ConversationMultiSelectItem[]) => Promise<ContinueResponse>,
) {
  const initalMultiselectData = {
    submit: '',
    items: [],
    intent: '',
    param: '',
    hint: '',
  };

  const [replyIndexes, setReplyIndexes] = useState<Array<number>>([]);
  const selectedItems = useRef<Array<ConversationMultiSelectItem>>([]);
  const multiSelectData = useRef<ConversationMultiSelect>(initalMultiselectData);

  const clearMultiSelect = () => {
    if (!replyLoading) {
      selectedItems.current = [];
      multiSelectData.current = initalMultiselectData;
    }
  };

  const handleSubmitMultiSelect = () => {
    if (!handleMultiSelectSubmit) return;
    setReplyLoading(true);
    handleMultiSelectSubmit(multiSelectData.current, selectedItems.current).then((response) => {
      handleContinueResponse(ContinueRequestType.QUICK_SUGGEST, response, setReplies);
      checkForMultiSelects();
      setReplyLoading(false);
      selectedItems.current = [];
      multiSelectData.current = initalMultiselectData;
      return true;
    }).catch((error) => {
      // We need to log the error.
      // eslint-disable-next-line no-console
      console.error(`Error multi select submit ${error}`);
      selectedItems.current = [];
      multiSelectData.current = initalMultiselectData;
    });
  };

  const handleOnMultiSelectChange = (item: ConversationMultiSelectItem) => {
    const found = selectedItems.current.findIndex((predicated) => predicated.param === item.param);
    if (found !== -1) {
      selectedItems.current.splice(found, 1);
    } else {
      selectedItems.current = [...selectedItems.current, item];
    }
  };

  useEffect(() => {
    if (replies) {
      // We will update the chat reply indexes on every new replies, basically.
      setReplyIndexes((prevState) => {
        if (!prevState.find((el) => el === replies.length)) {
          return [...prevState, replies?.length];
        }
        return [...prevState];
      });

      replies.forEach((reply) => {
        if (reply.ms) {
          multiSelectData.current = reply.ms;
        }
      });
    }
  }, [replies]);

  const replyComponents = useHandleReplyComponents(replies, replyIndexes, handleOnMultiSelectChange, handleQuickSuggest);

  return {
    replyComponents, selectedItems, multiSelectData, clearMultiSelect, handleSubmitMultiSelect,
  };
}

export default useHandleChatReplies;
