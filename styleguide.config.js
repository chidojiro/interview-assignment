const path = require('path');
const { withCustomConfig, getDefaultExportForFile } = require('react-docgen-typescript');

const pkg = require('./package.json');
const webpackConfig = require('./webpack.config.js');

const config = { ...webpackConfig };

config.module.rules.push({
  test: /\.css$/,
  use: ['css-loader'],
});

module.exports = {
  title: 'Shared Components Library',
  moduleAliases: {
    '@ffw/randstad-shared-components': path.resolve(__dirname, 'src/index.ts'),
  },
  ignore: [
    '**/components/forms/autosuggest/**',
    '**/components/base/**',
    '**/components/form-group/Label.js',
  ],

  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx');

    return `import { ${name} } from '${pkg.name}/build';`;
  },

  styleguideComponents: {
    StyleGuideRenderer: path.join(__dirname, 'src/docs-lib/StyleGuideRenderer'),
    ReactExample: path.join(__dirname, 'src/docs-lib/ReactExample'),
    TableRenderer: path.join(__dirname, 'src/docs-lib/TableRenderer'),
  },

  webpackConfig: config,

  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://uk-static-dev2.dta.randstad-bluex.com/articles/static/assets/css/orbit-randstad.css',
        },
      ],
    },
  },

  propsParser: withCustomConfig('./tsconfig.json', {
    componentNameResolver: (_, source) => getDefaultExportForFile(source).trim(),
    shouldRemoveUndefinedFromOptional: true,
    shouldExtractLiteralValuesFromEnum: true,
  }).parse,

  sections: [
    {
      name: 'Shared components',
      components: [
        'src/components/headers/**/*.tsx',
        'src/components/footer/**/*.tsx',
        'src/components/Badge.tsx',
        'src/components/button/Button.tsx',
        'src/components/notice/Notice.tsx',
        'src/components/Block.tsx',
      ],
    },
    {
      name: 'Form Groups',
      components: 'src/components/form-group/**/*.tsx',
      description: 'Provides wrapper components for form elements',
    },
    {
      name: 'Navigation',
      // components: 'src/components/navigation/**/*.tsx',
      components: [
        'src/components/navigation/TabBar.tsx',
      ],
      description: 'Navigation components used across the applications.',
    },
    {
      name: 'Form elements',
      components: 'src/components/forms/*.tsx',
      description: 'Form components - Input, Checkbox, etc.',
    },
    {
      name: 'Button',
      components: 'src/components/button/**/*.tsx',
      description: 'Provides wrapper components for button element.',
    },
    {
      name: 'Overlays',
      components: 'src/components/overlays/**/*.tsx',
      description: 'Provides wrapper components for overlays.',
    },
    // {
    //   name: 'Shared components',
    //   components: 'src/components/**/*.js',
    //   ignore: [
    //     'src/components/accordion/**',
    //     'src/components/forms/**',
    //     'src/components/form-group/**',
    //     'src/components/headers/**',
    //     'src/components/article-overview/**',
    //   ],
    // },
    // { name: 'Accordion', components: 'src/components/accordion/**/*.js' },
    //     {
    //   name: 'Form Groups',
    //   components: 'src/components/form-group/**/*.js',
    //   description: 'Provides wrapper components for form elements',
    // },
    // { name: 'Forms', components: 'src/components/forms/**/*.tsx' },
    // { name: 'Headers', components: 'src/components/headers/**/*.js' },
    // {
    //   name: 'Article Overview',
    //   sections: [
    //     {
    //       name: 'List',
    //       components: 'src/components/article-overview/list/**/*.js',
    //     },
    //   ],
    // },
  ],
};
