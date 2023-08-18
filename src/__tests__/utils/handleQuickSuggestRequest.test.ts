import handleQuickSuggestRequest from '../../utils/chat/handleQuickSuggestRequest';

it('should format the quickSuggestRequest properly', () => {
  const replies = {
    intent: 'preference_employment_type',
    param: 'employment_types',
    submit: 'Submit preference',
    hint: '',
    items: [
      {
        text: 'Permanent',
        param: 'PERMANENT',
      },
      {
        text: 'Contract-To-Hire',
        param: 'CONTRACT_TO_HIRE',
      },
      {
        text: 'Contract',
        param: 'CONTRACTOR',
      },
    ],
  };

  const { dataRequest, textRequest } = handleQuickSuggestRequest(replies);
  expect(textRequest).toEqual('Permanent, Contract-To-Hire, Contract');
  expect(dataRequest).toEqual('preference_employment_type, "employment_types": ["PERMANENT","CONTRACT_TO_HIRE","CONTRACTOR"]');
});
