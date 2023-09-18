import { getCookie } from 'cookies-next';
import prepareContinueRequest from '../../utils/chat/prepareContinueRequest';
import { ContinueRequestType } from '../../utils';
import Mock = jest.Mock;

jest.mock('cookies-next');

describe('prepareContinueRequest', () => {
  (getCookie as Mock).mockReturnValue('test');

  it('should get text continue request', () => {
    const text = 'test';
    const response = prepareContinueRequest(text, ContinueRequestType.TEXT_REPLY);
    expect(getCookie).toHaveBeenCalled();
    expect(response.data).not.toBeDefined();
    expect(response.reply_text).toEqual(text);
    expect(response.idToken).toEqual('test');
    expect(response.request_type).toEqual(ContinueRequestType.TEXT_REPLY);
  });

  it('should get quicksuggest continue request', () => {
    const data = {
      text: 'test',
      payload: 'testPayload',
    };

    const response = prepareContinueRequest(data, ContinueRequestType.QUICK_SUGGEST);
    expect(getCookie).toHaveBeenCalled();
    expect(response.data).toEqual('testPayload');
    expect(response.reply_text).toEqual('test');
    expect(response.idToken).toEqual('test');
    expect(response.request_type).toEqual(ContinueRequestType.QUICK_SUGGEST);
  });

  it('should get multislect continue request', () => {
    const data = {
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

    const response = prepareContinueRequest(data, ContinueRequestType.QUICK_SUGGEST);
    expect(getCookie).toHaveBeenCalled();
    expect(response.data).toEqual('preference_employment_type, "employment_types": ["PERMANENT","CONTRACT_TO_HIRE","CONTRACTOR"]');
    expect(response.reply_text).toEqual('Permanent, Contract-To-Hire, Contract');
    expect(response.idToken).toEqual('test');
    expect(response.request_type).toEqual(ContinueRequestType.QUICK_SUGGEST);
  });
});
