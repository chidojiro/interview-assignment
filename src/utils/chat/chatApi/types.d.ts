type ConversationQuickSuggest = {
  text: string;
  payload: string;
};

export type ConversationMultiSelectItem = {
  text: string;
  param: string;
};

type ConversationMultiSelect = {
  intent: string;
  param: string;
  submit: string;
  hint: string;
  items: Array<ConversationMultiSelectItem>;
};

export type ConversationReply = {
  text?: string;
  qs?: Array<ConversationQuickSuggest>;
  ms?: ConversationMultiSelect;
};

export type ConversationSupportedLanguage = {
  id: string;
  name: string;
  native_name: string;
};

export type ConversationData = {
  conversationId: string;
  responseId: string;
};
