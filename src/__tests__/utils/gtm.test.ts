import { gtmScriptInitializer } from '../../utils/gtm';

// todo nice idea for the name in the Header.props.
const gtmSettings = { id: '1', type: 'random', country: 'country' };
const getUserDataMock = jest.fn();
jest.mock('../../utils/getUserData', () => ({
  __esModule: true,
  default: () => getUserDataMock(),
}));

jest.useFakeTimers().setSystemTime(new Date('2023-10-01'));

// Define datalayer property to fix issue with typescript errors: dataLayer doesn't exists.
const windowObject: Window & { dataLayer? : unknown[] } = window;

describe('gtm', () => {
  const { env } = process;
  beforeEach(() => {
    process.env = { ...env };
    document.head.replaceChildren();
    delete windowObject.dataLayer;

    getUserDataMock.mockReturnValue({
      currentUser: {
        email: 'john@example.com',
        createdDate: '2023-08-17T05:32:48.269472588Z',
        id: 'xxxxxxxx-b63f-4f91-8279-d0d04a11f858',
      },
      loginStatus: true,
    });
  });

  describe('gtmScriptInitializer', () => {
    it('should add GTM script as a first tag to the page', () => {
      const j: HTMLScriptElement = document.createElement('script');
      j.setAttribute('async', 'true');
      j.setAttribute('src', 'https://example.com/script.js');
      document.head.appendChild(j);

      gtmScriptInitializer(windowObject, document, 'script', 'dataLayer', gtmSettings, 'en', true);
      const script = document.getElementsByTagName('script')[0];
      expect(script).toBeInstanceOf(HTMLScriptElement);
      expect(script).toHaveAttribute('src', 'https://www.googletagmanager.com/gtm.js?id=1');
      expect(script).toHaveAttribute('async', 'true');
    });

    it('should add GTM script tag even if there are no scripts yet', () => {
      gtmScriptInitializer(windowObject, document, 'script', 'dataLayer', gtmSettings, 'en', true);
      const script = document.getElementsByTagName('script')[0];
      expect(script).toBeInstanceOf(HTMLScriptElement);
      expect(script).toHaveAttribute('src', 'https://www.googletagmanager.com/gtm.js?id=1');
      expect(script).toHaveAttribute('async', 'true');
    });

    it('should include gtm script only once even if called multiple times', () => {
      gtmScriptInitializer(windowObject, document, 'script', 'dataLayer', gtmSettings, 'en', true);
      gtmScriptInitializer(windowObject, document, 'script', 'dataLayer', gtmSettings, 'en', true);
      const scripts = document.getElementsByTagName('script');
      expect(scripts).toHaveLength(1);
    });

    it('should include global datalayer object', () => {
      process.env.NEXT_PUBLIC_ENVIRONMENT = 'dev2';
      gtmScriptInitializer(windowObject, document, 'script', 'dataLayer', gtmSettings, 'en', true);
      expect(windowObject.dataLayer).toHaveLength(2);
      expect(windowObject.dataLayer?.[0]).toStrictEqual({
        page: {
          country: 'COUNTRY',
          environment: 'DEV',
          language: 'en',
          type: 'random',
        },
        user: {
          cms_user_id: '',
          account_id: 'xxxxxxxx-b63f-4f91-8279-d0d04a11f858',
          employee_number: '',
          login_status: 'member',
          signup_date: '2023-08-17T05:32:48.269472588Z',
          ip_address: '',
          no_of_applications: '',
          type: '',
        },
      });

      expect(windowObject.dataLayer?.[1]).toStrictEqual({
        'gtm.start': new Date('2023-10-01').getTime(),
        event: 'gtm.js',
      });
    });

    it('should use "guest" login status for the anonymous user', () => {
      getUserDataMock.mockReturnValue({
        loginStatus: false,
        savedJobs: {
          totalElements: 0,
        },
      });
      gtmScriptInitializer(windowObject, document, 'script', 'dataLayer', gtmSettings, 'en', true);
      expect((windowObject.dataLayer?.[0] as { user: { login_status?: string } })?.user?.login_status).toBe('guest');
    });

    it('should include minified version of user object if my randstad app is disabled', () => {
      process.env.NEXT_PUBLIC_ENVIRONMENT = 'dev2';
      gtmScriptInitializer(windowObject, document, 'script', 'dataLayer', gtmSettings, 'en', false);
      expect(windowObject.dataLayer).toHaveLength(2);
      expect(windowObject.dataLayer?.[0]).toStrictEqual({
        page: {
          country: 'COUNTRY',
          environment: 'DEV',
          language: 'en',
          type: 'random',
        },
        user: {
          cms_user_id: '',
          ip_address: '',
          no_of_applications: '',
        },
      });
    });

    describe('environment detection', () => {
      it('should use "dev" environment if global env is not set', () => {
        getUserDataMock.mockReturnValue({
          loginStatus: false,
          savedJobs: {
            totalElements: 0,
          },
        });
        gtmScriptInitializer(windowObject, document, 'script', 'dataLayer', gtmSettings, 'en', true);
        expect((windowObject.dataLayer?.[0] as { page: { environment?: string } })?.page?.environment).toBe('DEV');
      });

      it('should use "QA" environment if global env is set to tst2', () => {
        process.env.NEXT_PUBLIC_ENVIRONMENT = 'tst2';
        getUserDataMock.mockReturnValue({
          loginStatus: false,
          savedJobs: {
            totalElements: 0,
          },
        });
        gtmScriptInitializer(windowObject, document, 'script', 'dataLayer', gtmSettings, 'en', true);
        expect((windowObject.dataLayer?.[0] as { page: { environment?: string } })?.page?.environment).toBe('QA');
      });

      it('should use "PROD" environment if global env is set to prd2', () => {
        process.env.NEXT_PUBLIC_ENVIRONMENT = 'prd2';
        getUserDataMock.mockReturnValue({
          loginStatus: false,
          savedJobs: {
            totalElements: 0,
          },
        });
        gtmScriptInitializer(windowObject, document, 'script', 'dataLayer', gtmSettings, 'en', true);
        expect((windowObject.dataLayer?.[0] as { page: { environment?: string } })?.page?.environment).toBe('PROD');
      });
    });
  });
});
