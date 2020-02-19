const webpack = require("webpack");
const path = require("path");
module.exports = {
  mode: "development",
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
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development"),
        REACT_APP_GRAPHQL_URI: JSON.stringify(
          process.env.REACT_APP_GRAPHQL_URI || "http://localhost:3100/graphql"
        )
      }
    })
  ],
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,

    watchOptions: {
      ignored: /node_modules/
    },

    proxy: {
      "/api": "http://localhost:3100"
    }
  },
  devtool: "eval",
  resolve: { extensions: [".js", ".jsx"] }
};
