import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import type {
  ConversationMultiSelect,
  ConversationMultiSelectItem,
  ConversationQuickSuggest,
  ConversationReply,
} from '../../../utils/chat/types';
import { ContinueRequestType } from '../../../utils/chat/types';
import handleContinueResponse from '../../../utils/chat/handleContinueResponse';
import useHandleReplyComponents from '../useHandleReplyComponents';
import { ContinueResponse } from '../../../utils';

function useHandleChatReplies(
  replies: ConversationReply[] | undefined,
  setReplies: (replies: React.SetStateAction<Array<ConversationReply>>) => void,
  replyLoading: boolean,
  setReplyLoading: (loading: React.SetStateAction<boolean>) => void,
  conversationFinished: boolean,
  setConversationFinished: (finished: React.SetStateAction<boolean>) => void,
  handleQuickSuggest?: (item: ConversationQuickSuggest) => void,
  handleMultiSelectSubmit?: (data: ConversationMultiSelect, selected: ConversationMultiSelectItem[]) => Promise<ContinueResponse>,
) {
  const initialMultiselectData = useMemo(() => ({
    submit: '',
    items: [],
    intent: '',
    param: '',
    hint: '',
  }), []);

  const [replyIndexes, setReplyIndexes] = useState<Array<number>>([]);
  const selectedItems = useRef<Array<ConversationMultiSelectItem>>([]);
  const multiSelectData = useRef<ConversationMultiSelect>(initialMultiselectData);
  const multiSelectResponse = useRef<ContinueResponse>();
  /**
   * This state will control the multiselect text bubble simulation.
   */
  const [showTextBubble, setShowTextBubble] = useState(false);

  const clearMultiSelect = () => {
    if (!replyLoading) {
      selectedItems.current = [];
      multiSelectData.current = initialMultiselectData;
    }
  };

  useEffect(() => {
    if (showTextBubble && multiSelectResponse.current && window && window.orbit && window.orbit.chatInstance && window.orbit.chatInstance.textarea) {
      (window.orbit.chatInstance.textarea as HTMLTextAreaElement).value = selectedItems.current.map((r) => r.text).join(', ');
      window.orbit.chatInstance.userInputToSpeechBubble();
      setShowTextBubble(false);

      handleContinueResponse(ContinueRequestType.QUICK_SUGGEST, multiSelectResponse.current, setReplies, setConversationFinished);
      selectedItems.current = [];
      multiSelectData.current = initialMultiselectData;
    }
  }, [initialMultiselectData, setConversationFinished, setReplies, showTextBubble]);

  const handleSubmitMultiSelect = () => {
    if (!handleMultiSelectSubmit) return;
    setReplyLoading(true);
    handleMultiSelectSubmit(multiSelectData.current, selectedItems.current).then((response) => {
      multiSelectResponse.current = response;
      setReplyLoading(false);
      setShowTextBubble(true);

      return true;
    }).catch((error) => {
      // We need to log the error.
      // eslint-disable-next-line no-console
      console.error(`Error multi select submit ${error}`);
      selectedItems.current = [];
      multiSelectData.current = initialMultiselectData;
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
