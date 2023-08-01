type ConversationQuickSuggest = {
  text: string;
  payload: string;
};

export type ConversationReply = {
  text?: string;
  qs?: Array<ConversationQuickSuggest>;
};

export type ConversationSupportedLanguage = {
  id: string;
  name: string;
  native_name: string;
};
