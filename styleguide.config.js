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
  title: "Shared Components Library Docs",
  moduleAliases: {
    "@ffw/randstad-shared-components": path.resolve(__dirname, "src/index.js"),
  },
  ignore: ["**/components/form-group/**"],

  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, ".js");

    return `import { ${name} } from '${pkg.name}';`;
  },

  styleguideComponents: {
    StyleGuideRenderer: path.join(__dirname, "src/docs-lib/StyleGuideRenderer"),
  },

  webpackConfig: config,

  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "https://uk-static-dev.dta.randstadbluex.com/articles/static/assets/css/orbit-randstad.css",
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
        "src/components/headers/**",
        "src/components/article-overview/**",
      ],
    },
    { name: "Accordion", components: "src/components/accordion/**/*.js" },
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
