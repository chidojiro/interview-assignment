import { setCookie, deleteCookie } from 'cookies-next';
import getUserData from '../../utils/getUserData';

describe('getUserData', () => {
  afterEach(() => {
    // Clear localStorage after each test
    localStorage.clear();
  });

  it('returns user data from localStorage when available', () => {
    const data = {
      currentUser: {
        name: 'John Doe',
        email: 'john@example.com',
      },
      loginStatus: true,
      savedJobs: {
        totalElements: 5,
      },
    };

    // Add IdToken and RefreshToken as Cookies in order for getUserData logic to work
    setCookie('IdToken', JSON.stringify(''));
    setCookie('RefreshToken', JSON.stringify(''));

    // Save user data in localStorage
    localStorage.setItem('userState', JSON.stringify(data));

    const result = getUserData();

    expect(result).toEqual({
      currentUser: {
        name: 'John Doe',
        email: 'john@example.com',
      },
      loginStatus: true,
      savedJobs: {
        totalElements: 5,
      },
    });

    deleteCookie('IdToken');
    deleteCookie('RefreshToken');
  });

  it('returns default data when user data in localStorage is invalid', () => {
    // Save invalid user data in localStorage
    localStorage.setItem('userState', '');

    const result = getUserData();
    expect(result).toEqual({
      loginStatus: false,
      savedJobs: {
        totalElements: 0,
      },
    });
  });

  it('returns default data when user data in localStorage is missing', () => {
    const result = getUserData();
    expect(result).toEqual({
      loginStatus: false,
      savedJobs: {
        totalElements: 0,
      },
    });
  });
});
