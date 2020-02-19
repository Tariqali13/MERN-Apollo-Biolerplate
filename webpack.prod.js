const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: [`${__dirname}/src/index.jsx`, "./src/css/styles.scss"],
  output: {
    path: `${__dirname}/dist/js`,
    filename: "bundle.js",
    publicPath: "/js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-transform-runtime"
            ]
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "style-loader"
        ]
      }
    ]
  },
  resolve: { extensions: [".js", ".jsx"] },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/styles.css",
      chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development"),
        REACT_APP_GRAPHQL_URI: JSON.stringify(
          process.env.REACT_APP_GRAPHQL_URI || "http://localhost:3100/graphql"
        )
      }
    })
  ]
};
