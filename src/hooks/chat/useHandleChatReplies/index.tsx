import React, { useEffect, useRef, useState } from 'react';
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
  const multiSelectResponse = useRef<ContinueResponse>();

  const clearMultiSelect = () => {
    if (!replyLoading) {
      selectedItems.current = [];
      multiSelectData.current = initalMultiselectData;
    }
  };

  useEffect(() => {
    if (!replyLoading && multiSelectResponse.current && window && window.orbit && window.orbit.chatInstance && window.orbit.chatInstance.textarea) {
      (window.orbit.chatInstance.textarea as HTMLTextAreaElement).value = selectedItems.current.map((r) => r.text).join(', ');
      window.orbit.chatInstance.userInputToSpeechBubble();

      handleContinueResponse(ContinueRequestType.QUICK_SUGGEST, multiSelectResponse.current, setReplies);
      selectedItems.current = [];
      multiSelectResponse.current = undefined;
      multiSelectData.current = initalMultiselectData;
    }
    /**
     * We are unable to have the exaustive-deps eslint rule here because this is essentially a hack to simulate
     * a user text input based of the selected multiselect text values.
     *
     * Essentially because we are combining vanilla js + react js we need to wait for the reply loading to be false,
     * which signals that the response is ready to used by the replies for rendering fresh reply components @see handleContinueResponse, useHandleReplyComponents.
     *
     * Firstly we need to make sure that the window.orbit.chatInstance.userInputToSpeechBubble() function called
     * and the text reply is properly rendered on the screen. This is important to call first, because otherwise it
     * creates a desync and the front-end renders the text reply after the actual replies from the response, which we don't want
     * as this breaks the user experience. After this done, the handleContinueResponse called, which basically updates the replies state, which in turn will render new reply components.  @see handleContinueResponse, useHandleReplyComponents.
     *
     * This way the replies and text input are properly synced.
     *
     * TLDR;
     * We need to keep eye for the replyLoading state, other states are either unessecary or create rendering loops,
     * which can't fixed as this is a hack and would create more hacks in turn.
     *
     *
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [replyLoading]);

  const handleSubmitMultiSelect = () => {
    if (!handleMultiSelectSubmit) return;
    setReplyLoading(true);
    handleMultiSelectSubmit(multiSelectData.current, selectedItems.current).then((response) => {
      multiSelectResponse.current = response;
      setReplyLoading(false);
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
