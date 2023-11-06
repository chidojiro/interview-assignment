import getUserData from '../../utils/getUserData';

describe('getUserData', () => {
  afterEach(() => {
    // Clear localStorage after each test
    localStorage.clear();
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
