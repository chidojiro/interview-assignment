import CookieAuthStorage from './CookieAuthStorage';

const authStorage = new CookieAuthStorage({
  idTokenName: 'IdToken',
  refreshTokenName: 'refreshToken',
});

export default authStorage;
