import React from 'react';
import ChatReply from '../../../components/chat/ChatReply';
import { ConversationMultiSelectItem, ConversationQuickSuggest, ConversationReply } from '../../../utils';
import ChatQuickSuggest from '../../../components/chat/ChatQuickSuggest';
import ChatMultiSelect from '../../../components/chat/ChatMultiSelect';

function useHandleReplyComponents(
  replies: Array<ConversationReply> | undefined,
  replyIndexes: Array<number>,
  handleOnMultiSelectChange: (item: ConversationMultiSelectItem) => void,
  handleQuickSuggest?: (item: ConversationQuickSuggest) => void,
) {
  let replyComponents;
  if (replies) {
    replyComponents = replies.map((reply, index: number) => {
      if (reply.text) {
        return <ChatReply type="bot" key={`reply-${reply.text}`} first={!!replyIndexes.find((element) => element === index) || index === 0}>{reply.text}</ChatReply>;
      }
      if (reply.qs) {
        const quickSuggestItems = reply.qs.map(((quickSuggest: ConversationQuickSuggest) => ({ payload: quickSuggest.payload, text: quickSuggest.text })));
        return <ChatQuickSuggest key={`quick-sugguset-${quickSuggestItems[0].text}`} items={quickSuggestItems} handleQuickSuggest={handleQuickSuggest} />;
      }
      if (reply.ms) {
        return <ChatMultiSelect onMultiSelectChange={handleOnMultiSelectChange} items={reply.ms.items} key={`multi-select-${reply.ms.items[0].text}`} />;
      }
      return null;
    });
  }

  return replyComponents;
}

export default useHandleReplyComponents;
