import CookieAuthStorage from './CookieAuthStorage';

const authStorage = new CookieAuthStorage({
  idTokenName: 'IdToken',
  refreshTokenName: 'RefreshToken',
});

export default authStorage;
