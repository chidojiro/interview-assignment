const fetchAsset = require('./fetchAsset');
const packageConf = require('../../package.json');

const credentials = Buffer.from('RandstadWeb:WelcomeToRXPWeb!2023').toString('base64');
const auth = { Authorization: `Basic ${credentials}` };
const headers = { headers: auth };

fetchAsset(
  'https://uk-static-dev2.dta.randstad-bluex.com/themes/custom/bluex/dist/assets/image/icons.svg',
  headers,
  'autogenerated-icons.svg',
);

packageConf.orbitLibraries.forEach((lib) => fetchAsset(
  `https://uk-static-dev2.dta.randstad-bluex.com/articles/static/assets/js/imports/${lib}.js`,
  headers,
  `${lib}.js`,
));
