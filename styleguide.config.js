const path = require('path');
const { withCustomConfig, getDefaultExportForFile } = require('react-docgen-typescript');

const pkg = require('./package.json');
const webpackConfig = require('./webpack.config');

const config = { ...webpackConfig };

config.module.rules.push({
  test: /\.s[ac]ss$/i,
  use: ['css-loader', 'sass-loader'],
});

module.exports = {
  title: 'Shared Components Library',
  assetsDir: path.join(__dirname, 'src/assets/'),
  moduleAliases: {
    '@ffw/randstad-shared-components': path.resolve(__dirname, 'src/index.ts'),
  },
  ignore: [
    '**/components/forms/autosuggest/**',
    '**/components/base/**',
    '**/components/form-group/Label.js',
  ],

  getComponentPathLine(componentPath) {
    const folderName = path.basename(path.dirname(componentPath));
    return `import { ${folderName} } from '${pkg.name}';`;
  },

  styleguideComponents: {
    StyleGuideRenderer: path.join(__dirname, 'src/docs-lib/StyleGuideRenderer'),
    TableRenderer: path.join(__dirname, 'src/docs-lib/TableRenderer'),
  },

  webpackConfig: config,

  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'css/orbit-randstad.css',
        },
      ],
    },
  },

  propsParser: withCustomConfig('./tsconfig.json', {
    componentNameResolver: (_, source) => getDefaultExportForFile(source).trim(),
    shouldRemoveUndefinedFromOptional: true,
    shouldExtractLiteralValuesFromEnum: true,
  }).parse,

  // This option will hide components from the styleguide that do not have .md file.
  skipComponentsWithoutExample: true,

  sections: [
    {
      name: 'Common',
      components: 'src/components/common/**/*.tsx',
      description: 'Uncategorized components.',
    },
    {
      name: 'Accordion',
      components: 'src/components/accordion/**/*.tsx',
      description: 'Accordion components',
    },
    {
      name: 'Contacts',
      components: 'src/components/contacts/**/*.tsx',
      description: 'Components such as avatar, contact details, profiles',
    },
    {
      name: 'Headers',
      components: 'src/components/headers/**/*.tsx',
      description: 'Header components like navigation, breadcrumbs, etc.',
    },
    {
      name: 'Footer',
      components: 'src/components/footer/**/*.tsx',
      description: 'Footer components - Columns, Socials, etc.',
    },
    {
      name: 'Cards',
      components: 'src/components/cards/**/*.tsx',
      description: 'Card components such as Job card, Meta info cards, Dashboard cards, etc.',
    },
    {
      name: 'Notifications',
      components: 'src/components/notifications/**/*.tsx',
      description: 'Notification components such as Toast, Notice, TextNotice, etc.',
    },
    {
      name: 'Loaders',
      components: 'src/components/loaders/**/*.tsx',
      description: 'Preloader, LayoutPreloader and other loading components.',
    },
    {
      name: 'Navigation',
      components: 'src/components/navigation/**/*.tsx',
      description: 'Navigation components used across the applications.',
    },
    {
      name: 'Indicators',
      components: 'src/components/indicators/**/*.tsx',
      description: 'Percentage, Rating, Step, Strength, etc.',
    },
    {
      name: 'Form elements',
      components: 'src/components/forms/**/*.tsx',
      description: 'Form components - Input, Checkbox, etc.',
    },
    {
      name: 'Buttons',
      components: 'src/components/buttons/**/*.tsx',
      description: 'Button elements.',
    },
    {
      name: 'Overlays',
      components: 'src/components/overlays/**/*.tsx',
      description: 'Provides wrapper components for overlays.',
    },
    {
      name: 'My Environment',
      components: 'src/components/my-environment/**/*.tsx',
      description: 'My Environment components',
    },
    {
      name: 'Carousels',
      components: 'src/components/carousels/**/*.tsx',
      description: 'Carousels such as Application process cards',
    },
    {
      name: 'Show more',
      components: 'src/components/show-more/**/*.tsx',
      description: 'Component to let the user show more results of list or card type content.',
    },
    {
      name: 'Pagination',
      components: 'src/components/pagination/**/*.tsx',
      description: 'Pagination components.',
    },
    {
      name: 'Tags',
      components: 'src/components/tags/**/*.tsx',
      description: 'Label, filter, categorize or organize content using keywords that describe them.',
    },
    {
      name: 'Chat',
      components: 'src/components/chat/Chat/*.tsx',
      description: 'Chat component used for pre-screening.',
    },
    {
      name: 'Tables',
      components: 'src/components/tables/**/*.tsx',
      description: 'A collection of related data held in a structured format consisting of columns, and rows.',
    },
  ],
};
