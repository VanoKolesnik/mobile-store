const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const entry = require("./config/entry.js")
const htmlPlugins = require("./config/htmlPlugins.js")
const getFilesFromDir = require("./config/getFilesFromDir.js")

module.exports = {
  entry: entry,
  output: {
    path: path.join(__dirname, "build"),
    filename: "./scripts/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => {
                return [
                  require("autoprefixer")
                ]
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      { 
        test: /\.css$/, 
        use: ExtractTextPlugin.extract({
          fallback: "style-loader", 
          use: "css-loader" 
        })
      },
      {
        test: /\.(png|jpe?g)$/,
        use: [
          {
            loader: "url-loader"
          },
        ],
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "source"),
    host: "localhost",
    port: 1338,
    hot: true
  },
  plugins: [
    ...htmlPlugins,
    new ExtractTextPlugin("./styles/[name].css"),
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {
        from: "./source/images/",
        to: "./images/"
      }
    ])
  ]
}