export type ConversationQuickSuggest = {
  text: string;
  payload: string;
};

export type ConversationMultiSelectItem = {
  text: string;
  param: string;
};

export type ConversationMultiSelect = {
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

export enum ContinueRequestType {
  TEXT_REPLY = 'TEXT_REPLY',
  QUICK_SUGGEST = 'QUICK_SUGGEST',
}
