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
  });

  it('returns default data when user data in localStorage is invalid', () => {
    // Save invalid user data in localStorage
    localStorage.setItem('userState', '');

    const result = getUserData();
    expect(result).toEqual({
      loginStatus: false,
      savedJobs: undefined,
    });
  });

  it('returns default data when user data in localStorage is missing', () => {
    const result = getUserData();
    expect(result).toEqual({
      loginStatus: false,
      savedJobs: undefined,
    });
  });
});
