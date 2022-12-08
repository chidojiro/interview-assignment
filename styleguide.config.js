const path = require("path");
const pkg = require("./package.json");

const config = Object.assign({}, require("./webpack.config.js"), {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
});

module.exports = {
  title: "Shared Components Library",
  moduleAliases: {
    "@ffw/randstad-shared-components": path.resolve(__dirname, "src/index.js"),
  },
  ignore: [
    "**/components/navigation/**",
    "**/components/forms/autosuggest/**",
    "**/components/base/**",
    "**/components/form-group/Label.js",
  ],

  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, ".js");

    return `import { ${name} } from '${pkg.name}';`;
  },

  styleguideComponents: {
    StyleGuideRenderer: path.join(__dirname, "src/docs-lib/StyleGuideRenderer"),
    ReactExample: path.join(__dirname, "src/docs-lib/ReactExample"),
  },

  webpackConfig: config,

  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "https://uk-static-dev2.dta.randstad-bluex.com/articles/static/assets/css/orbit-randstad.css",
        },
      ],
    },
  },

  sections: [
    {
      name: "Shared components",
      components: "src/components/**/*.js",
      ignore: [
        "src/components/accordion/**",
        "src/components/forms/**",
        "src/components/form-group/**",
        "src/components/headers/**",
        "src/components/article-overview/**",
      ],
    },
    { name: "Accordion", components: "src/components/accordion/**/*.js" },
    {
      name: "Form Groups",
      components: "src/components/form-group/**/*.js",
      description: "Provides wrapper components for form elements",
    },
    { name: "Forms", components: "src/components/forms/**/*.js" },
    { name: "Headers", components: "src/components/headers/**/*.js" },
    {
      name: "Article Overview",
      sections: [
        {
          name: "List",
          components: "src/components/article-overview/list/**/*.js",
        },
      ],
    },
  ],
};
