const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    main: "./src/js/main.js",
    another: "./src/js/another.js",
    hamburger: "./src/js/hamburger.js"
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              '**/*.DS_Store'
            ],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index", "main", "hamburger"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/another.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "another.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-css.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "nauka-css.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-html.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "nauka-html.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-js.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "nauka-js.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-narzedzia.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "nauka-narzedzia.html",
    }),

    // Nauka CSS
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-css/tydzien2-css.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien2-css.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-css/tydzien3-css.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien3-css.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-css/tydzien4-css.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien4-css.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-css/tydzien5-css.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien5-css.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-css/tydzien6-css.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien6-css.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-css/tydzien7-css.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien7-css.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-css/tydzien8-css.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien8-css.html",
    }),

    // Nauka HTML'a
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-html/tydzien2-html.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien2-html.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-html/tydzien3-html.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien3-html.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-html/tydzien5-html.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien5-html.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-html/tydzien6-html.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien6-html.html",
    }),

    // Nauka JavaScript'u
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-js/tydzien3-js.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien3-js.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-js/tydzien4-js.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien4-js.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-js/tydzien5-js.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien5-js.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-js/tydzien6-js.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien6-js.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-js/tydzien8-js.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien8-js.html",
    }),

    // Narzędzia frontendowca
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-narzedzia/tydzien1-narzedzia.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien1-narzedzia.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-narzedzia/tydzien2-narzedzia.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien2-narzedzia.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-narzedzia/tydzien3-narzedzia.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien3-narzedzia.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-narzedzia/tydzien4-narzedzia.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien4-narzedzia.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-narzedzia/tydzien5-narzedzia.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien5-narzedzia.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-narzedzia/tydzien6-narzedzia.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien6-narzedzia.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-narzedzia/tydzien7-narzedzia.html",
      inject: true,
      chunks: ["index", "hamburger"],
      filename: "tydzien7-narzedzia.html",
    }),
  ],
};
